import React from 'react';
import './Button.scss';

const Button = ({ children,classCustom = '' }) => {

    return (
        <button className= {`btn ${classCustom}`}>
            {children}
        </button>
    )
}

export default Button;