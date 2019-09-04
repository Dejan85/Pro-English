import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import PropType from "prop-types";
import parse from "html-react-parser";
import moment from "moment";

// hooks
import useScrollIndicator from "../../hooks/global/useScrollIndicator";
import useLoading from "../../hooks/global/useLoading";

const BlogPost = ({ blog, match }) => {
  const [reset] = useState(() => {
    return window.scrollTo(0, 0);
  });
  const { scrollIndicator } = useScrollIndicator();
  const [data, setData] = useState();
  const { loading } = useLoading();

  useEffect(() => {
    blog &&
      blog.map(item => {
        return match.params.blogId === item._id && setData(item);
      });
  }, [blog, match.params.blogId]);

  return (
    <div>
      <div className="blogPost">
        {scrollIndicator()}
        {reset}
        {(!data && loading()) || (
          <div>
            {" "}
            <h1 className="blogPost__h1">{data && data.title}</h1>
            <div className="blogPost__info">
              <p className="blogPost__date">
                {data && moment(data.created).format("DD. MMMM YYYY.")}
              </p>
              <p className="blogPost__postedBy">
                <span className="blogPost__postedBy--span">Post: </span>
                {data && data.postedBy}
              </p>
            </div>
            <div className="blogPost__content">
              <img
                className="blogPost__img"
                src={`/blog/image/${data && data._id}`}
                alt="proenglish"
              />
              {data && parse(data.body)}
            </div>{" "}
          </div>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  const { blog } = state;
  return blog;
};

BlogPost.propType = {
  blog: PropType.object
};

export default connect(
  mapStateToProps,
  null
)(withRouter(BlogPost));
