import React from 'react'
import './index.css'
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import { AiOutlineSearch, AiOutlineShoppingCart } from "react-icons/ai";
import { BsFillCartFill } from "react-icons/bs";

export default function Header() {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="transparent">
        <Container fluid>
          <Navbar.Brand href="#home" className='align-items-baseline'>
            <img src='./Images/NavbarLogo.png' className='logo me-2' alt='logo' />
            NEOFood
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav d-flex justify-content-center" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="navigation-links">
              <Nav.Link as={Link} to="/">PopularReceipe</Nav.Link>
              <Nav.Link as={Link} to="/GetReceipes">GetReceipes</Nav.Link>
              <Nav.Link as={Link} to="/CalorieReceipe">CalorieReceipe</Nav.Link>
              <Nav.Link as={Link} to="/MealPlanner">MealPlanner</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <div >
            <Form className="d-flex">
              <div className='d-flex align-items-center rounded-pill shadow search-bar p-1'>
                <AiOutlineSearch size={24} />
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-3 bg-transparent border-0"
                  aria-label="Search"
                />
                <Link to="/Cart"><BsFillCartFill size={22} className="text-dark" /></Link>
                <sup>
                  <Badge
                    bg="danger"
                    className="align-self-start rounded-circle"
                  >
                    3
                  </Badge>
                </sup>

              </div>

            </Form>
          </div>
        </Container >
      </Navbar>




    </>
  )
}
