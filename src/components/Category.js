import React from "react";
import "../styles/Category.css";
import { Link } from "react-router-dom";


const Cards = () => {
    return (
       <div className="container">
         <div className="card-container">
         <div className="image-container">
                <img src="./images/fruits.jpg" alt="Fruits" />
                </div>
                <div className="button">
                    <button > <Link to={"/Fruits"}>Fruits</Link> </button>
                </div>
            
         </div>
         <div className="card-container">
                <div className="image-container">
                    <img src="./images/vegetables.jpg" alt="Vegetables" />
                </div>
                <div className="button">
                    <button> <Link to={"/Vegetables"}>Vegetables</Link> </button>
                </div>

            </div>
         <div className="card-container">
                <div className="image-container">
                    <img src="./images/machines.webp" alt="Machines" />
                </div>
                <div>
                    <button> <Link to={"/Machines & tools"}>Machines & tools</Link> </button>
                </div>

            </div>

        </div>
    );
};

export default Cards;