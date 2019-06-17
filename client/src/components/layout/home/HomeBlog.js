import React from "react";

// components
import BlogBox from "./BlogBox";

// images
import slika from "../../../sass/images/30.jpg";
import slika2 from "../../../sass/images/31.jpg";
import slika3 from "../../../sass/images/33.jpg";
import slika4 from "../../../sass/images/34.jpg";

const HomeBlog = () => {
  return (
    <div className="homeBlog">
      <h3 className="homeBlog__h3">Blog</h3>
      <div className="homeBlog__line" />
      <div className="homeBlog__content">
        <BlogBox slika={slika} />
        <BlogBox slika={slika2} />
        <BlogBox slika={slika3} />
        <BlogBox slika={slika4} />
      </div>
    </div>
  );
};

export default HomeBlog;
