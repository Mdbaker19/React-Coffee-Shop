import { useState } from "react";

const Coffee = (props) => {

    const addToCartHandler = () => {
        props.addToCart(props.price);
    }

    return (
        <li>
            <div className="card">
                <p>{props.name}</p>
                <p>{props.price}</p>
                <div className="card-action">
                    <button className="btn" onClick={addToCartHandler}>Order Coffee</button>
                </div>
            </div>
        </li>
    )

}

export default Coffee;