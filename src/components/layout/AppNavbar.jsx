import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { Wallet2, Bag, Person, Hexagon } from 'react-bootstrap-icons';
import { ReactComponent as KrakenLogo } from '../../assets/kraken-logo.svg';
import './Navbar.css';

const AppNavbar = () => {
  return (
    <>
      <div className="top-bar"></div>
      <Navbar bg="white" expand="lg" className="app-navbar">
        <Container fluid>
          <Navbar.Brand as={NavLink} to="/">
            <KrakenLogo className="kraken-logo" />
            <span className="kraken-text">Kraken</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-between">
            <Nav className="mx-auto">
              <Nav.Link as={NavLink} to="/marketplace">Marketplace</Nav.Link>
              <Nav.Link as={NavLink} to="/" end>My websites</Nav.Link>
              <Nav.Link as={NavLink} to="/form">Conditional Form</Nav.Link>
              <Nav.Link as={NavLink} to="/my-orders">My Orders</Nav.Link>
              <Nav.Link as={NavLink} to="/my-projects">My projects</Nav.Link>
              <Nav.Link as={NavLink} to="/received-orders">Received orders</Nav.Link>
            </Nav>
            <Nav className="align-items-center">
              <Nav.Link href="#wallet"><Wallet2 size={20} /></Nav.Link>
              <Nav.Link href="#bag"><Bag size={20} /></Nav.Link>
              <Nav.Link href="#profile"><Person size={24} /></Nav.Link>
              <Nav.Link href="#settings"><Hexagon size={20} /></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default AppNavbar; 