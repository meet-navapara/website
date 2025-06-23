import React from 'react';
import { ChevronLeft, ChevronRight } from 'react-bootstrap-icons';
import './Pagination.css';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  let pageNumbers;
  if (totalPages <= 10) {
    // Always show 1,2,3,...,8,9,10 (disable buttons for pages > totalPages)
    pageNumbers = [1, 2, 3, '...', 8, 9, 10];
  } else {
    // Dynamic logic for more than 10 pages
    if (currentPage <= 5) {
      pageNumbers = [1, 2, 3, 4, 5, 6, '...', totalPages - 1, totalPages];
    } else if (currentPage >= totalPages - 4) {
      pageNumbers = [1, 2, '...', totalPages - 5, totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1, totalPages];
    } else {
      pageNumbers = [1, 2, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages - 1, totalPages];
    }
  }

  return (
    <div className="pagination-container">
      <div className="pagination-wrapper">
        <button
          className="pagination-arrow"
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <ChevronLeft size={16} />
          <span>Previous</span>
        </button>
        <div className="pagination-pages">
          {pageNumbers.map((num, idx) =>
            num === '...'
              ? <span key={idx} className="pagination-ellipsis">...</span>
              : <button
                  key={num}
                  className={`pagination-page-item${currentPage === num ? ' active' : ''}${num > totalPages ? ' disabled' : ''}`}
                  onClick={num > totalPages ? undefined : () => onPageChange(num)}
                  disabled={num > totalPages}
                  style={num > totalPages ? { cursor: 'not-allowed', opacity: 0.5 } : {}}
                >
                  {num}
                </button>
          )}
        </div>
        <button
          className="pagination-arrow"
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          <span>Next</span>
          <ChevronRight size={16} />
        </button>
      </div>
    </div>
  );
};

export default Pagination; 