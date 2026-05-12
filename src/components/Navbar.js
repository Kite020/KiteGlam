import React, { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { FaUser, FaHeart, FaShoppingCart } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import logo from '../img/KiteGlamLogo2.png';
import { auth } from './Firebase';

import { ADMIN_EMAIL }
  from '../config/admin';

import { useNavigate } from 'react-router-dom';
import useProducts from './useProducts';
import './Navbar.css'; // Assuming you have a CSS file for custom styles

const NavbarComponent = ({ logoWidth = 80 }) => {
  const [expanded, setExpanded] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const navigate = useNavigate();
  const firebaseProducts =
  useProducts();
  const filteredProducts =
  firebaseProducts.filter(product =>
    product.name
      .toLowerCase()
      .includes(
        searchTerm.toLowerCase()
      )
  );

  const isAdmin =
  auth.currentUser?.email ===
  ADMIN_EMAIL;

  return (
    <Navbar
      expand="lg"
      expanded={expanded}
      className="bg-white shadow-sm py-2"
    >
      <Container fluid className="px-4">
        {/* Left: Logo */}
        <Navbar.Brand as={NavLink} to="/" className="me-3">
          <img
            src={logo}
            alt="KiteGlam Logo"
            width={logoWidth}
            className="d-inline-block align-top img-fluid"
            style={{ maxHeight: '40px', width: 'auto' }}
          />
        </Navbar.Brand>

        {/* Toggle Button for Small Screens */}
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => setExpanded(expanded ? false : "expanded")}
        />
        <Navbar.Collapse id="responsive-navbar-nav" className="align-items-center">
          {/* Center: Navigation Links */}
          <Nav className="mx-auto fw-semibold gap-lg-2 gap-2 text-center">
            <Nav.Link as={NavLink} to="/" end className="nav-link-custom" onClick={() => setExpanded(false)}>Home</Nav.Link>
            <Nav.Link as={NavLink} to="/beauty" className="nav-link-custom" onClick={() => setExpanded(false)}>Beauty</Nav.Link>
            <Nav.Link as={NavLink} to="/jewel" className="nav-link-custom" onClick={() => setExpanded(false)}>Jewel</Nav.Link>
            <Nav.Link as={NavLink} to="/women" className="nav-link-custom" onClick={() => setExpanded(false)}>Fashion</Nav.Link>
            <Nav.Link as={NavLink} to="/footwear" className="nav-link-custom" onClick={() => setExpanded(false)}>Footwears</Nav.Link>
            <Nav.Link as={NavLink} to="/watch" className="nav-link-custom" onClick={() => setExpanded(false)}>Watches</Nav.Link>
            <Nav.Link as={NavLink} to="/bag" className="nav-link-custom" onClick={() => setExpanded(false)}>Bags</Nav.Link>
            <Nav.Link as={NavLink} to="/accessories" className="nav-link-custom" onClick={() => setExpanded(false)}>Accessories</Nav.Link>

          </Nav>

          <div className="search-bar-container">

            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) =>
                setSearchTerm(e.target.value)
              }
              className="search-input"
            />

            {searchTerm && (

              <div className="search-results">

                {filteredProducts
                  .slice(0, 5)
                  .map(product => (

                    <div
                      key={product.id}
                      className="search-item"
                      onClick={() => {

                        navigate(
                          `/product/${product.id}`,
                          {
                            state: { product }
                          }
                        );

                        setSearchTerm('');
                      }}
                    >

                      {product.name}

                    </div>
                ))}
              </div>
            )}
          </div>
          {/* Right: Icons */}
          <Nav className="gap-3 text-center mt-3 mt-lg-0">
            <Nav.Link as={NavLink} to="/profile" className="nav-link-custom" onClick={() => setExpanded(false)}><FaUser /></Nav.Link>
            <Nav.Link as={NavLink} to="/wishlist" className="nav-link-custom" onClick={() => setExpanded(false)}><FaHeart /></Nav.Link>
            <Nav.Link as={NavLink} to="/cart" className="nav-link-custom" onClick={() => setExpanded(false)}><FaShoppingCart /></Nav.Link>
            {isAdmin && (

            <Nav.Link
              as={NavLink}
              to="/admin"
              className="nav-link-custom"
              onClick={() => setExpanded(false)}
            >
              Admin
            </Nav.Link>

            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
