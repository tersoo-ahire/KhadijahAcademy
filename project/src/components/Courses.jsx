import React from "react";
import Book from "../assets/book1.jpeg"
import '../styles_desktop/App.css';
import Tutor from "../assets/tutor.png";
import Star from "../assets/star.svg"


export default function Course(){
    return (
        <div className="course">
            <img src={Book} alt="Book Image" />
            <div className="details">
                <p>Hands on Javascript</p>
                <p style={{color:"#FF3D6Eff",fontWeight:"bold"}}>N9,900</p>
            </div>
            <div className="tutor-container">
                <div className="tutor-left">
                    <img style={{width:"40px",height:"40px",marginRight:"10px"}} src={Tutor} alt="Tutor Image" />
                    <p>Kenny Ibrahim</p>
                </div>

                <div className="tutor-right">
                    <img src={Star} alt="Star Icon" />
                    <span>5</span>
                </div>
            </div>
        </div>
    )
}