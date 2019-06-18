import React from "react";
import { Link } from "react-router-dom";

//images
import instagram from "../../../sass/images/instagram.jpg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__container">
        <div className="footer__msg">
          <h1 className="footer__h1">ProEnglish</h1>
          <p className="footer__p">
            We are Education, create your passion and inspiration. And hope
            success will come for your dream. Please send email and get latest
            news. We are Education, create your passion and inspiration. And
            hope success will come for your dream. Please send email and get
            latest news. We are Education, create your passion and inspiration.
            And hope success will come for your dream. Please send email and get
            latest news. We are Education, create your passion and inspiration.
          </p>
        </div>
        <div className="footer__course">
          <h1 className="footer__h1">Kursevi</h1>
          <ul className="footer__list">
            <li className="footer__item">
              <Link className="footer__link">Kurs konverzacije</Link>
            </li>
            <li className="footer__item">
              <Link className="footer__link">a2</Link>
            </li>
            <li className="footer__item">
              <Link className="footer__link">b1</Link>
            </li>
            <li className="footer__item">
              <Link className="footer__link">b2</Link>
            </li>
            <li className="footer__item">
              <Link className="footer__link">c1</Link>
            </li>
          </ul>
        </div>
        <div className="footer__certificate">
          <h1 className="footer__h1">Sertificati</h1>
          <ul className="footer__list">
            <li className="footer__item">
              <Link className="footer__link">Toefl</Link>
            </li>
            <li className="footer__item">
              <Link className="footer__link">Ielts</Link>
            </li>
            <li className="footer__item">
              <Link className="footer__link">Gmat</Link>
            </li>
            <li className="footer__item">
              <Link className="footer__link">Gre</Link>
            </li>
            <li className="footer__item">
              <Link className="footer__link">Sat</Link>
            </li>
          </ul>
        </div>

        <div className="footer__follow">
          <h1 className="footer__h1">Pratite nas</h1>
          <ul className="footer__list">
            <li className="footer__item">
              <i className="fab fa-facebook-square footer__icon facebook" />
              <Link className="footer__link ">facebook.com</Link>
            </li>
            <li className="footer__item">
              <i className="fab fa-twitter footer__icon twitter" />
              <Link className="footer__link">Twitter</Link>
            </li>
            <li className="footer__item">
              <i class="fab fa-instagram footer__icon instagram" />
              <Link className="footer__link">Instagram</Link>
            </li>
            <li className="footer__item">
              <i className="fab fa-linkedin footer__icon linkedin" />
              <Link className="footer__link">Linkedin</Link>
            </li>
          </ul>
        </div>

        <div className="footer__contact">
          <h1 className="footer__h1">Kontakt</h1>
          <ul className="footer__list">
            <li className="footer__item">
              <i className="fas fa-mobile-alt footer__icon phone" />
              <Link className="footer__link">060/14353567</Link>
            </li>
            <li className="footer__item">
              <i className="fab fa-viber footer__icon viber" />
              <Link className="footer__link">060/14353567</Link>
            </li>
            <li className="footer__item">
              <i className="far fa-envelope footer__icon gmail" />
              <Link className="footer__link ">gmail@gmail.com</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer__devxad">
        <h2 className="footer__h2">
          © Devxad 2019 - MERN APP - All rights reserved.
        </h2>
      </div>
    </div>
  );
};

export default Footer;
