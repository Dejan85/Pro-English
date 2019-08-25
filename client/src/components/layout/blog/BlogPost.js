import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import PropType from "prop-types";
import parse from "html-react-parser";

// hooks
import useScrollIndicator from "../../hooks/global/useScrollIndicator";

const BlogPost = ({ blog, match }) => {
  const [reset] = useState(() => {
    return window.scrollTo(0, 0);
  });
  const { scrollIndicator } = useScrollIndicator();
  const [data, setData] = useState();

  useEffect(() => {
    blog &&
      blog.map((item, index) => {
        if (match.params.blogId === item._id) {
          setData(item);
        }
      });
  }, [blog, match.params.blogId]);

  return (
    <div>
      <div className="blogPost">
        {scrollIndicator()}
        {reset}
        <h1 className="blogPost__h1">{data && data.title}</h1>
        <span className="blogPost__span">
          {/* Beskrajan, plavi krug. U njemu, zvezda. */}
        </span>
        <div className="blogPost__info">
          <p className="blogPost__date">{data && data.created}</p>
          <p className="blogPost__postedBy">
            <span className="blogPost__postedBy--span">Postovala:</span>
            {data && data.postedBy}
          </p>
        </div>
        <div className="blogPost__content">
          <p className="blogPost__content__p">
            {/* <i>
              Da li je san o izobilju, boljem životu i srećnim ljudima moguće
              ostvariti samo u Americi ili svoj američki san možete da doživite
              i na suprotnoj strani Zemljine hemisfere, u čarobnoj Australiji?
            </i> */}
            {data && data.description}
          </p>
          <h2 className="blogPost__h2">
            {/* Ovaj tekst je namenjen onima koji razmišljaju o odlasku iz Srbije i
            pitaju se kuda dalje. */}
          </h2>
          <img
            className="blogPost__img"
            src={`/blog/image/${data && data._id}`}
            alt="proenglish"
          />
          {data && parse(data.body)}
        </div>
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
