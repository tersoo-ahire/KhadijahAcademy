import React from "react";

export default function Footer(){
    return (
        <footer>
            <div className="logo-container">
                <div className="logo-name">
                    <img src="./graduation-hat.png" alt="Graduation Hat" />
                    <p>KhadijahAcademy</p>
                </div>
                <div className="description">Online course learning platform</div>
            </div>
            <h3>Subscribe to get our Newsletter</h3>
            <div className="email-container">
                <input className="email" type="email" placeholder="Your Email" />
                <input className="subscribe" type="button" value="Subscribe" />
            </div>
            <div className="links">
                <a href="#" className="link-border">Careers</a>
                <a href="#" className="link-border">Privacy Policy</a>
                <a href="#">Terms and Conditions</a>
            </div>
            <p className="copywrite">© 2023 KhadijatAcademy</p>
        </footer>
    )
}