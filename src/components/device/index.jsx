import React from "react";
import "./device.scss";
import deviceBg from "../../assets/images/device-bg.png";

const Device = () => {
  return (
    <section className="device">
      <div className="container device__container">
        <span className="device__red"></span>
        <span className="device__text">about us</span>
        <h2 className="device__title">
          If you’re looking for a Premium Quality Tempered Glass or Back-cover
          for your Device
        </h2>
        <p className="device__desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. 
        </p>
        <div className="device__img">
          <img src={deviceBg} alt="img" />
        </div>
      </div>
    </section>
  );
};

export default Device;
