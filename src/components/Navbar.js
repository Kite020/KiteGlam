import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { FaUser, FaHeart, FaShoppingCart } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import logo from '../img/KiteGlamLogo2.png';
import './Navbar.css'; // Assuming you have a CSS file for custom styles

const NavbarComponent = ({ logoWidth = 80 }) => {
  return (
    <Navbar expand="lg" className="bg-white shadow-sm py-2">
      <Container>
        {/* Left: Logo */}
        <Navbar.Brand as={NavLink} to="/" className="me-3">
          <img
            src={logo}
            alt="KiteGlam Logo"
            width={logoWidth}
            height="40"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>

        {/* Toggle Button for Small Screens */}
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-between">
          {/* Center: Navigation Links */}
          <Nav className="mx-auto fw-semibold gap-lg-4 gap-3 text-center">
            <Nav.Link as={NavLink} to="/" end className="nav-link-custom">Home</Nav.Link>
            <Nav.Link as={NavLink} to="/beauty" className="nav-link-custom">Beauty</Nav.Link>
            <Nav.Link as={NavLink} to="/jewel" className="nav-link-custom">Jewel</Nav.Link>
            <Nav.Link as={NavLink} to="/women" className="nav-link-custom">Fashion</Nav.Link>
            <Nav.Link as={NavLink} to="/footwear" className="nav-link-custom">Footwears</Nav.Link>
            <Nav.Link as={NavLink} to="/watch" className="nav-link-custom">Watches</Nav.Link>
            <Nav.Link as={NavLink} to="/bag" className="nav-link-custom">Bags</Nav.Link>
            <Nav.Link as={NavLink} to="/accessories" className="nav-link-custom">Accessories</Nav.Link>
          </Nav>

          {/* Right: Icons */}
          <Nav className="gap-3 text-center mt-3 mt-lg-0">
            <Nav.Link as={NavLink} to="/account" className="nav-link-custom"><FaUser /></Nav.Link>
            <Nav.Link as={NavLink} to="/wishlist" className="nav-link-custom"><FaHeart /></Nav.Link>
            <Nav.Link as={NavLink} to="/cart" className="nav-link-custom"><FaShoppingCart /></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
