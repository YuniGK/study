import React, { useState } from 'react'
import {Button, Navbar, Container, Nav, Form} from 'react-bootstrap';
import {Outlet, useNavigate } from 'react-router-dom';

import './AppLayout.style.css';

import logo from '../img/logo/logo.png';

const AppLayout = () => {
  const [keyword, setKeyword] = useState('');
  const navigate = useNavigate();

  const searchByKeyword = (e) => {
    e.preventDefault();
    
    //url변경 
    navigate(`/movies?q=${keyword}`);
    setKeyword('');
  };

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
            <Form className="d-flex" onSubmit={searchByKeyword}>
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                value={keyword}
                onChange={(event) => setKeyword(event.target.value)}
              />
              <Button variant="outline-danger">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* 네비게이션이 끝나면 화면이 나올 수 있도록 설정 - Route 안의 자손들을 나오게 해준다. */}
      <Outlet />
    </div>
  );
}

export default AppLayout