import React from "react";
import '../styles_desktop/App.css';
import Search from "../assets/search.svg";
import Schoolgirl from "../assets/schoolgirl.png";

export default function Home(){
    return (
        <>
            <section className="hero">
                <div className="hero-left">
                    <h1 className="hero-h1">Learn and practice at your own pace</h1>
                    <p className="hero-p1">We are here to help you achieve that journey of a seamless online learning.</p>
                    <div className="search-container">
                        <img src={Search} alt="Search Icon" />
                        <input type="search" placeholder="Search for courses" />
                        <input id="search-button"  type="submit" value="Search" />
                    </div>
                </div>
                <div className="hero-right">
                    <img src={Schoolgirl} alt="Image of School girl"/>
                </div>
            </section>
        </>
    )
}