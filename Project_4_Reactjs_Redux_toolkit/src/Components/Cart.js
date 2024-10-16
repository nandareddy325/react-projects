import React from 'react'
import { useSelector } from 'react-redux'
const Cart = () => {
    const cartCount = useSelector((state)=>state.CartRed.cartValues.length)
    const totalPrice = useSelector((state)=>state.CartRed.totalPrice)
    const cartproduct = useSelector((state)=>state.CartRed.cartValues)
    

  return (
    <>
    <div className='container-fluid'>
        <div className='row'>
             {cartproduct.map((item)=>(
              <>
                <div>
                <p>{item.title}</p>
                </div>
                 <div>
                 <button className='btn btn-danger'>Delete</button> 
               </div>
               </>
            ))} 
        </div>
    </div>
     <nav className="navbar sticky-top bg-light">
        <div className="d-inline navbar-nav mx-auto">
            <span className="btn btn-success m-2">Cart Items :{cartCount}</span>
            <span className="btn btn-success m-2">Total Price :{totalPrice}</span>
        </div>
    </nav>
    </>
  )
}
export default Cart
