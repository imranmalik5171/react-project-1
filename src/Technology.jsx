import React from "react";
import img1 from "./images/node.png";
import img2 from "./images/python.png";
import img3 from "./images/django.png";
import img4 from "./images/react.png";
import img5 from "./images/laravel.png";

function Technology() {
    return(
            <div className="technology">
                <h1>TECHNOLOGY STACK</h1>
                <div className="images-container-3">
                    <div className="technology-img">
                         <img src={img1} alt="" />
                    </div>
                    <div className="technology-img">
                         <img src={img2} alt="" />
                    </div>
                    <div className="technology-img">
                         <img src={img3} alt="" />
                     </div>
                    <div className="technology-img">
                        <img src={img4} alt="" />
                    </div>
                    <div className="technology-img">
                        <img src={img5} alt="" />
                    </div>
                </div>
            </div>
    )
}

export default Technology;