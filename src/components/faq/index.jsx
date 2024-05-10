import React from "react";
import "./faq.scss";
import delivary from "../../assets/icons/faq-truck.svg";
import price from "../../assets/icons/faq-price.svg";
import quality from "../../assets/icons/faq-quality.svg";

const Faq = () => {
  return (
    <section className="faq">
      <div className="container faq__container">
        <div className="faq__red"></div>
        <p className="faq__text">Why Choose Us</p>
        <div className="faq__cards">
          <div className="faq__card">
            <img src={delivary} alt="img" />
            <h3 className="faq__card__title">Fast Delivery</h3>
            <p className="faq__card__desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="faq__card">
            <img src={price} alt="img" />
            <h3 className="faq__card__title">Cheap Price</h3>
            <p className="faq__card__desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="faq__card">
            <img src={quality} alt="img" />
            <h3 className="faq__card__title">Premium Quality</h3>
            <p className="faq__card__desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
