// src/Login.js

import React, { useState } from 'react';
import { Card, CardContent, TextField, Button, Link, Typography } from '@mui/material';
import axios from 'axios';
import './Login.css'; // Import custom CSS for styling
import {useNavigate} from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const Navigate=useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/login', {
        email,
        password
      });
      if(response.status==200){
        Navigate('/');
      }
      console.log(response.data);
      alert(response.data.message);
    } catch (error) {
      console.error(error);
      alert('Login failed');
    }
  };

  return (
    <div className="login-container">
      <Card className="login-card">
        <CardContent>
          <Typography variant="h5" component="h2" gutterBottom>
            Login
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              label="Email"
              variant="outlined"
              margin="normal"
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              label="Password"
              type="password"
              variant="outlined"
              margin="normal"
              fullWidth
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              style={{ marginTop: '16px' }}
            >
              Submit
            </Button>
            <Link href="#" variant="body2" style={{ display: 'block', marginTop: '16px' }}>
              Forgot Password?
            </Link>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;
