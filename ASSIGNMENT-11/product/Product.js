import React from 'react';

import './product.css';
export const Product=(props)=>{
    return(
        <div>
            <div className='product_container'>
                <div className='product_title'>{props.name}</div>
                <div className='product_image'>
                    <img src={props.image}/>
                </div>
                <div className='product_price'>{props.price}</div>
                <div className='product_conducted_by'>{props.product_conducted_by}</div>
                <div className='button_div'>
                    <button className='buy_now'>Buy Now</button>
                </div>
            </div>
        </div>
    )
}