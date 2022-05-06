import React from 'react';
import "./Header.scss";
import logo from '../assets/images/logo.png';
import cartIcon from '../assets/images/cart.svg';
import { Outlet } from 'react-router-dom';

const Header = () => {

    return (
        <header className='header'>
            <section className='auth'>
                <ul>
                    <li>Sign In</li>
                    <li>Register</li>
                </ul>
            </section>
        <section className='navbar'>
            <div className='logo'>
                <img src={logo} />
            </div>
            <nav>
                <ul>
                    <li>Home</li>
                    <li>Products</li>
                </ul>
            </nav>
            <div className='cart'>
                <img src={cartIcon} />
                <span>   0 Items</span>
            </div>
        </section>
        <Outlet />
        </header>
    )

}

export default Header;