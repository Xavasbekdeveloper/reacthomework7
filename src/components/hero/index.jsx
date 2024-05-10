import React from "react";
import "./hero.scss";
import heroBg from "../../assets/images/hero-bg.png";

const Hero = () => {
  return (
    <section className="hero">
      <div className="container hero__container">
        <div className="hero__left">
          <h1 className="hero__title">
            <span className="hero__title-first">Mobile</span>
            <span className="hero__title-second">Backcover</span>
            <span className="hero__title-third">Tempered Glass</span>
          </h1>
          <button className="hero__btn">Shop all!</button>
        </div>
        <div className="hero__right">
          <img src={heroBg} alt="hero img" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
