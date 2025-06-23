import React from 'react';
import WebsitesList from '../components/websites/WebsitesList.jsx';
import WebsiteTable from '../components/websites/WebsiteTable.jsx';
import Pagination from '../components/layout/Pagination.jsx';

const HomePage = () => {
  return (
    <div>
      <WebsitesList />
      <div style={{ padding: '0 2rem' }}>
        <WebsiteTable />
        <Pagination />
      </div>
    </div>
  );
};

export default HomePage; 