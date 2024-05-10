import React from "react";
import "./info.scss";
import infoBg from "../../assets/images/info-bg.png";

const ProducInfo = () => {
  return (
    <section className="info">
      <div className="container info__container">
        <div className="info__position"></div>
        <div className="info__card">
          <div className="info__card__left">
            <h2 className="info__title">
              Shop Premium <br /> Tempered Glass in wholesale <br /> Price !
            </h2>
            <p className="info__desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
            <p className="info__desc">LKR : 299</p>
            <div>
              <button className="info__btn">Shop Tempered Glass </button>
            </div>
          </div>
          <div className="info__card__right">
            <img src={infoBg} alt="img" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProducInfo;
