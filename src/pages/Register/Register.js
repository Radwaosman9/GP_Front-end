import React from "react";
import "./Register.css";
import { Link } from "react-router-dom";
const Register = () =>{
    return (
        <div className="cover">
            <img src="./images/farm3.webp" alt="login"/>
            <div className="form">
                <div classname="form1">
            <h2 className="hh2">Register Form</h2>
               <div className="name"> <input type="text" placeholder=" Enter name" required/></div>
                <div className="us"><input type="text" placeholder=" Enter username"required/></div>
                <input className="ps" type="password" placeholder="Enter password"required/>
                <div className="ph"> <input type="text" placeholder=" Enter Your Phone number" required/></div>
                <div className="addr"> <input type="text" placeholder=" Enter Your Address" required/></div>
                <div className="register-btn">
                    <button>
                        <Link to={"/"}>Submit</Link></button>
                </div>
            </div>
            </div>
        </div>
    );
};
export default Register ;