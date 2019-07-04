import React from "react";

// components
import BlogBox from "./partials/BlogBox";
import NewLetter from "./partials/NewsLetter";

// images
import slika from "../../../sass/images/30.jpg";
import slika2 from "../../../sass/images/31.jpg";
import slika3 from "../../../sass/images/33.jpg";
import slika4 from "../../../sass/images/34.jpg";
import kengur from "../../../sass/images/kengur.jpg";

const HomeBlog = () => {
  return (
    <div className="homeBlog">
      <h3 className="homeBlog__h3">Blog</h3>
      <div className="homeBlog__line" />
      <div className="homeBlog__content">
        <BlogBox slika={kengur} />
        <BlogBox slika={slika2} />
        <BlogBox slika={slika3} />
        <BlogBox slika={slika4} />
        <div className="homeBlog__newsletter">
          <NewLetter />
        </div>
      </div>
    </div>
  );
};

export default HomeBlog;
