import React from 'react';
import { ChevronLeft, ChevronRight } from 'react-bootstrap-icons';
import './Pagination.css';

const Pagination = () => {
  return (
    <div className="pagination-container">
      <div className="pagination-wrapper">
        <button className="pagination-arrow" disabled>
          <ChevronLeft size={16} />
          <span>Previous</span>
        </button>
        <div className="pagination-pages">
          <button className="pagination-page-item active">1</button>
          <button className="pagination-page-item">2</button>
          <button className="pagination-page-item">3</button>
          <span className="pagination-ellipsis">...</span>
          <button className="pagination-page-item">8</button>
          <button className="pagination-page-item">9</button>
          <button className="pagination-page-item">10</button>
        </div>
        <button className="pagination-arrow">
          <span>Next</span>
          <ChevronRight size={16} />
        </button>
      </div>
    </div>
  );
};

export default Pagination; 