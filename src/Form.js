import React from 'react'

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
                <label>Size:
                    <select id ='size-dropdown'
                        onChange={onChange}
                        value = {values.size}
                        name = 'size'
                    >
                        <option value ='Large'>Large</option>
                        <option value = 'Medium'>Medium</option>
                        <option value = 'Small'>Small</option>
                    </select>
                </label>
                <label> Origninal Sauce
                    <input
                        type = 'radio'
                        name ='sauce'
                        value ='original'
                        onChange={onChange}
                        checked ={values.sauce === 'original'}
                    />

                </label>
                <label> Alfredo Sauce
                    <input
                        type = 'radio'
                        name ='sauce'
                        value ='alfredo'
                        onChange={onChange}
                        checked ={values.sauce === 'alfredo'}
                    />

                </label>
            </div>
            <div id ='pz-toppings'>
                <h4>Toppings</h4>
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
                <label>Special Instructions
                    <input
                        value={values.special}
                        onChange={onChange}
                        name='special'
                        type='text'
                    />
                </label>
            </div>

            <div class = 'submit'>
                <button disabled={disabled}>Submit order</button>
            </div>
        </form>
    )
}