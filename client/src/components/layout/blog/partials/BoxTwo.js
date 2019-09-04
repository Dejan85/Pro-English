import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import moment from "moment";

const BoxTwo = ({ blog }) => {
  const { created, title, description, _id } = blog;

  return (
    <div className="blog__boxTwo">
      <div className="blog__boxTwo__content">
        <span className="blog__span">
          {blog && moment(created).format("DD. MMMM YYYY.")}
        </span>
        <h2 className="blog__h2">{title}</h2>
        <p className="blog__p">{`${description.substr(0, 400)}...`}</p>
        <Link className="blog__link" to={`/blog/${_id}`}>
          Procitaj sve
        </Link>
      </div>
      <img
        className="blog__boxTwo__img"
        src={`/blog/image/${_id}`}
        alt="Pro-English"
      />
    </div>
  );
};

BoxTwo.propTypes = {
  blog: PropTypes.object
};

export default BoxTwo;
