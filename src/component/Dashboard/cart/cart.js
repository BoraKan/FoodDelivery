import React from "react";
import '../cart/cart.css'
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import Footer from "../footer/footer";
import { addTocart, clearCartItem, decreaseCart, getTotals, removeCartItem } from "./cartslice";

function Cart() {
    const history = useHistory();
    const cart = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTotals());
    }, [cart, dispatch]);

    function detail(id) {
        history.push(`/menu/${id}`);
    }

    function remove(ele) {
        dispatch(removeCartItem(ele));
    }

    function decrease(cartitem) {
        dispatch(decreaseCart(cartitem));
    }

    function increase(cartItem) {
        dispatch(addTocart(cartItem));
    }

    function clearcart() {
        dispatch(clearCartItem());
    }

    function order() {
        alert('Your order placed successfully!!');
        dispatch(clearCartItem());
    }

    return (
        <div className="cart-bg">
            <div className="cart">
                <h1 style={{ padding: '10px' }}>Shopping cart</h1>
                {
                    cart.cartItems.length === 0 ? (
                        <div style={{ marginBottom: '165px', padding: '10px' }}>
                            <p>Your cart is currently empty</p>
                        </div>
                    ) : (
                        <div className="cart-main">
                            <div className="cart-main-head">
                                <h3 className="cart-main-head-h3">Product</h3>
                                <h3>Price</h3>
                                <h3>Quantity</h3>
                                <h3>Total</h3>
                            </div>

                            {cart.cartItems.map((item) => (
                                <div key={item.id} className="cart-main-body">
                                    <div className="cart-main-body-div">
                                        <img src={`/images/${item.image}`} alt={item.name} onClick={() => detail(item.id)} />
                                        <div style={{ paddingLeft: '5px' }}>
                                            <h3>{item.name}</h3>
                                            <button onClick={() => remove(item)}>Delete</button>
                                        </div>
                                    </div>

                                    <div className="cart-main-body-div2"><h5>{item.price} TL</h5></div>

                                    <div className="quantity">
                                        <button onClick={() => decrease(item)}>-</button>
                                        <span>{item.cartQuantity}</span>
                                        <button onClick={() => increase(item)}>+</button>
                                    </div>

                                    <div className="cart-main-body-div2">
                                        <div style={{ color: 'green', fontSize: '23px' }}>{item.cartQuantity * item.price} TL</div>
                                    </div>
                                </div>
                            ))}

                            <div style={{ display: 'flex', justifyContent: 'space-between', width: '1100px', marginLeft: '10px' }}>
                                <div>
                                    <button className="clearCart-button" onClick={clearcart}>Clear cart</button>
                                </div>
                                <div>
                                    <p><b>Total: {cart.totalAmount} TL</b></p>
                                    <button className="Order-button" onClick={order}>Order</button>
                                </div>
                            </div>

                        </div>
                    )
                }
            </div>
            <Footer />
        </div>
    );
}

export default Cart;
