import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import { toggleCart, removeItem, incrementItem, decrementItem } from '../store/slices/cartSlice';

const Header = () => {
    const {cartItems } = useSelector((state) => state.cart);
    const[modalIsOpen,setModalIsOpen]=useState(false)
    const[carts,setCarts]=useState('cartItems')
    const openModal=()=>{
        setModalIsOpen(true)
    }
    const closeModal = ()=>{
        setModalIsOpen(false)
    }

    const dispatch = useDispatch();
    
    const handleRemove = (itemId) => {
        dispatch(removeItem(itemId));
    };
    const handleIncrement = (itemId) => {
        dispatch(incrementItem(itemId));
    };
    const handleDecrement = (itemId) => {
        dispatch(decrementItem(itemId));
    };
    const selectItemById = (itemId) =>
        cartItems.find(item=>item.id === itemId)
    
    
    const customStyles = {
        content: {
          width : "400px",
          left:"68%"

        },
      };

    return (
        <div className='Headernav'>
            <nav className="  navbar navbar-expand-lg">
                <Link className="navbar-brand" href="#">Navbar</Link>
                 <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                   <span className="navbar-toggler-icon"></span>
                 </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav m-auto">
                            <li className="nav-item active me-3">
                                <Link className="nav-link bg-primary px-3" to="/">Home <span className="sr-only"></span></Link>
                            </li>
                            <li className="nav-item active me-3">
                                <Link className="nav-link bg-primary px-3" to="/cart">Productdetails<span className="sr-only"></span></Link>
                            </li>
                            
                            </ul>
                            <ul className="navbar-nav ms-auto">
                            <li className="nav-item active me-3">
                            <Link className="nav-link bg-secondary  px-3" onClick={openModal}>Cart {cartItems.length} </Link>
                            
                            <Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={customStyles} >
                              {cartItems.length === 0 ? (
                                <div>
                                    <h1>Cart is Empty?</h1>
                                </div>
                              ):(
                                <div className='container'>
                                     <div className=''>
                                         {cartItems.map((item)=>(
                                             <div className='col-12 border mt-3 '>
                                                <div className='row'>
                                                    <div className='col-5 p-3'>
                                                          <figure>
                                                                <Link to="/cart" onSubmit={selectItemById(item.id)}><img src={item.images} className='w-100'/></Link>
                                                          </figure>
                                                          <div className="cart_items_quantity border d-flex justify-content-around">
                                                            <button onClick={() => handleDecrement(item.id)} className=' '>&#8722;</button>
                                                            <span className='border px-2 bg-dark text-white fw-bold'>{item.quantity}</span>
                                                            <button onClick={() => handleIncrement(item.id)} className=''>&#43;</button>
                                                        </div>

                                                    </div>
                                                    <div className='col-7 p-3'>
                                                    <h6>{item.title}</h6>
                                                    <p>Price : {item.price}</p>
                                                    <p>Rating : {item.rating}</p>
                                                     
                                                    </div>
                                                </div>
                                                 
                                                 
                                                    
                                             </div>
                                         ))}
                         
                                     </div>
                                       </div>

                              )}
                              
                                       <div className='text-end position-sticky bottom-0 end-0'>
                                             <button onClick={closeModal} className='btn btn-danger'>close</button>
                                       </div>
                                       
                            </Modal>
                            </li>
                            </ul>
                        </div>
                    </nav>
            </div>

    );
};

export default Header;