import { useState } from "react";
import Coffee from "./Coffee";

const CoffeeList = (props) => {

    return <div className="listSet">
                <ul className="list">
                    {props.coffees.map(coffee => {
                        return <Coffee addToCart={props.buyCoffee} key={coffee.id} price={coffee.price} name={coffee.name}/>
                    })}
                </ul>
            </div>

}

export default CoffeeList;