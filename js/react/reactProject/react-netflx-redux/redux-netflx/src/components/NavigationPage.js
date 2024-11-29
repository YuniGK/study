import React from 'react'
import './NavigationPage.style.css';
import { Button, Container, Form, Nav, Navbar } from 'react-bootstrap';
import logo from '../img/logo/logo.png';
import { Outlet } from 'react-router-dom';

const NavigationPage = () => {
  return (
    <div className='nav'>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand href="/" className='nav-img'><img src={logo} alt="logo" /></Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href="/movies">Movies</Nav.Link>
              <Nav.Link href="">Link</Nav.Link>           
            </Nav>
            <Form className="d-flex" >
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-danger">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Outlet />
    </div>
  )
}

export default NavigationPage