import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './Home.css'; // Import custom CSS for Home component

const Home = () => {
  return (
    <div className="home">
      <Carousel>
        <Carousel.Item interval={3000}>
          <img
            className="d-block w-100"
            src="https://static.vecteezy.com/system/resources/thumbnails/030/163/508/small_2x/the-best-coffee-shops-in-the-world-ai-generated-photo.jpg"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img
            className="d-block w-100"
            src="https://img.freepik.com/premium-photo/cup-coffee-with-latte-art-rim_865967-7816.jpg"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img
            className="d-block w-100"
            src="https://i.pinimg.com/originals/7b/ec/54/7bec5464cd69a18cd584b7ff8ffd3147.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Home;
