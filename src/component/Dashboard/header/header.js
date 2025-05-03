import React, { useEffect } from "react";
import logo from '../image/food.png'
import cartimg from '../image/cart.jpg'
import '../header/header.css'
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { getTotals } from "../cart/cartslice";

function Header() {
    const dispatch = useDispatch();
    const { cartTotalQUantity, cartItems } = useSelector((state) => state.cart);
    const history = useHistory();

    useEffect(() => {
        dispatch(getTotals());
    }, [cartItems, dispatch]);

    function gotoHome() {
        history.push('/home');
    }

    function AddCart() {
        history.push('/cart');
    }

    function Profile() {
        history.push('/profile');
    }

    function Logout() {
        history.push('/login');
    }

    return (
        <div className="header">
            <div className="header-left">
                <img
                    src={logo}
                    className='logo'
                    alt="logo"
                    style={{ cursor: 'pointer' }}
                    onClick={gotoHome} // ← Buraya eklendi
                />
            </div>

            <div className="header-right" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ position: 'relative' }}>
                    <button className="cart-button" onClick={AddCart}>
                        <img src={cartimg} alt="cart" />
                    </button>
                    <span className="msg"> {cartTotalQUantity}</span>
                </div>
                <button className="cart-button"><p onClick={gotoHome}>Home</p></button>
                <button className="cart-button"><p onClick={Profile}>Profile</p></button>
                <button className="cart-button"><p onClick={Logout}>Log out</p></button>
            </div>
        </div>
    );
}

export default Header;
