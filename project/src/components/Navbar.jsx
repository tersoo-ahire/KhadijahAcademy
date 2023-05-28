import React, { useState } from "react";
import { Link } from "react-router-dom";
import Cart from "../assets/cart.svg";
import bar from "../assets/bar.svg";
import cancel from "../assets/cancel.svg";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
    <>
      <nav>
        <div className="nav-left">
          <img src="./graduation-hat.png" alt="Graduation Hat" />
          <p>KhadijahAcademy</p>
        </div>
        
        <div className={`nav-right ${isOpen ? "open" : ""}`}>
          <Link to="/">Home</Link>
          <Link to="#">About Us</Link>
          <Link to="#">Courses</Link>
          <Link to="#" style={{ display: "flex", gap: "0.5em" }}>
            <img src={Cart} alt="Cart Icon" style={{ width: "20px" }} />
            Cart
          </Link>
          <Link to="#">
            <button className="button-1">Sign In</button>
          </Link>
          <Link to="#">
            <button className="button-2">Join Academy</button>
          </Link>
        </div>

        <div className="hamburger" onClick={toggleMenu}>
            <img style={{width: "30px"}} src={isOpen ? cancel : bar} alt="Mobile Nav Bar" />
        </div>
      </nav>
    </>
    )
}