import React, { useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { login, logout, loginValid } from '../Redux/Slices/isLoginSlice'
import NavBar from "../NavBar";
import '../Css/Network.scss'

const getUserInfo = async (type) => {
  console.log(type)
  const response =  await axios.get("http://localhost:5000/check");
  console.log(response.data)
  return response.data;
};



function Network() {
  const history = useHistory();
  const dispatch = useDispatch();
  const nowLoginValid = useSelector(loginValid);
  const [users, setUsers] = useState([]);
  const moveToUserPage = (props) => {
    console.log(props)
    if (nowLoginValid === true) {history.push({
      pathname: "/userpage",
      state: {id: props}
    })
    } else {
      history.push('/login')
    }
  }
  useEffect(() => {
    getUserInfo('type2').then(data => setUsers(data))
  }, [setUsers])
  
  return (
    <div className="networkContainer">
    <NavBar />
      <div className="networkTitle">엘리스 레이서 개인 포트폴리오</div>
      <div className="profileContainer">
        <div className="profilesWrapper">
        {users.map(({name,description,image,id}) => 
        <div className="profileWrapper">
          <div className="profileImage">
            <img src={image} alt =''/>
          </div>
          <div className="profileInfo">
            <div className="profileName">
            {name}  
            </div>
            <div className="profileDescription">
            {description} `
            </div>
          </div>
          <div className="profileButton">
          <button onClick={()=>{moveToUserPage({id});}}>{id}번 페이지로 이동</button>
          </div>
        </div>
        )}
        </div>
      </div>
    </div>
  );
}
export default Network;
