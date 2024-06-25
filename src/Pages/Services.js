import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Services.css';

const Services = () => {
  const services = [
    {
      title: 'Custom Roasting',
      description: 'We offer custom roasting services to bring out the best flavor in your coffee beans.',
      icon: 'https://img.icons8.com/ios-filled/100/000000/coffee.png'
    },
    {
      title: 'Coffee Subscriptions',
      description: 'Enjoy freshly roasted coffee delivered to your door every month with our subscription service.',
      icon: 'https://img.icons8.com/ios-filled/100/000000/coffee-to-go.png'
    },
    {
      title: 'Wholesale Supply',
      description: 'We provide high-quality coffee beans at wholesale prices for cafes and restaurants.',
      icon: 'https://img.icons8.com/ios-filled/100/000000/coffee-maker.png'
    },
    {
      title: 'Barista Training',
      description: 'Join our barista training sessions to learn the art of brewing the perfect cup of coffee.',
      icon: 'https://img.icons8.com/ios-filled/100/000000/coffee-to-go.png'
    },
    {
      title: 'Coffee Brewing Equipment',
      description: 'We offer a range of high-quality coffee brewing equipment for both home and professional use.',
      icon: 'https://img.icons8.com/ios-filled/100/000000/coffee-maker.png'
    },
    {
      title: 'Coffee Tasting Events',
      description: 'Participate in our coffee tasting events to experience and learn about different coffee varieties.',
      icon: 'https://img.icons8.com/ios-filled/100/000000/coffee.png'
    }
  ];

  return (
    <Container className="services-container">
      <h1 className="text-center my-5">Our Services</h1>
      <Row className="justify-content-center">
        {services.map((service, index) => (
          <Col md={6} lg={4} key={index} className="mb-4 d-flex align-items-stretch">
            <Card className="service-card h-100">
              <Card.Img variant="top" src={service.icon} className="service-icon" />
              <Card.Body>
                <Card.Title>{service.title}</Card.Title>
                <Card.Text>{service.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Services;
