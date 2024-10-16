import { useDispatch } from "react-redux";
import { decremenentCart, incrementCart } from "../Redox/Reducer/CartReducer";
import Fetch from '../Data/JsonData.json';

import { useSelector } from "react-redux";
const Products = ()=>{
    const dispatch = useDispatch()
    return(
    <>
    
    <div className="container product py-3">
        <div className="row">
            {Fetch.map(product => 
            <div className="col-3 g-4" key={product.id}>
                <div className="card">
                    <img className="card-img-top p-5" src={product.image} alt="Card image cap"/>
                    <div className="container"><hr/></div>
                    <div className="card-body">
                         <p className="card-title"><b>{product.title} </b></p>
                        <span className="card-text fw-bold">
                            &#8377;   {product.price}</span>
                        <div className="card-body d-flex justify-content-between">
                            <button className="btn btn-info" onClick={()=>dispatch(incrementCart({
                                 productName:product.title,
                                 productPrice:product.price}))} >Add to Cart</button> 
                            <button className="btn btn-danger" onClick={()=>dispatch(decremenentCart({
                                 productName:product.id,
                                 productPrice:product.price}))} >Remove
                            </button>
                        </div>
                    </div>
                </div>
            </div>
          )}
        </div>
    </div>
    </>
    )
}
export default Products;