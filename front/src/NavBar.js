import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { loginValid, logout } from './Redux/Slices/isLoginSlice'
import './Css/NavBar.scss'

function UserNav(props) {
  const dispatch = useDispatch();
  function handleLogOut(e) {
    dispatch(logout())
  }
  return (
    <div className="linkWrapper">
      <Link className='link' to='/Network'>Network</Link>
      <Link className='link' to='/MyPage'>MyPage</Link>
      <Link className='link' to='/' onClick={handleLogOut}>Logout</Link>
    </div>
  );
}

function GuestNav(props) {

  return (
    <div className="linkWrapper">
      <Link className='link' key='/Network' to='/Network'>Network</Link>
      <Link className='link' key='/Login' to='/Login'>Login</Link>
      <Link className='link' key='/Register' to='/Register'>Register</Link>
    </div>
  );
}

export default function NNavBar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const nowLoginValid = useSelector(loginValid);

  return (
    <nav className='header'>
      <Link className='logo' key='/' to='/Network'>Home</Link>
      {nowLoginValid === true ? <UserNav /> : <GuestNav />}
    </nav>
  );
}
