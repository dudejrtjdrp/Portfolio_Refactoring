import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { login, logout, loginValid } from '../Redux/Slices/isLoginSlice'

function Home() {
  
  const dispatch = useDispatch();
  const nowLoginValid = useSelector(loginValid);
  console.log(nowLoginValid)
  return (
    <div>Home</div>
  );
}

export default Home;
