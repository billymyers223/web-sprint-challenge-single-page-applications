import React from "react";
import styled from 'styled-components'
import { Link } from 'react-router-dom';

const StyledApp = styled.div`
display:flex;
align-items:center;
flex-direction: column;
width:100%;

img{
  height:40vh;
  width:90%;
  object-fit:cover;
  border:2px solid black;
  display:flex;
}
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
.container .btn {
  position: absolute;
  top: 35%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  background-color:black;
  color: white;
  font-size: 16px;
  padding: 12px 24px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  height:10vh;
  width:30vh;
  font-size:2rem;
  border:5px white solid;
}

.container .btn:hover {
  background-color: white;
  color:black;
}
body {
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(3, 1fr);
}

// etc
.cont{
  display:flex;
  flex-direction:row;
  justify-content:center;
}
.card img{
  display:flex;
  justify-content:center;
  width:100%;
  height: 40vh;
  border:0px solid black;
}

.card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: lightpink;
  padding: 1rem;
  width:25%;
  margin:10px;
}

body {
  font-family: system-ui, sans-serif;
}



`
const Home = () => {
    return (
      <>

    <StyledApp>
    <h1>Lambda Eats</h1>
    <nav><Link to="/">Home </Link></nav>
    <div class = 'container'>
    <img alt = 'Pizza' src = 'https://images.unsplash.com/photo-1588315029754-2dd089d39a1a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80'></img>
    <Link to='/pizza'><button class = 'btn' id ='order-pizza'>Order Pizza</button></Link> 
    </div>
    <h2>Food delivery brought straight to you!</h2>
    <div class = 'cont'>
        <div class="card">
        <h2>Clam Chowder!</h2>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed est error repellat veritatis.</p>
        <img alt = 'chowder' src = 'https://images.unsplash.com/photo-1560684352-8497838a2229?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Zm9vZHxlbnwwfDJ8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'/>
        </div>
        <div class="card">
        <h2>Mcdonalds!</h2>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed est error repellat veritatis..</p>
        <img alt ='burger' src = 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80'></img>
        </div>
        <div class="card">
        <h2>Ramen!</h2>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed est error repellat veritatis.</p>
        <img alt = 'ramen' src = 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Zm9vZHxlbnwwfDJ8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'/>
        </div>
    </div>
    </StyledApp>
    </>
    )
};
export default Home;