
import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";
const Login = () =>{
    return (
        <div className="cover">
            <img src="./images/farm3.webp" alt="login"/>
            <div className="form">
                <h2>Login </h2>
                <input type="text" placeholder=" Enter username" required />
                <input type="password" placeholder="Enter password" required />
                <div className="login-btn">
                    <button>
                        <Link to={"/"}>Login</Link></button>
                </div>
            </div>
        </div>
    );
};
export default Login ;