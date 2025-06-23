import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Container } from 'react-bootstrap';
import { Plus } from 'react-bootstrap-icons';
import './WebsitesList.css';

const WebsitesList = () => {
  const navigate = useNavigate();

  return (
    <div className="websites-list-container">
      <Container fluid>
        <div className="title-container">
          <h1 className="page-title">All websites</h1>
          <Button variant="primary" className="add-website-btn" onClick={() => navigate('/add-website')}>
            <Plus size={20} className="me-2" />
            Add website
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default WebsitesList; 