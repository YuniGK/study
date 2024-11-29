import React, { useState } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import { useDispatch } from 'react-redux';

const SearchBox = () => {
  const [name, setName] = useState('');
  const dispatch = useDispatch();
  
  const searchByName = (e) => {
    e.preventDefault();
    dispatch({type: "SEARCH_CONTACT", payload : {name}});
}
  return (
    <div className='search-box'>
        <Form onSubmit={searchByName}>
          <Row>
              <Col lg={10}><Form.Control type="text" placeholder="Enter Name" onChange={(event) => setName(event.target.value)}/></Col>
              <Col lg={2}><Button variant="primary" type='submit'>search</Button></Col>
          </Row>    
        </Form>
    </div>
  )
}

export default SearchBox