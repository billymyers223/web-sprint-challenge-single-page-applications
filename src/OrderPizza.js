import React from "react";
import styled from 'styled-components'
import { Route, Link, Switch } from 'react-router-dom';

const StyledApp = styled.div`
display:flex;
align-items:center;
flex-direction: column;
width:100%;

nav a{
  text-decoration:none;
  color: white;
  background-color:black;
  border-radius:15px;
  width:8%;
  height:4vh;
  text-align:center;
  font-size:1.5rem;
  border:2px solid black;
  margin:10px;
}
a:hover{
  color:black;

  background-color:white;
}
nav{
  display:flex;
  justify-content:center;
  align-items:center;
  width:100%;
}
.container {
  display:flex;
  justify-content:center;

  width:100%;
}


`
const OrderPizza = () => {
    return (
      <>
        <StyledApp>
            <h1>Place your order below!</h1>
            <nav><Link to="/">Home </Link></nav>
        </StyledApp>
      </>
    );
  };
  export default OrderPizza;