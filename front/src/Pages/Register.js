import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import NavBar from "../NavBar";
import { loginValid } from '../Redux/Slices/isLoginSlice'

function Register() {
  
  const dispatch = useDispatch();
  const nowLoginValid = useSelector(loginValid);
  console.log(nowLoginValid)
  return (
    <div>
    <NavBar />
    Register
    </div>
  );
}

export default Register;
