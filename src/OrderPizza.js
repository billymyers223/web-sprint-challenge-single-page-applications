import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import Form from './Form';
import schema from './validation/formSchema';
import * as yup from 'yup';
import axios from 'axios';
import { Link} from 'react-router-dom';



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
  transition:0.5s;
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

.success-message{
  margin-top:40px;
  display:flex;
  justify-content:center;
  align-items:center;
  font-size:2rem;
  flex-direction:column;
  width:90%;
  border:5px solid black;
  background: lightpink;
}
.success-message h4{
  margin-top:-10px;
}
`
const initialFormValues = {
    ///// TEXT INPUTS /////
    name: '',
    special: '',
    ///// DROPDOWN /////
    size: '',
    ///// RADIO BUTTONS /////

    ///// CHECKBOXES /////
    pepperoni: false,
    sausage: false,
    mushrooms: false,
    bacon:false
  }

  const initialFormErrors = {
    name: '',
    size: '',

  }
  const initialDisabled = true
  const initialOrder =[]

const OrderPizza = () => {
  const [orderSave, setOrderSave] = useState ('')
    const [order, setOrder] = useState(initialOrder) 
  const [formValues, setFormValues] = useState(initialFormValues) // object
  const [formErrors, setFormErrors] = useState(initialFormErrors) // object
  const [disabled, setDisabled] = useState(initialDisabled)    
  const [success, setSuccess] = useState(false)


  const getOrders = () =>{
      axios.get('https://reqres.in/api/orders')
        .then(res => {
            console.log(res);
        }).catch(err => console.error(err))
  }
  const postNewOrder = newOrder => {
    axios.post('https://reqres.in/api/orders', newOrder)
        .then(res => {
            console.log(res.data)
        }).catch(err => console.error(err))
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
      pepperoni: formValues.pepperoni,
      sausage: formValues.sausage,
      mushrooms: formValues.mushrooms,
      bacon: formValues.bacon


      // 🔥 STEP 7- WHAT ABOUT HOBBIES?
    }
    setOrderSave(formValues.name)
    setSuccess(true)
    postNewOrder(newOrder);

    // 🔥 STEP 8- POST NEW FRIEND USING HELPER
 

  }

  useEffect(() => {
    console.log(formValues)
    schema.isValid(formValues).then(valid => setDisabled(!valid))
  }, [formValues])

    return (
      <>
        <StyledApp>
            <h1>Place your order below!</h1>
            <nav><Link to="/">Home </Link></nav>
            <Form values ={formValues} change ={inputChange} submit ={formSubmit} disabled ={disabled} errors ={formErrors} />
            {success && (
        <div className="success-message">
          <h3>
            {orderSave}, your order has gone through! Woo-hoo! <span role="img">🎉</span>
          </h3>
          <h4>Your pizza will be delivered to you soon!</h4>

        </div>
      )}
        </StyledApp>
      </>
    );
  };
  export default OrderPizza;