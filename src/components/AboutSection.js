import React from "react";
import home1 from "../img/home1.png";
const AboutSection = () => {
  return (
    <div>
      <div className="descrition">
        <div className="title">
          <div className="hide">
            <h2>We work to make</h2>
          </div>
          <div className="hide">
            <h2>
              you<span>dreams</span> comes
            </h2>
          </div>
          <div className="hide">
            <h2>true</h2>
          </div>
        </div>
        <p>
          Contact use for any photography or viddeography ideas that you have.
          we profectional with amazing skills
        </p>
        <button>Contact Us</button>
      </div>
      <div className="image">
        <img src={home1} alt="guy with the camera" />
      </div>
    </div>
  );
};

export default AboutSection;
