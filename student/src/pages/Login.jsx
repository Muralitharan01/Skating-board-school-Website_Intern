import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';
import '../styles/Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/student/login', { email, password });

      if (response.data.message === 'Login successful') {
        // Save user data to sessionStorage
        sessionStorage.setItem('user', JSON.stringify(response.data.user));

        // Show SweetAlert success message
        Swal.fire({
          title: 'Login Successful!',
          text: 'Welcome back!',
          icon: 'success',
          confirmButtonText: 'OK',
        });

        // Redirect to the homepage on successful login
        navigate('/');
        window.location.reload();
      } else {
        // Show SweetAlert error message for invalid credentials
        Swal.fire({
          title: 'Error!',
          text: 'Invalid credentials. Please try again.',
          icon: 'error',
          confirmButtonText: 'OK',
        });
      }
    } catch (error) {
      console.error(error);
      Swal.fire({
        title: 'Error!',
        text: 'Invalid credential. Please try again.',
        icon: 'error',
        confirmButtonText: 'OK',
      });
    }
  }



  return (
    <div className="container mt-5">
      <h2>Login</h2>
      <form>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address</label>
          <input
            type="email"
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          type="button"
          className="btn btn-primary "
          onClick={handleLogin}
        >
          Login
        </button>
      </form>
      <div >
        <Link to={"/register"} className='link'>Don't have an account?<b> Sign Up </b></Link>
      </div>

    </div>
  );
}

export default Login;
