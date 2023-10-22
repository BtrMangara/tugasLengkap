import React from 'react';
import {AiOutlineWhatsApp ,AiOutlineInstagram} from 'react-icons/ai'

const ContactUs = () => {
    return (
        <div>
             
            <div className="container container-sm-fluid mt-lg-5 mt-sm-0 py-1">
                <div className="product align-items-center bg-light p-lg-5 p-sm-0 mx-lg-5 mx-sm-0 shadow-sm rounded-2">
                <h3 className="text-center mt-3"> CONTACT US</h3>
                
                
                <div className="row gx-0 mt-lg-6 col-sm-12 mt-sm-0 ">
                    
                <div className="col-lg-6 col-6 text-center mt-3">
                <a href="https://www.instagram.com/ssansrce/">
                    <AiOutlineWhatsApp  className="img-fluid w-25 text-black"/>
                </a>
                </div>

                    <div className="col-lg-6 col-6 text-center mt-3">
                    <a href="https://wa.me/6282274544344">
                    <AiOutlineInstagram className="img-fluid text-dark w-25"/>
                    </a>  
                    </div>
                </div>

                <div className="row gx-0 mt-3 px-5">
                    <div className="col-lg-12 col-sm-6">
                        <form >
                        
                            <div className="col-sm-12">
                            <div className="mb-3">
                                <label  className="form-label">Name<span className="text-danger">*</span></label>
                                <input required name="nama" type="text" className="form-control" />
                            </div>
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Email<span className="text-danger">*</span></label>
                                <input required name="email" type="email" className="form-control" />
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Messages<span className="text-danger">*</span></label>
                                <textarea required name="pesan" className="form-control"  rows="4" ></textarea>
                            </div>

                        
                            <div className="text-end mb-3">
                            <button type="submit" className="btn btn-dark" name="submit_pesan">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
                    
                

                </div>

            </div>
        </div>
    );
}

export default ContactUs;
