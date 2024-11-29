import React from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router';

const Login = ({setAuthenticate}) => {
  let navigate = useNavigate();
  const loginUser = (e) => {
    e.preventDefault();

    setAuthenticate(true);

    if(setAuthenticate)
      navigate('/');
  };

  return (
    <Container>
        <Row className="justify-content-md-center">
            <Col lg="4">
              {/* 
              form / tyep = submit일 경우 onClick가 되지 않는다. 
              이럴때에는 onSubmit를 사용한다. 
              */}
              <Form onSubmit={(e)=>loginUser(e)}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            </Col>
        </Row>
    </Container>
  )
}

export default Login