import { useNavigate } from 'react-router-dom'
import './Checkout.css'
import { useState } from 'react'

function Checkout() {
  const navigate = useNavigate()

  const [paymentMethod, setPaymentMethod] = useState('')

  const handlePaymentMethodChange = (event) => {
    const paymentMethod = event.target.value
    setPaymentMethod(paymentMethod)
    console.log(paymentMethod)
  }

  const checkoutHandler = () => {
    navigate('/success')
  }


  return (
    <div className='form-container'>
      <h1> CHECKOUT DETAILS </h1>
      <form className='checkout-form' onSubmit={checkoutHandler}>
        <div>
          <div className='firstname_lastname_container'>
            <div className='input-container'>
              <label> First Name </label>
              <input
                placeholder='First Name'
                type='text'
                required
              /> 
            </div>

            <div className='input-container'>
              <label> Last Name </label>
              <input
                placeholder='Last Name'
                type='text'
                required
              />
            </div>
          </div>

          <div className='input-container'>
            <label> Email </label>
            <input
              placeholder='Email'
              type='email'
              required
            />
          </div>

          <div className='input-container'>
            <label> City </label>
            <input
              placeholder='City'
              type='text'
              required
            />
          </div>

          <div className='input-container'>
            <label> Address </label>
            <input
              placeholder='Address'
              type='text'
              required
            />
          </div>

          <div className='input-container'>
            <label> Post Code </label>
            <input
              placeholder='Post Code'
              type='number'
              required
            />
          </div>

          <div className='input-container'>
            <label> Phone Number </label>
            <input
              placeholder='Phone Number'
              type='tel'
              required
            />
          </div>
        
          <div className='input-container'>
            <label> Payment Method: </label>

            <div>
              <input
                type="radio"
                id='cash'
                name='payment-method'
                value='cash'
                onChange={handlePaymentMethodChange}
              />
              <label htmlFor="creditCard"> Cash </label>
            </div>

            <div>
              <input
                type="radio"
                id='creditCard'
                name='payment-method'
                value='creditCard'
                onChange={handlePaymentMethodChange}
              />
              <label htmlFor="creditCard"> Credit Card </label>
            </div>
          </div>

        {paymentMethod === 'creditCard' && (
          <div>
            <div className='input-container'>
              <label htmlFor="creditCardNumber">Credit Card Number:</label>
              <input
                type="text"
                id="creditCardNumber"
                placeholder='Credit Card Number'
                required
              />
            </div>

            <div className='input-container'>
              <label htmlFor="expirationDate">Expiration Date:</label>
              <input
                type="date"
                id="expirationDate"
                required
              />
            </div>

            <div className='input-container'>
              <label htmlFor="cvv">CVV:</label>
              <input
                type="text"
                id="cvv"
                required
              />
            </div>
          </div>
        )} 
        </div>

        
      </form>
      <div className='btn-container'>
          <h2>Total: $123</h2> 
          <button className='order-btn' type='submit'> ORDER NOW </button>
        </div>
    </div>
  )
}

export default Checkout