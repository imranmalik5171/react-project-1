import React from "react";
import img1 from "./images/meeting1.webp";
import img2 from "./images/meeting2.jpg";

function Model() {
    return (
        <div className="engagement">
            <h1>ENGAGEMENT MODEL</h1>
            <p>
                Our engagement model is designed to foster collaboration and drive results, 
                ensuring seamless communication and shared vision throughout every stage of project.
            </p>
            <div className="images-container">
                <div className="meeting-img">
                    <img src={img1} alt="Meeting 1" />
                </div>
                <div className="meeting-img2">
                    <img src={img2} alt="Meeting 2" />
                </div>
            </div>
        </div>
    );
}

export default Model;