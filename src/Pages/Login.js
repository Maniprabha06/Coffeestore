// src/Login.js

import React, { useState } from 'react';
import { Card, CardContent, TextField, Button, Link, Typography } from '@mui/material';
import './Login.css'; // Import custom CSS for styling

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle login logic here
    console.log('Username:', username);
    console.log('Password:', password);
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
              label="Username"
              variant="outlined"
              margin="normal"
              fullWidth
              value={username}
              onChange={(e) => setUsername(e.target.value)}
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
