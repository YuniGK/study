import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useDispatch } from 'react-redux';

const ContactForm = () => {
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState(0);

    //액션을 보내기위해서는 dispatch가 필요하다.
    const dispatch = useDispatch();

    const addContact = (e) => {
        e.preventDefault();

        //dispatch({type: "액션명", payload : "파라미터"});
        dispatch({type: "ADD_CONTACT", payload : {name, phoneNumber}});
    }
  return (
    <div>
        <Form onSubmit={addContact}>
            <Form.Group className="mb-3" controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Name" onChange={(event)=>setName(event.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formPhoneNumber">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control type="number" placeholder="Enter Phone Number" onChange={(event)=>setPhoneNumber(event.target.value)} />
            </Form.Group>
       
            <Button variant="primary" type="submit">
                add
            </Button>
        </Form>        
    </div>
  )
}

export default ContactForm