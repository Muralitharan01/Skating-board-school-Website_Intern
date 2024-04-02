import React, { useState } from 'react';
import {Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';
import '../styles/Login.css';

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleSignUp = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/student/register', { name, email, password });

      if (response.data.message === 'Registration successful') {
        // Show SweetAlert notification
        Swal.fire({
          title: 'Success!',
          text: 'Registration successful. You can now log in.',
          icon: 'success',
          confirmButtonText: 'OK',
        });

        // Redirect to the login page upon successful registration
        navigate('/login');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container mt-5">
      <h2>Sign Up</h2>
      <form>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Full Name</label>
          <input type="text" className="form-control" 
          id="name" onChange={(e) => setName(e.target.value)}/>
        </div>
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
          className="btn btn-primary"
          onClick={handleSignUp}> Sign Up</button>
      </form>
      <div>
      <Link to={"/login"} className='link'>Excting Account?<b> Login </b></Link>
      </div>
    </div>
  );
}

export default SignUp;
