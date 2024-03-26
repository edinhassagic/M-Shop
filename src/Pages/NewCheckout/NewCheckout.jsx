import { useNavigate } from 'react-router-dom'
import classes from './NewCheckout.module.css'
import { useRef, useState } from 'react'

function NewCheckout() {
  const navigate = useNavigate()
  const formRef = useRef(null)

  const [paymentMethod, setPaymentMethod] = useState('')

  const handlePaymentMethodChange = (event) => {
    const paymentMethod = event.target.value
    setPaymentMethod(paymentMethod)

    if (event.target.value === 'creditCard' && formRef.current) {
      setTimeout(() => {
        formRef.current.scrollTop = formRef.current.scrollHeight;
      }, 0);
    }
  }

  const checkoutHandler = () => {
    navigate('/success')
  }

  return (
    <div className={classes.form_container}>
      <h1 className={classes.title}> CHECKOUT DETAILS </h1>

      <form className={classes.checkout_form} onSubmit={checkoutHandler}>
        <div ref={formRef} className={classes.input_details_conatiner}>

          <div className={classes.firstname_lastname_container}>

            <div className={classes.input_container}>
              <label className={classes.input_label}> First Name </label>
              <input
                className={classes.input_details}
                placeholder='First Name'
                type='text'
                required
              /> 
            </div>

            <div className={classes.input_container}>
              <label className={classes.input_label}> Last Name </label>
              <input
                className={classes.input_details}
                placeholder='Last Name'
                type='text'
                required
              />
            </div>

          </div>

          <div className={classes.input_container}>
            <label className={classes.input_label}> Email </label>
            <input
              className={classes.input_details}
              placeholder='Email'
              type='email'
              required
            />
          </div>

          <div className={classes.input_container}>
            <label className={classes.input_label}> City </label>
            <input
              className={classes.input_details}
              placeholder='City'
              type='text'
              required
            />
          </div>

          <div className={classes.input_container}>
            <label className={classes.input_label}> Address </label>
            <input
              className={classes.input_details}
              placeholder='Address'
              type='text'
              required
            />
          </div>

          <div className={classes.input_container}>
            <label className={classes.input_label}> Post Code </label>
            <input
              className={classes.input_details}
              minLength={5}
              maxLength={8}
              placeholder='Post Code'
              type='text'
              required
            />
          </div>

          <div className={classes.input_container}>
            <label className={classes.input_label}> Phone Number </label>
            <input
              className={classes.input_details}
              placeholder='Phone Number'
              type='tel'
              required
            />
          </div>

          <div className={classes.input_container}>
            <label className={classes.input_label}> Payment Method: </label>

            <div>
              <input
                type="radio"
                id='cash'
                name='payment-method'
                value='cash'
                onChange={handlePaymentMethodChange}
              />
              <label> Cash </label>
            </div>

            <div>
              <input
                type="radio"
                id='creditCard'
                name='payment-method'
                value='creditCard'
                onChange={handlePaymentMethodChange}
              />
              <label> Credit Card </label>
            </div>
          </div>

          {paymentMethod === 'creditCard' && (
          <div>
            <div className='input-container'>
              <label className={classes.input_label}>Credit Card Number:</label>
              <input
                type="text"
                id="creditCardNumber"
                placeholder='Credit Card Number'
                required
              />
            </div>

            <div className='input-container'>
              <label className={classes.input_label}>Expiration Date:</label>
              <input
                type="date"
                id="expirationDate"
                required
              />
            </div>

            <div className='input-container'>
              <label className={classes.input_label}>CVV:</label>
              <input
                placeholder='CVV'
                type="text"
                id="cvv"
                required
              />
            </div>
          </div>
        )} 

        </div>

        <div className={classes.submit_purchace_container}>
          <h2 className={classes.total_price}> Total: $123</h2>
          <button className={classes.order_now_btn}> ORDER NOW </button>
        </div> 
      </form>
    </div>
  )
}

export default NewCheckout