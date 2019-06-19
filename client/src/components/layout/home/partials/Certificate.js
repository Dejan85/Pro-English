import React from "react";
import { Link } from "react-router-dom";

const Certificate = () => {
  return (
    <div className="home__certificate">
      <ul className="home__certificate__list">
        <li className="home__certificate__item">
          <Link to="/" className="home__certificate__link">
            Toefl
          </Link>
        </li>
        <li className="home__certificate__item">
          <Link to="/" className="home__certificate__link">
            Ielts
          </Link>
        </li>
        <li className="home__certificate__item">
          <Link to="/" className="home__certificate__link">
            Gmat
          </Link>
        </li>
        <li className="home__certificate__item">
          <Link to="/" className="home__certificate__link">
            Gre
          </Link>
        </li>
        <li className="home__certificate__item">
          <Link to="/" className="home__certificate__link">
            Sat
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Certificate;
