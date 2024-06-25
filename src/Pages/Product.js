import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './Product.css'; // Import custom CSS for ProductPage component

const Product = ({ products }) => {
  return (
    <Container className="product-page d-flex justify-content-center align-items-center">
      <Row className="justify-content-center">
        {products.map((product) => (
          <Col key={product.id} xs={12} sm={6} md={4} lg={4} className="mb-4">
            <Card className="product-card h-60">
              <Card.Img variant="top" src={product.image} className="product-img" />
              <Card.Body>
                <Card.Title className="product-title">{product.title}</Card.Title>
                <Card.Text className="product-description">{product.description}</Card.Text>
                <Card.Text className="product-price">{product.price}</Card.Text>
                <Button id="product-button">Add to Cart</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Product;
