import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { login, loginValid } from '../Redux/Slices/isLoginSlice'
import "../Css/Login.scss"
import { updateUserNumber, currentUserNumber } from '../Redux/Slices/isUserNumber'
import axios from 'axios';
import NavBar from "../NavBar";


function Login() {
  const history = useHistory();
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
    const formData = { userId, userPw,};
    const response =  await axios.post("http://localhost:5000/login", 
  formData);
    const userNumber = response.data[0]
    const loginResult = response.data[1]
    console.log(formData)
    if (loginResult === 'Login' ) {
      dispatch(login())
      dispatch(updateUserNumber(userNumber))
      console.log(nowLoginValid)
      console.log(userNumber)
      console.log(nownumber)
      history.push("/")
    }
  }

  return (
    <div>
      <NavBar />
      <div>
        <div className="loginWrapper">
          <div className="loginInfo">
            <div className="loginTitle">로그인하기</div>
            <div className="loginDescription">자신만의 계정으로 포트폴리오를 하나씩 채워나가보세요!</div>
          </div>
          <input className="userId" type="text" name="userId" value={userId} placeholder="아이디" onChange={handleId}></input>
          <input className="userPw" type="password" name="userPw" value={userPw} placeholder="비밀번호" onChange={handlePw}></input>
          <button className="submit" onClick={onClickLogin}></button>
        </div>
      </div>
    </div>
  );
}

export default Login;
