import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { login, logout, loginValid } from '../Redux/Slices/isLoginSlice'
import NavBar from "../NavBar";

function MyPage() {
  const dispatch = useDispatch();
  const nowLoginValid = useSelector(loginValid);
  console.log(nowLoginValid)
  return (
    <div>
    <NavBar />
    MyPage
    </div>
  );
}

export default MyPage;
