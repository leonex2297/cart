import React from 'react'
import { IoIosArrowUp,IoIosArrowDown } from "react-icons/io";
import {useGlobalContext} from "../Context";

const CartItem = ({id,title,price,imge,amount}:any) => {
    const{remove,increment,decrement}=useGlobalContext();
    return (
        <article key={id} className="cart__items">
            <img src={imge} alt={title}/>
            <div>
                <h4>{title}</h4>
                <h4>${price}</h4>
                <p style={{letterSpacing:"2px",color:"green",cursor:"pointer"}} onClick={()=>remove(id)}>remove</p>
            </div>
            <div className="cart__items__icons">
                <IoIosArrowUp onClick={()=>increment(id)} style={{ cursor:"pointer",}}/>
                <p>{amount}</p>
                <IoIosArrowDown onClick={()=>decrement(id)}  style={{ cursor:"pointer",}}/>
            </div>
        </article>
    )
}

export default CartItem
