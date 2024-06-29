// src/components/Login.jsx
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { login } from '../redux/actions/authActions';

const Login = () => {
  const [userData, setUserData] = useState({
    email: '',
    password: '',
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (event) => {
    setUserData({ ...userData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userData.email && userData.password) {
      dispatch(login({ ...userData, name: 'Vishal' }));
      toast.success('Login successful.');
      setUserData({
        email: '',
        password: '',
      });
      navigate('/home');
    } else {
      toast.error('All fields are mandatory.');
    }
  };

  return (
    <div id='login'>
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        <label>Email:</label>
        <br />
        <input
          type="email"
          onChange={handleChange}
          name="email"
          value={userData.email}
        placeholder='enter email'/>
        <br />
        <label>Password:</label>
        <br />
        <input
          type="password"
          onChange={handleChange}
          name="password"
          placeholder='enter password' value={userData.password}
        />
        <br />
        <input id='btn' type="submit" value="Login" />
        <br />
      </form>
    </div>
  );
};

export default Login;
