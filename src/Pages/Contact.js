import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './Contact.css';

const Contact = () => {
  return (
    <Container className="contact-container d-flex justify-content-center align-items-center vh-100">
      <Row className="justify-content-md-center w-100">
        <Col md={10} lg={8}>
          <Card className="contact-card mb-4">
            <Card.Body>
              <Card.Title className="text-center mb-4">Contact Us</Card.Title>
              <Card.Text className="contact-info">
                <strong>Address:</strong><br />
                BeanBliss Coffee Roasters<br />
                123 Coffee Lane<br />
                Brewtown, BT 45678<br />
              </Card.Text>
              <Card.Text className="contact-info">
                <strong>Email:</strong><br />
                coffeebean@beanbliss.com
              </Card.Text>
              <Card.Text className="contact-info">
                <strong>Phone:</strong><br />
                +91 8754611677
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="contact-card">
            <Card.Body>
              <Card.Title className="text-center mb-4">Our Commitment</Card.Title>
              <Card.Text>
                At BeanBliss, we are dedicated to providing the highest quality coffee beans sourced from sustainable farms around the world. Our mission is to bring the best coffee experience to our customers while supporting ethical farming practices.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
