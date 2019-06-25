import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const BoxTwo = ({ blog, img }) => {
  const { date, heading, p } = blog;

  return (
    <div className="blog__boxTwo">
      <div className="blog__boxTwo__content">
        <span className="blog__span">{date}</span>
        <h2 className="blog__h2">{heading}</h2>
        <p className="blog__p">{p}</p>
        <Link className="blog__link" to="/">
          Procitaj sve
        </Link>
      </div>
      <img className="blog__boxTwo__img" src={img} alt="Pro-English" />
    </div>
  );
};

BoxTwo.propTypes = {
  blog: PropTypes.object,
  img: PropTypes.string,
};

export default BoxTwo;
