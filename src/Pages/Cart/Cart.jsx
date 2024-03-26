import { useNavigate, useOutletContext } from 'react-router-dom'
import './Cart.css'
import Item from './Items/Item'
import { useEffect } from 'react'
import { useCart } from '../Layout/provider'

function Cart() {


  const { cartData, addItemToCart, cartCount, incrementCartCount } = useCart()
  const totalPrice = cartData.length > 0 ? cartData.reduce((total, item) => {
    return total + (item.quantity * item.price);
  }, 0) : 0;

  useEffect(() => {


    console.log(cartData)
  }, [])

  const navigate = useNavigate()

  const navigateToCheckout = () => {
    navigate('/checkout')
  }

  return (
    <div className='container'>
      <div className='items-container'>
        {cartData.map((item, index) => (
          <Item
            key={index}
            image={item.img}
            name={item.name}
            category={item.category}
            price={item.price}
            quantity={item.quantity}
          />
        ))}
      </div>
      <div className='price-action-container'>
        <div className='total-price-container'>
          <h2>Total: ${totalPrice.toFixed(2)}</h2>
        </div>
        <div className='checkout-btn'>
          <button onClick={navigateToCheckout}> CHECKOUT NOW </button>
        </div>
      </div>
    </div>
  )
}

export default Cart