import React from 'react'
import { Col, Row } from 'react-bootstrap'

const ContactItem = ({item}) => {
  return (
    <Row className='contact-item'>
        <Col lg={2} xs={4}>
            <img width={90} src='https://cdn.pixabay.com/photo/2017/07/18/23/23/user-2517433_640.png' alt='user' />
        </Col>      
        <Col lg={10} xs={8}>
            <h3>{item.name}</h3>
            <p>{item.phoneNumber}</p>
        </Col>  
    </Row>
  )
}

export default ContactItem