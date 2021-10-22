import React, {useEffect, useState} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { Container,Navbar,Nav,NavDropdown} from 'react-bootstrap';
import { login, logout, loginValid } from './Redux/Slices/isLoginSlice'

import "./Css/Navbar.scss";


const NavBars = () => {
    const [currentLogin, setCurrentLogin] = useState(false);
    const isLoggedIn = useSelector(loginValid);
    const dispatch = useDispatch();
    console.log(isLoggedIn)
    useEffect(() => {
      if (isLoggedIn === true) {
        setCurrentLogin(true)
        dispatch(login())
      }
    }, [dispatch, isLoggedIn]
    );
    if (currentLogin === true) {
      console.log(currentLogin)
    } 

    function UserNav(props) {
      return (
        <>
          <Nav.Link href="/Network" onClick={() => dispatch(login())}>Network</Nav.Link>
          <Nav.Link href="/MyPage" onClick={() => dispatch(login())}>MyPage</Nav.Link>
          <Nav.Link href="/" onClick={() => dispatch(logout())}>Logout</Nav.Link>
        </>
      );
    }

    function GuestNav(props) {
      return (
        <>
          <Nav.Link href="/Network">Network</Nav.Link>
          <Nav.Link href="/Login">Login</Nav.Link>
          <Nav.Link href="/Register">Register</Nav.Link>
        </>
      );
    }
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="/"><img  src="" width="150px" class="d-inline-block align-text-top" alt=""/>Home</Navbar.Brand>
  
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
    </Nav>
    <Nav>
      {currentLogin === true ? <UserNav /> : <GuestNav />}
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
  );
};

export default NavBars;