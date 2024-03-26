import './HoverCartItem.css'

function HoverCartItem(props) {
  return (
    <div className='hover-item-container'>
      <text className='product-name'>{props.name}</text>
      <text> Category: {props.category}</text>
      <text>Price: ${props.price}</text>
    </div>
  )
}

export default HoverCartItem