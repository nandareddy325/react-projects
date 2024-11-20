import React from 'react';
import data from '../Data/Jsondatafile.json';
import { useDispatch } from 'react-redux';
import { addItem } from '../store/slices/cartSlice';
const Home = () => {
    const dispatch = useDispatch();
    return (
        <>
            <section className="Homepage py-2">
                <div className="container">
                    <div className="row">
                        {data.map((product)=>(
                            <div className='col-3 g-4'>
                                <div class="card">
                                    <img class="card-img-top w-50 mx-auto"  src={product.images} alt="Card image cap"/>
                                    <div class="card-body">
                                      <h5 class="card-title">{product.title}</h5>
                                      <p class="card-text">Price : {product.price}</p>
                                      <p>Category : {product.category}</p>
                                    <div className='card-button text-center'>
                                            <button class="btn btn-primary rounded-0" onClick={()=>dispatch(addItem(product))}>Buy Now</button>
                                    </div>
                                    </div>
                            </div>
                            </div>
                            
                        ))}
                       
                    </div>
                </div>
            </section>

        </>
    );
};

export default Home;