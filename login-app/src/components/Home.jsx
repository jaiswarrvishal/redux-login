// src/components/Home.jsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
// import { logout } from '../redux/actions/authActions';
import '../components/Styling.css'

const Home = () => {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    // dispatch(logout());
    navigate('/login');
  };

  return (
    <div id='styling'>
      <h1>Home Page - {user?.name}</h1>
      {/* <button onClick={handleLogout}>Logout</button> */}
    </div>
  );
};

export default Home;
