import React, { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { login, logout, loginValid } from '../Redux/Slices/isLoginSlice'
import "../Css/Login.scss"
import { updateUserNumber, currentUserNumber } from '../Redux/Slices/isUserNumber'
import axios from 'axios';

function Login() {
  const dispatch = useDispatch();
  const nowLoginValid = useSelector(loginValid);
  const nownumber = useSelector(currentUserNumber);
  const [userId,setUserId] = useState("");
  const [userPw,setUserPw] = useState("");
  
  const handleId = (e) => {
    setUserId(e.target.value)
  }
  const handlePw = (e) => {
    setUserPw(e.target.value)
  }
  const onClickLogin = async () => {
    console.log(nowLoginValid)
    const formData = {
      userId,
      userPw,
    };
    console.log(formData)
    const response =  await axios.post("http://localhost:5000/login", 
  formData);
    const userNumber = response.data[0]
    const loginResult = response.data[1]
    if (loginResult === 'Login' ) {
      dispatch(login())
      dispatch(updateUserNumber(userNumber))
      console.log(nowLoginValid)
      console.log(userNumber)
      console.log(nownumber)
    }
  }

  return (
    <div>
      <input className="userId" type="text" name="userId" value={userId} onChange={handleId}></input>
      <input className="userPw" type="password" name="userPw" value={userPw} onChange={handlePw}></input>
      <button className="submit" onClick={onClickLogin}></button>
    </div>
  );
}

export default Login;
