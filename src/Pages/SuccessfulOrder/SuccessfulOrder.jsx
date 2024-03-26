import { useNavigate } from 'react-router-dom'
import classes from './SuccessfulOrder.module.css'

function SuccessfulOrder() {
  const navigate = useNavigate()

  const handleNavigate = () => {
    navigate('/')
  }

  return (
    <div className={classes.container}>
      <div className={classes.successful_order_message_container}>

        <div className={classes.icon_container}>
          <i class="fa-regular fa-circle-check"/>
        </div> 

        <div className={classes.message_btn_container}>

          <div className={classes.message_container}>
            <h2 className={classes.message_title}> Woohoo, success! </h2>
            <p> Your order has successfully been submitted.</p>
          </div>

          <div className={classes.btn_container}>
            <button className={classes.close_btn} onClick={handleNavigate}> CLOSE </button>
          </div>

        </div>

      </div>

      
    </div>  
  )
}

export default SuccessfulOrder