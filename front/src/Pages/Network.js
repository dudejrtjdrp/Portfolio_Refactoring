import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector, useDispatch } from 'react-redux';
import { login, logout, loginValid } from '../Redux/Slices/isLoginSlice'

const getUserInfo = async (type) => {
  console.log(type)
  const response =  await axios.get("http://localhost:5000/check");
  console.log(response.data)
  return response.data;
};

function Network() {
  const dispatch = useDispatch();
  const nowLoginValid = useSelector(loginValid);
  const [users, setUsers] = useState([]);
  
  useEffect(() => {
    getUserInfo('type2').then(data => setUsers(data))
  }, [setUsers])
  
  return (
    <div>
      {users.map(({name}) => <div>{name}</div>)}
    </div>
  );
}
export default Network;
