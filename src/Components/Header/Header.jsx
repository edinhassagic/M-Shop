import { useEffect, useState } from "react"
import "./header.css"
import HoverCart from "./HoverCart/HoverCart"
import { useCart } from "../../Pages/Layout/provider";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Header = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { cartData, addItemToCart, cartCount, incrementCartCount, emptyTrash } = useCart()



    useEffect(() => {
      
        setIsHoverCartVisible(false);
      }, [location]); 
    
    const [isHoverCartVisible, setIsHoverCartVisible] = useState(false)

    const handleTrashClick = () => {

        emptyTrash();
        navigate("/")


    }

    return (



        <div className="header">
            <div className="logo">
                <div className="imgWrapper">
                    <Link className="store-logo" to="/"> <i class="fa-solid fa-car-on" /> </Link>

                </div>
                <Link className="store-logo-text" to="/"> <p>MoneShop</p> </Link>

            </div>

            <div className="cart">
                {location.pathname !== "/cart" && location.pathname !== "/checkout" && (
                    <div
                        onMouseEnter={() => setIsHoverCartVisible(true)}
                        onMouseLeave={() => setIsHoverCartVisible(false)}
                        className="imgWrapper"
                    >
                        <Link to={cartData.length > 0 ? "/cart" : "#"}>
                            <img src="../../grocery-store.png" alt="" />
                        </Link>
                        <div className="counter">{cartCount}</div>
                        {isHoverCartVisible && (cartData.length > 0) && <HoverCart className="hover-cart-div" />
                        }

                    </div>
                )}
                {location.pathname === "/cart" && (
                    <div
                        onClick={handleTrashClick}
                        className="imgWrapper"
                    >
                        <Link to="/cart">
                            <i className="fa-solid fa-trash-can"></i>
                        </Link>
                    </div>)

                }
            </div>




        </div>
    );
};

export default Header;
