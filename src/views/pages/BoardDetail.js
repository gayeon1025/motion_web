import React from 'react';
import { connect } from 'react-redux';
import LayoutHeader from 'views/components/LayoutHeader';
import { selectors } from 'state/modules/home';

const BoardDetail = ({ board }) => {
  console.log(board);
  return (
    <>
      <LayoutHeader />
      <div className="board_detail wrap_content"></div>
    </>
  );
};

function mapStateToProps(state, props) {
  console.log(selectors.getBoard(state, props));
  return {
    board: selectors.getBoard(state, props)
  };
}

export default connect(mapStateToProps, {})(BoardDetail);
