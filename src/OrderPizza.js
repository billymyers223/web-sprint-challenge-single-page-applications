import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import { Route, Link, Switch } from 'react-router-dom';
import Form from './Form';
import schema from './validation/formSchema';
import * as yup from 'yup';

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
const initialFormValues = {
    ///// TEXT INPUTS /////
    name: '',
    special: '',
    ///// DROPDOWN /////
    size: '',
    ///// RADIO BUTTONS /////
    sauce: '',
    ///// CHECKBOXES /////
    pepperoni: false,
    sausage: false,
    mushrooms: false,
    bacon:false
  }

  const initialFormErrors = {
    name: '',
    size: '',
    sauce: '',

  }
  const initialDisabled = true
  const initialOrder =[]

const OrderPizza = () => {
    const [order, setOrder] = useState(initialOrder) 
  const [formValues, setFormValues] = useState(initialFormValues) // object
  const [formErrors, setFormErrors] = useState(initialFormErrors) // object
  const [disabled, setDisabled] = useState(initialDisabled)    

  const postNewOrder = newOrder => {

    setFormValues(initialFormValues);
  }
  const validate = (name, value) => {
    yup.reach(schema, name)

      .validate(value)
      .then(() => setFormErrors({ ...formErrors, [name]: '' }))
      .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0]}))
      console.log(name)
  }


  const inputChange = (name, value) => {


    validate(name, value)
    setFormValues({
      ...formValues,
      [name]: value // NOT AN ARRAY
    })
  }


  const formSubmit = () => {

    const newOrder = {
      name: formValues.name,
      size: formValues.size,
      special: formValues.special,
      toppings: ['pepperoni', 'sausage', 'mushrooms','bacon'].filter(topping => !!formValues[topping])
      // 🔥 STEP 7- WHAT ABOUT HOBBIES?
    }
    console.log(newOrder);
    // 🔥 STEP 8- POST NEW FRIEND USING HELPER
    postNewOrder(newOrder);
  }

  useEffect(() => {

    schema.isValid(formValues).then(valid => setDisabled(!valid))
  }, [formValues])

    return (
      <>
        <StyledApp>
            <h1>Place your order below!</h1>
            <nav><Link to="/">Home </Link></nav>
            <Form values ={formValues} change ={inputChange} submit ={formSubmit} disabled ={disabled} errors ={formErrors} />
        </StyledApp>
      </>
    );
  };
  export default OrderPizza;