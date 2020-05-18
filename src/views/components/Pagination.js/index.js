import React, { useEffect } from 'react';
import classNames from 'classnames';

const Pagination = ({
  currentPage,
  totalPages,
  fetchBoards,
  hasPreviousPage,
  hasNextPage
}) => {
  useEffect(() => {
    fetchBoards(currentPage);
  }, [fetchBoards, currentPage]);

  return (
    <div className="pagination">
      <ul>
        <li className={classNames('page-item', { disabled: !hasPreviousPage })}>
          &laquo;
        </li>
        {Array.from(Array(5)).map((_, index) => {
          return (
            index + 1 <= totalPages && (
              <li
                className="page-item font_thin"
                key={index}
                onClick={() => {
                  fetchBoards(index + 1);
                }}
              >
                {index + 1}
              </li>
            )
          );
        })}
        <li className={classNames('page-item', { disabled: !hasNextPage })}>
          &raquo;
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
