import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import WebsitesList from '../components/websites/WebsitesList.jsx';
import WebsiteTable from '../components/websites/WebsiteTable.jsx';
import Pagination from '../components/layout/Pagination.jsx';

const RECORDS_PER_PAGE = 10;

const HomePage = () => {
  const websites = useSelector((state) => state.websites.list);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(websites.length / RECORDS_PER_PAGE);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div>
      <WebsitesList />
      <div style={{ padding: '0 2rem' }}>
        <WebsiteTable currentPage={currentPage} recordsPerPage={RECORDS_PER_PAGE} />
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default HomePage; 