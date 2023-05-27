import React from "react";
import '../styles_desktop/App.css';
import Search from "../assets/search.svg";
import Schoolgirl from "../assets/schoolgirl.png";
import Document from "../assets/document.svg";
import Teacher from "../assets/teacher.svg";
import Gradcap from "../assets/gradcap.svg";
import Course from "../components/Courses";

export default function Home(){
    return (
        <>
            <section className="hero">
                <div className="hero-left">
                    <h1 className="hero-h1">Learn and practice at your own pace</h1>
                    <p className="hero-p1">
                        We are here to help you achieve that 
                        journey of a seamless online learning.
                    </p>
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

            <section className="section-1">
                <h2 className="section-1-h2" >
                    <span style={{color:"#1154FDff"}}>Our </span> 
                    Features
                </h2>
                <p>
                    You will take your career to the next level with 
                    KhadijatAcademy by getting world class resources.
                </p>
                <div className="section-1-card-container">
                    <div className="features-card">
                        <div className="circle-container1">
                            <img src={Document} alt="Document Icon" />
                        </div>
                        <h3 className="features-card-h3">Unlimited Access to courses</h3>
                        <p className="features-card-p">
                            With over 48 hours of lessons available in 24/7,
                            you will learn anything you need to know to upskill
                            yourself in your area of interest.
                        </p>
                    </div>
                    <div className="features-card">
                        <div className="circle-container2">
                            <img src={Teacher} alt="Teacher Icon" />
                        </div>
                        <h3 className="features-card-h3">Taught by top instructors</h3>
                        <p className="features-card-p">
                            With over 48 hours of lessons available in 24/7,
                            you will learn anything you need to know to upskill
                            yourself in your area of interest.
                        </p>
                    </div>
                    <div className="features-card">
                        <div className="circle-container3">
                            <img src={Gradcap} alt="Gradcap Icon" />
                        </div>
                        <h3 className="features-card-h3">Learning at your pace</h3>
                        <p className="features-card-p">
                            With over 48 hours of lessons available in 24/7,
                            you will learn anything you need to know to upskill
                            yourself in your area of interest.
                        </p>
                    </div>
                </div>
            </section>

            <section className="section-2">
                <h2 className="section-1-h2" >
                    <span style={{color:"#1154FDff"}}>Explore </span> 
                    Our Courses
                </h2>
                <p>
                    You will take your career to the next level with 
                    KhadijatAcademy by getting world class resources.
                </p>
                <div className="course-tags">
                    <div id="software-course">Software Development</div>
                    <div>Graphics Designs</div>
                    <div>UI/UX Designs</div>
                    <div>Catering</div>
                </div>
                <div className="courses-container">
                    <div className="courses-container-sub">
                        <Course/>
                        <Course/>
                        <Course/>
                    </div>
                    <div className="courses-container-sub">
                        <Course/>
                        <Course/>
                        <Course/>
                    </div>
                </div>
                <button className="explore-button">Explore All Courses</button>
            </section>
        </>
    )
}