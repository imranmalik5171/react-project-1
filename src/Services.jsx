import React from "react";
import img1 from "./images/graphics.webp";
import img2 from "./images/graphics.webp";
import img3 from "./images/mobile-dev.webp";
import img4 from "./images/software-dev.webp";
import img5 from "./images/staff.webp";
import img6 from "./images/analysis.webp";


function Services () {
    return(
          <div className="services">
                    <h1>CORE SERVICES</h1>
                    <p>
                        Let us help bring your vision to life - from professional softwares
                        and applications to UIUX, we've got your covered. 
                    </p>
                    <div className="images-container-2">
                        <div className="services-img">
                            <img src={img1} alt="" />
                            <h4>ANIMATED CREATIONS</h4>
                        </div>
                        <div className="services-img">
                            <img src={img2} alt="" />
                            <h4>GRAPHIC DESIGNING</h4>
                        </div>
                        <div className="services-img">
                            <img src={img3} alt="" />
                            <h4>MOBILE DEVELOMENT</h4>
                        </div>
                        <div className="services-img">
                            <img src={img4} alt="" />
                            <h4>SOFTWARE DEVELOPMENT</h4>
                        </div>
                        <div className="services-img">
                            <img src={img5} alt="" />
                            <h4>STAFF AUGMENTATION</h4>
                        </div>
                        <div className="services-img">
                            <img src={img6} alt="" />
                            <h4>BUSINESS ANALYSIS</h4>
                        </div>
                    </div>
                </div>

    )
}

export default Services;