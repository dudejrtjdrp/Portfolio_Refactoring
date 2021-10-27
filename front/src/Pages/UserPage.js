import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { login, logout, loginValid } from '../Redux/Slices/isLoginSlice'
import NavBar from "../NavBar";

function UserPage( props ) {
  const dispatch = useDispatch();
  const nowLoginValid = useSelector(loginValid);
  const id = props.location.state.id['id'];
  console.log(nowLoginValid)
  console.log(id)
  return (
    <div>
    <NavBar />
    {id}번째 UserPage 
    </div>
  );
}

export default UserPage;
