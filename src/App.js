import { useState } from "react";

import './App.css';
import CoffeeList from "./components/coffee/CoffeeList";
import HeaderComponent from "./components/siteItems/HeaderComponent";
import FooterComponent from "./components/siteItems/FooterComponent";
import AddCoffeeForm from "./components/coffee/AddCoffeeForm";
import Checkout from "./components/coffee/Checkout";

const startingList = [
    {id: 11223344556, price: 4.99 ,name: "roast-Light"},
    {id: 11223344557, price: 5.99 ,name: "roast-Medium"},
    {id: 11223344558, price: 2.99 ,name: "roast-Dark"}
];


function App() {

    const [checkoutCost, setCheckoutCost] = useState(0);

    const [showList, setShowList] = useState(true);
    const [showForm, setShowForm] = useState(false);
    const [showCheckout, setShowCheckout] = useState(false);

    const updateCart = (cost) => {
        setCheckoutCost((prevState) => {
            return prevState + cost;
        });
    }

    const showListHandler = (status) => {
        setShowList(status);
        setShowForm(!status);
        setShowCheckout(!status);
    }

    const showFormHandler = (status) => {
        setShowList(!status);
        setShowForm(status);
        setShowCheckout(!status);
    }

    const showCheckoutHandler = (status) => {
        setShowList(!status);
        setShowForm(!status);
        setShowCheckout(status);
    }

  return (
    <div className="App">
        <HeaderComponent cart={checkoutCost} />
        <div className="container">
            {showList && <CoffeeList buyCoffee={updateCart} coffees={startingList}/>}
            {showForm && <AddCoffeeForm />}
            {showCheckout && <Checkout />}
        </div>
        <FooterComponent shopHandler={showListHandler} formHandler={showFormHandler} checkoutHandler={showCheckoutHandler}/>
    </div>
  );
}

export default App;
