import { useCart } from '../../../Pages/Layout/provider'
import './HoverCart.css'
import HoverCartItem from './HoverCartItem/HoverCartItem'


function HoverCart() {


  const { cartData, addItemToCart, cartCount, incrementCartCount } = useCart()
  const totalPrice = cartData.length > 0 ? cartData.reduce((total, item) => {
    return total + (item.quantity * item.price);
  }, 0) : 0;



  return (
    <div className='hover-cart-container'>
      <div className='hover-cart-items-container'>
        {cartData.map((item, index) => (
          <HoverCartItem
            key={index}
            name={item.name}
            category={item.category}
            price={item.price}
          />
        ))}
      </div>
      <div className='total-price-container'>
        <text>Total price: ${totalPrice.toFixed(2)}</text>
      </div>
    </div>
  )
}

export default HoverCart