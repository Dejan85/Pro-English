import React from "react";
import { Link } from "react-router-dom";

const BlogBox = ({ slika }) => {
  return (
    <div className="homeBlog__blogBox">
      <img className="homeBlog__img" alt="pro english" src={slika} />
      <Link className="homeBlog__link" to="/">
        Learn the language of love, morbi venenatis lacinia
      </Link>
      <p className="homeBlog__p">
        Education is the process of facilitating learning. Knowledge, skills,
        values, beliefs, and habits of a. Education is the process of
        facilitating learning. Knowledge, skills, values, beliefs, and habits of
        a…
      </p>
      <div className="homeBlog__line2" />
      <span className="homeBlog__span">17. 06. 2019.</span>
      <p className="homeBlog__p2">
        by <span>Branka</span>
      </p>
    </div>
  );
};

export default BlogBox;
