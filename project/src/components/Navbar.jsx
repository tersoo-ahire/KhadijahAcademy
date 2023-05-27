import React from "react";
import {Link} from "react-router-dom";
import Cart from "../assets/cart.svg";

export default function Navbar(){
    return (
        <>
            <nav>
                <div className="nav-left">
                    <img src="./graduation-hat.png" alt="Graduation Hat" />
                    <p>KhadijahAcademy</p>
                </div>
                <div className="nav-right">
                    <Link to="/">Home</Link>
                    <Link to="#">About Us</Link>
                    <Link to="#">Courses</Link>
                    <Link to="#" style={{display:"flex",gap:"0.5em"}}>
                        <img src={Cart} alt="Cart Icon" style={{width:"20px"}}/>
                        Cart
                    </Link>
                    <Link to="#">
                        <button className="button-1">Sign In</button>
                    </Link>
                    <Link to="#">
                        <button className="button-2">Join Academy</button>
                    </Link>

                </div>
            </nav>
        </>
    )
}