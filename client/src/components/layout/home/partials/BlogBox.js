import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";

const BlogBox = ({ item }) => {
  return (
    <div className="homeBlog__blogBox">
      <img
        className="homeBlog__img"
        alt="pro english"
        src={`/blog/image/${item._id}`}
      />
      <div className="homeBlog__content2">
        <Link className="homeBlog__link" to={`/blog/${item._id}`}>
          {item.title}
        </Link>
        <p className="homeBlog__p">{`${item.description.substr(0, 170)}...`}</p>
        <div className="homeBlog__line2" />
        <span className="homeBlog__span">
          {moment(item.created).format("DD. MMMM YYYY.")}
        </span>
        <p className="homeBlog__p2">
          by <span>{item.postedBy}</span>
        </p>
      </div>
    </div>
  );
};

export default BlogBox;
