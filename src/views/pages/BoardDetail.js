import React, { useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import get from 'lodash/get';
import 'codemirror/lib/codemirror.css';
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';
import LayoutHeader from 'views/components/LayoutHeader';
import { selectors, operations } from 'state/modules/home';
import Attatchments from 'views/components/Attatchments';

const BoardDetail = ({
  boardId,
  board,
  attatchments,
  fetchBoard,
  fetchAttatchments,
  saveBoard
}) => {
  useEffect(() => {
    if (!board) {
      fetchBoard(boardId);
    }
  }, [boardId, board, fetchBoard]);

  const titleRef = useRef();
  const addNewBoard = () => {
    if (!titleRef.current.value) {
      alert('제목을 입력해주세요');
      return;
    }

    saveBoard({
      title: titleRef.current.value,
      content: editorRef.current.getInstance().getMarkdown(),
      attatchments
    });
  };

  const editorRef = useRef();
  return (
    <>
      <LayoutHeader />
      <div className="board_detail wrap_content">
        <table className="title_table">
          <tbody>
            <tr>
              <td className="font_thin">제목</td>
              <td>
                <input
                  ref={titleRef}
                  type="text"
                  placeholder="제목을 입력하세요"
                  autoFocus={true}
                />
              </td>
            </tr>
          </tbody>
        </table>
        <Attatchments
          attatchments={attatchments}
          fetchAttatchments={fetchAttatchments}
        />
        <div style={{ marginTop: '30px', textAlign: 'left' }}>
          <Editor
            placeholder="내용을 입력하세요"
            previewStyle="vertical"
            height="500px"
            initialEditType="wysiwyg"
            hideModeSwitch="true"
            ref={editorRef}
          />
        </div>
        <button className="add_post font_thin" onClick={() => addNewBoard()}>
          등록
        </button>
      </div>
    </>
  );
};

function mapStateToProps(state, props) {
  const {
    match: {
      params: { boardId }
    }
  } = props;

  return {
    boardId,
    board: selectors.getBoard(state, props),
    attatchments: selectors.getAttatchments(state, props)
  };
}

export default connect(mapStateToProps, dispatch =>
  bindActionCreators(
    {
      fetchBoard: operations.fetchBoard,
      fetchAttatchments: operations.fetchAttatchments,
      saveBoard: operations.saveBoard
    },
    dispatch
  )
)(BoardDetail);
