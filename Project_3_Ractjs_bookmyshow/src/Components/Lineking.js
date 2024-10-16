import React from "react";
import c8 from '../Images/Pic_7.jpeg'
import s from '../Images/salar.jpg'

const LineKing=()=>{
    return(
        <>
        <div className="lineking align-content-center" >
            <div className="container">
                <div className="row ">
                    <div className="col-3 images">
                        <img src={c8} />
                    </div>
                    <div className="col-9">
                        <div className="">
                            <h5 className="display-3 text-white fw-bold">Part 1 : Salaar</h5>
                            <div className="title bg-dark align-content-center">
                            <a href="#" className="d-flex justify-content-between text-decoration-none text-white">
                                <span><i class="fa-solid fa-star text-danger"></i> 9.1/10 (174.K Votes)</span>
                                <button className="btn btn-ligth bg-light text- fw-bold">Rate Now</button>
                            </a>
                            </div>

                            <a href="#" className="btn bg-white mt-3">2D</a>
                            <a href="#" className="btn bg-white ms-3 mt-3">Hindi</a>
                            <p className="text-white bw-bold">2h 29m . Comedy, Horror .UA . 15 Aug, 2024</p>


                            <button className="btn btn-danger px-5 py-2"> Book tickets</button>

                        </div>
                    </div>
                </div>
            </div>
            

        </div>
        </>
    )
}
export default LineKing