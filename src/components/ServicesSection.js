import React from "react";
import clock from "../img/clock.svg";
import diaphragm from "../img/diaphragm.svg";
import money from "../img/money.svg";
import teamwork from "../img/teamwork.svg";
import home2 from "../img/home2.png";

function ServicesSection() {
  return (
    <div className="services">
      <h2>
        High <span>quality</span> Services
      </h2>
      <dir className="cards">
        <div className="card">
          <div className="icon">
            <img alt="icon" src={clock} />
            <h3>Efficient</h3>
          </div>
          <p>Lorem ipsum asdasd</p>
        </div>
        <div className="card">
          <div className="icon">
            <img alt="icon" src={teamwork} />
            <h3>Team Work</h3>
          </div>
          <p>Lorem ipsum asdasd</p>
        </div>
        <div className="card">
          <div className="icon">
            <img alt="icon" src={diaphragm} />
            <h3>Diaphragm</h3>
          </div>
          <p>Lorem ipsum asdasd</p>
        </div>
        <div className="card">
          <div className="icon">
            <img alt="icon" src={money} />
            <h3>Affordable</h3>
          </div>
          <p>Lorem ipsum asdasd</p>
        </div>
      </dir>
      <div alt="icon" className="image">
        <img src={home2} />
      </div>
    </div>
  );
}

export default ServicesSection;
