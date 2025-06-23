import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Table, Container } from 'react-bootstrap';
import GreyNichesIcons from './GreyNichesIcons';
import './WebsiteTable.css';

const WebsiteTable = ({ currentPage, recordsPerPage }) => {
  const websites = useSelector((state) => state.websites.list);
  const navigate = useNavigate();

  const handleRowClick = (id) => {
    navigate(`/edit-website/${id}`);
  };

  // Pagination logic
  const startIndex = (currentPage - 1) * recordsPerPage;
  const endIndex = startIndex + recordsPerPage;
  const paginatedWebsites = websites.slice(startIndex, endIndex);

  return (
    <Container fluid>
      <Table responsive hover className="website-table">
        <thead>
          <tr>
            <th>Website</th>
            <th>Country</th>
            <th>Language</th>
            <th>Category</th>
            <th>Other categories</th>
            <th>Grey niches</th>
          </tr>
        </thead>
        <tbody>
          {paginatedWebsites.map((row) => (
            <tr key={row.id} onClick={() => handleRowClick(row.id)} className="clickable-row">
              <td className="website-cell">{row.websiteUrl}</td>
              <td className="country-cell">
                <img src={row.flag} alt={row.country?.label} className="country-flag" />
                {row.country?.label}
              </td>
              <td className="language-cell">
                {typeof row.language === 'object' && row.language !== null ? row.language.label : row.language}
              </td>
              <td className="category-cell">{row.categories ? Object.keys(row.categories).find(c => row.categories[c]) : ''}</td>
              <td className="other-categories-cell">{row.categories ? Object.keys(row.categories).filter(c => row.categories[c]).slice(1).join(', ') : ''}</td>
              <td><GreyNichesIcons /></td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default WebsiteTable; 