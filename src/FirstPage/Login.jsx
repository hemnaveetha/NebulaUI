import React, { useState, useEffect, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { UserContext } from './UserContext';

const Login = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [loginDetails, setLoginDetails] = useState({
    email: '',
    password: ''
  });
  const { setUser } = useContext(UserContext);

  useEffect(() => {
    axios.get('http://localhost:8080/get') // Updated URL
      .then(response => setUsers(response.data))
      .catch(error => console.error('Error:', error));
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    const foundUser = users.find(user => user.email === loginDetails.email && user.password === loginDetails.password);

    if (foundUser) {
      setUser(foundUser);
      navigate('/home');
    } else {
      alert('Account not found. Please register.');
      navigate('/register');
    }
  };

  const handleInputChange = (e) => {
    setLoginDetails({ ...loginDetails, [e.target.name]: e.target.value });
  };

  return (
    <div style={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', overflow: 'hidden', fontFamily: 'Roboto, sans-serif' }}>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

          .video {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
            z-index: -1;
          }

          .form {
            background: rgba(0, 0, 0, 0.7);
            padding: 2rem;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
            width: 100%;
            max-width: 400px;
            height: 400px;
            text-align: center;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            font-family: 'Roboto', sans-serif;
          }

          .heading {
            margin-top: 2.5rem;
            margin-bottom: 2.5rem;
            font-size: 5rem;
            color: #fff; /* White text color */
            text-shadow: 
                0 0 5px rgba(255, 255, 255, 0.8),  /* Slightly reduced brightness */
                0 0 10px rgba(255, 255, 255, 0.7), 
                0 0 15px rgba(255, 255, 255, 0.6), 
                0 0 20px rgba(255, 255, 255, 0.5), 
                0 0 25px rgba(255, 255, 255, 0.4), 
                0 0 30px rgba(255, 255, 255, 0.3), 
                0 0 35px rgba(255, 255, 255, 0.2); /* Slightly less intense */
            font-family: 'Roboto', sans-serif;
          }

          .input {
            width: 300px !important;
            padding: 1.5rem;
            border: 2px solid #fff;
            border-radius: 8px;
            font-size: 1.4rem;
            color: #fff; /* White text color */
            background-color: rgba(255, 255, 255, 0.2);
            font-family: 'Roboto', sans-serif;
            margin-bottom: 1rem;
            box-sizing: border-box;
          }

          .input:focus {
            border-color: #ff007f;
          }

          .button {
            background-color: #ff007f;
            color: #fff;
            border: none;
            padding: 1.5rem 4.5rem;
            border-radius: 10px;
            font-size: 1.7rem;
            cursor: pointer;
            transition: background-color 0.3s ease;
            margin-top: 1rem;
            margin-bottom: 1rem;
            font-family: 'Roboto', sans-serif;
          }

          .button:hover {
            background-color: #e60073;
          }

          .register-link {
            margin-top: 1.5rem;
            padding-bottom: 2rem !important;
            color: #fff; /* White text color */
          }

          .link {
            color: #fff; /* White text color */
            text-decoration: none;
            font-weight: bold;
            font-family: 'Roboto', sans-serif;
          }

          .link:hover {
            text-decoration: underline;
          }
        `}
      </style>
      <video autoPlay muted loop className="video">
        <source src="https://v1.pinimg.com/videos/iht/720p/fe/46/aa/fe46aa926b043aecc4e50b0ad3869411.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <form onSubmit={handleLogin} className="form">
        <h1 className="heading">LOGIN</h1>
        <div className="form-group">
          <input 
            placeholder='e-mail'
            type="email" 
            name='email'
            value={loginDetails.email} 
            onChange={handleInputChange} 
            required 
            className="input"
          />
        </div>
        <div className="form-group">
          <input 
            placeholder='password'
            type="password" 
            name='password'
            value={loginDetails.password} 
            onChange={handleInputChange} 
            required 
            className="input"
          />
        </div>
        <button 
          type="submit" 
          className="button"
        >
          Login
        </button>
        <div className="register-link">
          <h3><b>New User? </b><Link to="/register" className="link">Register here</Link></h3>
        </div>
      </form>
    </div>
  );
};

export default Login;
