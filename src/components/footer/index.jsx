import React from "react";
import Header from "../header";
import "./footer.scss";
import logo from "../../assets/icons/logo.svg";
import { IoLogoWhatsapp, IoLogoFacebook } from "react-icons/io";
import { FaInstagramSquare } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer__container">
        <div className="footer__item">
          <a href={<Header />}>
            <img src={logo} alt="img" />
          </a>
          <p className="footer__text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="footer__list">
          <h3 className="footer__list__title">Contact us</h3>

          <ul className="footer__links">
            <li>
              <a href="#">E: info@example.com</a>
            </li>
            <li>
              <a href="#">P: +94 7670000000 </a>
            </li>
            <li>
              <address>A: 123 Hospital rd, </address>
            </li>
            <li>
              <address>Kalubowila, Dehiwela</address>
            </li>
          </ul>
        </div>
        <div className="footer__list">
          <h3 className="footer__list__title">Useful links</h3>

          <ul className="footer__links">
            <li>
              <a href="#">Shop All </a>
            </li>
            <li>
              <a href="#">Tempered Glass</a>
            </li>
            <li>
              <a href="#">Back-cover</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
          </ul>
        </div>
        <div className="footer__socials">
          <a href="#">
            <IoLogoWhatsapp /> Whatsapp
          </a>
          <a href="#">
            <IoLogoFacebook /> Facebook
          </a>
          <a href="#">
            <FaInstagramSquare />
            Instagram
          </a>
          <a href="#">
            <AiFillTikTok /> Tik Tok
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
