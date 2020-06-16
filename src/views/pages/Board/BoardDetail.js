import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectors, operations } from 'state/modules/home';
import LayoutHeader from 'views/components/LayoutHeader';

const BoardDetail = ({
  boardId,
  board,
  attatchments,
  fetchBoard,
  fetchAttatchments
}) => {
  useEffect(() => {
    if (!board) {
      fetchBoard(boardId);
    }
  }, [boardId, board, fetchBoard]);

  const backToList = () => {
    window.location.href = '/boards';
  };

  return (
    <>
      <LayoutHeader />
      {board && (
        <div className="board_detail wrap_content">
          <table className="title_table">
            <tbody>
              <tr>
                <th className="font_thin">제목</th>
                <td className="font_bold" colSpan={3}>
                  {' '}
                  {board.title}{' '}
                </td>
              </tr>
              <tr>
                <th className="font_thin">작성자</th>
                <td className="font_bold">
                  {board.author.name}&nbsp;({board.author.id})
                </td>
                <th className="font_thin">작성일</th>
                <td className="font_bold">{board.updatedAt}</td>
              </tr>
            </tbody>
          </table>
          <div className="contents_box font_thin">{board.contents}</div>
          <table className="attatchment_table">
            <tbody>
              <tr>
                <th className="font_thin">첨부파일</th>
                <td className="font_bold">
                  {!board.attatchments ? (
                    <span style={{ color: 'dimgray' }}>첨부파일 없음</span>
                  ) : (
                    <ul></ul>
                  )}
                </td>
              </tr>
            </tbody>
          </table>
          <button className="font_thin" onClick={() => backToList()}>
            목록보기
          </button>
          {/* TODO */}
          {/* 댓글구현하기 */}
        </div>
      )}
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
