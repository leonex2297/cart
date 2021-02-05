import React from 'react'
import CartItem from "./CartItem"
import "./cart.css"
import Button from '@material-ui/core/Button';
import { useGlobalContext } from "../Context"

const CartContainer = () => {
    const { cart,total,clearcart} = useGlobalContext();
    if (cart.length === 0) {
        return (
            <div className="cart__container">
                <header style={{ textAlign: "center", }}>
                    <h1>Your Bag</h1>
                    <h4>Is Currently Empty.</h4>
                </header>
            </div>
        )
    }
    return (
        <div className="cart__container" >
            <div className="cart__container__aria">
                <header>
                    <h1 style={{ textAlign: "center", }}>Your Bag</h1>
                </header>
                <main>
                    {cart.map((item: any) => {
                        return <CartItem key={item.id} {...item} />
                    })}
                </main>
                <footer style={{ textAlign: "center", }} >
                    <hr />
                    <div className="cart__container__footer">
                        <h4>total </h4>
                        <h4 >${total}</h4>
                    </div>
                    <Button variant="outlined" color="secondary" onClick={clearcart}>
                        CLEAR CART
                    </Button>
                </footer>
            </div>
        </div>
    )
}

export default CartContainer
