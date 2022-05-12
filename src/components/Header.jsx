import React from 'react';
import "./Header.scss";
import logo from '../assets/images/logo.png';
import cartIcon from '../assets/images/cart.svg';
import { Link, Outlet } from 'react-router-dom';

const Header = () => {

    return (
        <header className='header'>
            <section className='auth'>
                <ul>
                <Link to="/signin" style={{textDecoration: 'none', marginRight:'10px'}}>Sign In  </Link>
                <Link to="/register" style={{textDecoration: 'none'}}>Register</Link>
                </ul>
            </section>
        <section className='navbar'>
            <div className='logo'>
                <img src={logo} />
            </div>
            <nav>
                <ul>
                <Link to="/" style={{textDecoration: 'none', marginRight:'10px'}}>Home  </Link>
                <Link to="/products/All" style={{textDecoration: 'none'}}>Products</Link>
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