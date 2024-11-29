import { Col, Container, Row } from 'react-bootstrap';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import ContactForm from './component/ContactForm';
import ContactList from './component/ContactList';

function App() {
  return (
    <div className='App'>
      <h1 className='title'>연락처</h1>
      <Container>
        <Row>
          <Col><ContactForm /></Col>
          <Col><ContactList /></Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
