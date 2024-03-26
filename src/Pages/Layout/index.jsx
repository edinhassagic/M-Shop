import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import { CartProvider } from "./provider";
import "./index.css"
import "../../Components/MainSection/mainSection.css"
import { Outlet } from "react-router-dom";


const Layout = () => {



    return (
        <div className="layout">

            <CartProvider>
                <Header ></Header>
                <div className="mainSection">
                    <Outlet></Outlet>
                </div>

                <Footer></Footer>

            </CartProvider>

        </div>
    )

}


export default Layout;