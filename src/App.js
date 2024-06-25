import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MyNavbar from './Components/Navbar';  // Assuming this is your custom Navbar component
import Home from './Pages/Home';
import About from './Pages/About';
import Services from './Pages/Services';
import Contact from './Pages/Contact';
import ProductPage from './Pages/Product'; // Assuming this is where your ProductPage component is located
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import ReviewPage from './Pages/ReviewPage';
import 'bootstrap/dist/css/bootstrap.min.css';

// Example products data
const products = [
  {
    id: 1,
    title: "Ethiopian Yirgacheffe",
    description: "Floral and fruity with a hint of jasmine.",
    price: "$18.99",
    image: "https://isteam.wsimg.com/ip/bcd01828-8fc3-11e4-80dc-14feb5d9f2e6/ols/71_original/:/rs=w:600,h:600"
  },
  {
    id: 2,
    title: "Colombian Supremo",
    description: "Smooth and balanced with a nutty finish.",
    price: "$15.99",
    image: "https://i5.walmartimages.com/asr/3d0d11b6-be3c-4898-abc8-31d4f563ce35.9343e9bf3aa30752860c04465d70c258.jpeg?odnWidth=1000&odnHeight=1000&odnBg=ffffff"
  },
  {
    id: 3,
    title: "Sumatra Mandheling",
    description: "Rich and earthy with a deep, full body.",
    price: "$19.99",
    image: "https://th.bing.com/th/id/OIP.DzvOl0MlAFPY3jowsxY2EQHaKq?rs=1&pid=ImgDetMain"
  },
  {
    id: 4,
    title: "Guatemala Antigua",
    description: "Complex and vibrant with a chocolatey sweetness.",
    price: "$22.99",
    image: "https://m.media-amazon.com/images/I/71IIhG5wwhS._AC_SL1500_.jpg"
  },
  {
    id: 5,
    title: "Kenya AA",
    description: "Bright acidity with fruity undertones and a wine-like finish.",
    price: "$20.49",
    image: "https://cdnprod.mafretailproxy.com/sys-master-root/h5e/h53/17328567123998/24148_main.jpg_480Wx480H"
  },
  {
    id: 6,
    title: "Brazil Santos",
    description: "Smooth and mild with a nutty flavor and low acidity.",
    price: "$16.99",
    image: "https://th.bing.com/th/id/OIP.a_8RsEQagmglbYuvY0IVigHaHa?rs=1&pid=ImgDetMain"
  },
  {
    id: 7,
    title: "Costa Rica Tarrazu",
    description: "Clean and bright with a citrusy aroma and chocolate notes.",
    price: "$21.99",
    image: "https://th.bing.com/th/id/OIP.SxVmvvfkomtDiSW7n1IOKAHaHa?rs=1&pid=ImgDetMain"
  },
  {
    id: 8,
    title: "Hawaiian Kona",
    description: "Mellow with a hint of sweetness and a buttery texture.",
    price: "$29.99",
    image: "https://i5.walmartimages.com/asr/ba83e865-4024-4358-abdb-7490bf606703_1.d801f8e57752dc3d271a34d4509cf295.jpeg"
  },
  {
    id: 9,
    title: "Jamaican Blue Mountain",
    description: "Exceptionally smooth with a floral aroma and bright acidity.",
    price: "$39.99",
    image: "https://images-na.ssl-images-amazon.com/images/I/81iZy7Z5YEL._AC_SL1500_.jpg"
  }
  
  // Add more products as needed
];

function App() {
  return (
    <Router>
      <div>
        <MyNavbar /> {/* Renders your custom Navbar component */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/review" element={<ReviewPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products" element={<ProductPage products={products} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
