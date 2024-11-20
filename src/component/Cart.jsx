import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleCart, removeItem, incrementItem, decrementItem } from '../store/slices/cartSlice';


const Cart = () => {
    const { cartItems } = useSelector((state) => state.cart);

    return (
        <>
        <div className='container'>
            <div className='row'>
            {cartItems.map(item=>
            <div className='col-6'>
                          <img src={item.images} className='w-100'/>
            </div>
                
            )}

            </div>
            

        </div>
        </>
    );
};

export default Cart;