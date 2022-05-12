import React from 'react';
import Button from './Button';

import './ProductItem.scss';


const ProductItem = ({product}) => {

    return (
        <>
        <div className='productCard'>
            <div className='productHeading'>{product.name}</div>
            <div className='productBody'>
            <div className='productImageContainer'>
                <img src={product.imageURL} className= 'productImage' />
                </div>
                <div className='productDescBody'>
                    <div className='productDescription'>
                        <p>{product.description.length > 100 ? product.description.substring(0,100) + '...' : product.description}</p>
                    </div>
                    <div className='productButton'>
                        <Button>
                            BUY NOW @ MRP Rs.{product.price}
                        </Button>
                    </div>
            </div>
            </div>
        </div>
        <hr />
        </>
    )

}

export default ProductItem;