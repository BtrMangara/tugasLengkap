import PropTypes from "prop-types";
import React, { useState } from 'react';
import Loginlogo from '../tesst.jpg'
import {useForm} from 'react-hook-form';
import axios from 'axios';
import Swal from 'sweetalert2';



const Login = ({setToken}) => {

    const{
        handleSubmit,
    }= useForm();

    

    const [Email, setEmail] = useState();
    const [Password, setPassword] = useState();



    const loginHandler= async()=>{
      await axios({
        method: 'POST',
        url:'http://localhost:3004/user/login',
        data:{
            email :Email,
            password :Password
        }
      })
      .then((res)=>{
        Swal.fire(
            'Succes',
            'Login Telah Berhasil',
            'success'
          )
        //   console.log(res.data)
          setToken({
            data: res.data
        })
        window.location = '/Posting'
        
      })
      .catch((err)=>{
        Swal.fire({
            icon: 'error',
            title: 'Login Gagal...',
            text: `${err.message}`,
          })
        console.log(err.message)
      })
    }

    return (
        <div>
            <div className="card mb-3 position-absolute top-50 start-50 translate-middle border-0" style={{maxWidth:"720px", backgroundColor:"rgba(255,255,255,0.1)", WebkitBoxShadow:'-1px 12px 22px -1px rgba(0,0,0,0.59)',boxShadow:'-1px 12px 22px -1px rgba(0,0,0,0.59)'}}>
                <div className="row g-0 justify-content-center align-items-center">
                    <div className="col-6">
                    <img src={Loginlogo} height="300px" style={{display:'inline-block'}} className="img-fluid h-100"/>
                    </div>
                    <div className="col-6">
                    <div className="card-body">
                        <h5 className="card-title">Login</h5>
                        <p className="card-text">Please Login Your Account</p>
                        <form onSubmit={handleSubmit(loginHandler)}>
                        <div className="mb-3">
                            <label className="form-label">Email address</label>
                            <input type="email" className="form-control" name="email" onChange={(e)=>setEmail(e.target.value)} />
                            
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Password</label>
                            <input type="password" className="form-control" name="password" onChange={(e)=>setPassword(e.target.value)}/>
                        </div>
                        
                        <button name="submit" type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

Login.propTypes = {
    setToken: PropTypes.func.isRequired
}

export default Login;
