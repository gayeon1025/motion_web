import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import queryString from 'query-string';
import get from 'lodash/get';
import { selectors, operations } from 'state/modules/home';
import LayoutHeader from 'views/components/LayoutHeader';
import { bindActionCreators } from 'redux';
import Pagination from 'views/components/Pagination.js';

const BoardPage = ({ boards, fetchBoards }) => {
  const isEmptyPost = true;
  const currentPage =
    window.location.search === ''
      ? 1
      : queryString.parse(window.location.search).page;

  // useEffect(() => {
  //   fetchBoards(page);
  // }, [ page, fetchBoards ]);

  return (
    <>
      <LayoutHeader />
      <div className="board wrap_content">
        <div className="content_title">
          <span className="font_bold" style={{ width: '200px' }}>
            게시판
          </span>
          <span className="font_thin">
            건의사항, 교육문의 등 자유롭게 질문해 주세요 :-)
          </span>
        </div>
        <div style={{ textAlign: 'right' }}>
          <button className="btn_add font_thin" type="button">
            글쓰기
          </button>
        </div>
        <table>
          <thead>
            <tr>
              <th>번호</th>
              <th>제목</th>
              <th>작성자</th>
              <th>등록일</th>
            </tr>
          </thead>
          <tbody>
            {isEmptyPost ? (
              <tr>
                <td colSpan={4}>등록된 게시글이 없습니다</td>
              </tr>
            ) : null}
          </tbody>
        </table>
        <Pagination
          currentPage={currentPage}
          totalPages={get(boards, 'numberOfTotalPages', 1)}
          hasPreviousPage={get(boards, 'hasPreviousPage', false)}
          hasNextPage={get(boards, 'hasNextPage', false)}
          fetchBoards={fetchBoards}
        />
      </div>
    </>
  );
};

function mapStateToProps(state, props) {
  return {
    boards: selectors.getBoards(state, props)
  };
}

export default connect(mapStateToProps, dispatch =>
  bindActionCreators(
    {
      fetchBoards: operations.fetchBoards
    },
    dispatch
  )
)(BoardPage);
