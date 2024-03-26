import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Pages/Layout/index";
import "./App.css";
import Home from "./Pages/Home/Home";
import Cart from "./Pages/Cart/Cart";

import NewCheckout from "./Pages/NewCheckout/NewCheckout";
import SuccessfulOrder from "./Pages/SuccessfulOrder/SuccessfulOrder";
import SingleItem from "./Pages/SingleItem/SingleItem";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />}></Route>
            <Route path="/cart" element={<Cart />}></Route>
            <Route path="/checkout" element={<NewCheckout />}></Route>
            <Route path="/success" element={<SuccessfulOrder/>}/>
            
            <Route path="/single-item" element={<SingleItem />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
