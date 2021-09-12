import React from 'react'
import styled from 'styled-components'

const StyledForm = styled.div`
width:100%;
display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
form{
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    width:80%;
    border:5px solid black;
    background: lightpink;
    border-radius:5px;
}
label{
    font-size:1.2rem;
    margin:10px;
    

    ++
}
button: disabled{
    opacity:50%;
    margin:10px;
    background-color:black;
    color: white;
    width:100%;
    height:auto;
    font-size:1.5rem;
    border-radius:10px;
}
button: enabled{
    margin:10px;
    background-color:black;
    color: white;
    width:100%;
    height:auto;
    font-size:1.5rem;
    border-radius:10px;
}

`
export default function Form(props){
    const {
        values,
        submit,
        change,
        disabled,
        errors,
      } = props

      const onSubmit = evt => {
        evt.preventDefault()
        submit()
      }

      const onChange = evt => {

        const { name, value, checked, type } = evt.target
        const valueToUse = type === 'checkbox' ? checked : value;
        change(name, valueToUse);
      }

    return(
        <StyledForm>
            <form id = 'pizza-form' onSubmit={onSubmit}>
                <div className ='form-group'>
                    <h3>Customize your pizza!</h3>
                    <div className='errors'>
                        <div>{errors.name}</div>
                        <div>{errors.size}</div>
                        <div>{errors.sauce}</div>
                        {/* <div>{errors.toppings}</div> */}
                    </div>
                </div>
                <div className='form-group inputs'>
                    <label>Name:&nbsp;
                        <input id = "name-input"
                            value ={values.name}
                            onChange ={onChange}
                            name ='name'
                            type = 'text'
                        />
                    </label>
                    <label>Size:&nbsp;
                        <select id ='size-dropdown'
                            onChange={onChange}
                            value = {values.size}
                            name = 'size'
                        >
                            <option value =''>Pick a size</option>
                            <option value ='Large'>Large</option>
                            <option value = 'Medium'>Medium</option>
                            <option value = 'Small'>Small</option>
                        </select>
                    </label>
                
                </div>
                <div id ='pz-toppings'>
                    <h2>Toppings:</h2>
                    <label>Pepperoni
                        <input 
                            type ='checkbox'
                            name ='pepperoni'
                            checked = {values.pepperoni}
                            onChange ={onChange}
                        />
                    </label>
                    <label>Sausage
                        <input 
                            type ='checkbox'
                            name ='sausage'
                            checked = {values.sausage}
                            onChange ={onChange}
                        />
                    </label>
                    <label>Mushrooms
                        <input 
                            type ='checkbox'
                            name ='mushrooms'
                            checked = {values.mushrooms}
                            onChange ={onChange}
                        />
                    </label>
                    <label>Bacon
                        <input 
                            type ='checkbox'
                            name ='bacon'
                            checked = {values.bacon}
                            onChange ={onChange}
                        />
                    </label>
                </div>
                <div className='form-group inputs'>
                    <label>Special Instructions:&nbsp;
                        <input id = 'special-text'
                            value={values.special}
                            onChange={onChange}
                            name='special'
                            type='text'
                        />
                    </label>
                </div>

                <div >

                    <button  id = 'order-button'disabled={disabled}>Submit order</button>
                </div>
            </form>
        </StyledForm>
    )
}