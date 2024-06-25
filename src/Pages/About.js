import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './About.css';

const About = () => {
  return (
    <Container fluid className="about-us-container">
      <Row className="justify-content-center align-items-center">
        <Col md={6} className="text-center">
          <Image
            src="https://wallpapers.com/images/hd/coffee-cup-in-the-dark-nzrkw94yxhqdq6xt.jpg"
            alt="Coffee cup in the dark"
            fluid
            className="about-us-image"
          />
        </Col>
        <Col md={4}>
          <h1 className="about-us-title">About BeanBliss</h1>
          <div id="Para">
          <p>
            BeanBliss is dedicated to sourcing and roasting the finest coffee beans from around the world. Our journey began with a passion for coffee and a commitment to quality.
          </p>
          <p>
            Founded in [year], BeanBliss has grown into a trusted brand known for its premium coffee beans and commitment to sustainability. We work closely with farmers to ensure fair practices and support local communities.
          </p>
          <p>
            At BeanBliss, we believe that every cup of coffee should be an exceptional experience. From the beans we source to the roasting process, quality and sustainability are at the heart of everything we do.
          </p>
          <p>
            We strive to bring you the freshest and most flavorful coffee beans, ensuring that each cup of BeanBliss coffee delivers an exceptional taste that coffee enthusiasts love.
          </p>
          <p>
            Join us on our journey to discover the world of coffee, where passion meets perfection.
          </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
