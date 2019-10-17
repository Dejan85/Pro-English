import React from "react";
import { Link } from "react-router-dom";

//images
// import instagram from "../../../sass/images/instagram.jpg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__container">
        <div className="footer__msg">
          <h1 className="footer__h1">ProEnglish</h1>
          <p className="footer__p">
            Centar za učenje engleskog i pripreme za medjunarodne ispite u
            centru grada. Simulacija ispita. Jedinstven pristup učenju i kursevi
            posvećeni aktivnoj upotrebi engleskog. Rad sa master profesorima
            engleskog jezika sa iskustvom. Ćaskaonice sa izvornim govornicima.
            Usvajanje realnog engleskog, onako kako se zaista koristi i aktivna
            konverzacija tokom celog časa. Zajedno sa vama svoju viziju
            usvajanja jezika pretvaramo u stvarnost.
          </p>
        </div>
        <div className="footer__course">
          <h1 className="footer__h1">Kursevi</h1>
          <ul className="footer__list">
            <li className="footer__item">
              <Link to="/" className="footer__link">
                Kurs konverzacije
              </Link>
            </li>
            <li className="footer__item">
              <Link to="/" className="footer__link">
                a2
              </Link>
            </li>
            <li className="footer__item">
              <Link to="/" className="footer__link">
                b1
              </Link>
            </li>
            <li className="footer__item">
              <Link to="/" className="footer__link">
                b2
              </Link>
            </li>
            <li className="footer__item">
              <Link to="/" className="footer__link">
                c1
              </Link>
            </li>
          </ul>
        </div>
        <div className="footer__certificate">
          <h1 className="footer__h1">Sertificati</h1>
          <ul className="footer__list">
            <li className="footer__item">
              <Link to="/" className="footer__link">
                Toefl
              </Link>
            </li>
            <li className="footer__item">
              <Link to="/" className="footer__link">
                Ielts
              </Link>
            </li>
            <li className="footer__item">
              <Link to="/" className="footer__link">
                Gmat
              </Link>
            </li>
            <li className="footer__item">
              <Link to="/" className="footer__link">
                Gre
              </Link>
            </li>
            <li className="footer__item">
              <Link to="/" className="footer__link">
                Sat
              </Link>
            </li>
          </ul>
        </div>

        <div className="footer__follow">
          <h1 className="footer__h1">Pratite nas</h1>
          <ul className="footer__list">
            <li className="footer__item">
              <i className="fab fa-facebook-square footer__icon facebook" />
              <Link to="/" className="footer__link ">
                facebook.com
              </Link>
            </li>
            <li className="footer__item">
              <i className="fab fa-twitter footer__icon twitter" />
              <Link to="/" className="footer__link">
                Twitter
              </Link>
            </li>
            <li className="footer__item">
              <i className="fab fa-instagram footer__icon instagram" />
              <Link to="/" className="footer__link">
                Instagram
              </Link>
            </li>
            <li className="footer__item">
              <i className="fab fa-linkedin footer__icon linkedin" />
              <Link to="/" className="footer__link">
                Linkedin
              </Link>
            </li>
          </ul>
        </div>

        <div className="footer__contact">
          <h1 className="footer__h1">Kontakt</h1>
          <ul className="footer__list">
            <li className="footer__item">
              <i className="fas fa-phone phone" />
              <Link to="/" className="footer__link">
                060/14353567
              </Link>
            </li>
            <li className="footer__item">
              <i className="fab fa-viber footer__icon viber" />
              <Link to="/" className="footer__link">
                060/14353567
              </Link>
            </li>
            <li className="footer__item">
              <i className="far fa-envelope footer__icon gmail" />
              <Link to="/" className="footer__link ">
                gmail@gmail.com
              </Link>
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
