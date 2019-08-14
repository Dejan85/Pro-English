import React, { useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

// component
import BoxOne from "../blog/partials/BoxOne";
import BoxTwo from "../blog/partials/BoxTwo";

//images
import slika from "../../../images/blog1.jpg";
import slika2 from "../../../images/blog2.jpg";
import slika3 from "../../../images/blog3.jpg";
import slika4 from "../../../images/blog4.jpg";

//Redux
import { fetchBlog } from "../../../redux/actions/fetchBlog";

const Blog = ({ fetchBlog }) => {
  const [reset] = useState(() => {
    return window.scrollTo(0, 0);
  });
  const [blog] = useState({
    blog1: {
      date: "25. Jun 2019",
      heading: "Da li je Australija nova obećana zemlja?",
      p:
        "Beskrajan, plavi krug. U njemu, zvezda. Da li je san o izobilju, boljem životu i srećnim ljudima moguće ostvariti samo u Americi ili svoj američki san možete da doživite i na suprotnoj strani Zemljine hemisfere, u čarobnoj Australiji?  Beskrajan, plavi krug. U njemu, zvezda. Da li je san o izobilju, boljem životu i srećnim ljudima moguće ostvariti samo u Americi ili svoj američki san možete da doživite i na suprotnoj strani Zemljine hemisfere, u čarobnoj Australiji?"
    },
    blog2: {
      date: "25. Jun 2019",
      heading: "Da li je Australija nova obećana zemlja?",
      p:
        "Beskrajan, plavi krug. U njemu, zvezda. Da li je san o izobilju, boljem životu i srećnim ljudima moguće ostvariti samo u Americi ili svoj američki san možete da doživite i na suprotnoj strani Zemljine hemisfere, u čarobnoj Australiji?  Beskrajan, plavi krug. U njemu, zvezda. Da li je san o izobilju, boljem životu i srećnim ljudima moguće ostvariti samo u Americi ili svoj američki san možete da doživite i na suprotnoj strani Zemljine hemisfere, u čarobnoj Australiji?"
    },
    blog3: {
      date: "25. Jun 2019",
      heading: "Da li je Australija nova obećana zemlja?",
      p:
        "Beskrajan, plavi krug. U njemu, zvezda. Da li je san o izobilju, boljem životu i srećnim ljudima moguće ostvariti samo u Americi ili svoj američki san možete da doživite i na suprotnoj strani Zemljine hemisfere, u čarobnoj Australiji?  Beskrajan, plavi krug. U njemu, zvezda. Da li je san o izobilju, boljem životu i srećnim ljudima moguće ostvariti samo u Americi ili svoj američki san možete da doživite i na suprotnoj strani Zemljine hemisfere, u čarobnoj Australiji?"
    },
    blog4: {
      date: "25. Jun 2019",
      heading: "Da li je Australija nova obećana zemlja?",
      p:
        "Beskrajan, plavi krug. U njemu, zvezda. Da li je san o izobilju, boljem životu i srećnim ljudima moguće ostvariti samo u Americi ili svoj američki san možete da doživite i na suprotnoj strani Zemljine hemisfere, u čarobnoj Australiji?  Beskrajan, plavi krug. U njemu, zvezda. Da li je san o izobilju, boljem životu i srećnim ljudima moguće ostvariti samo u Americi ili svoj američki san možete da doživite i na suprotnoj strani Zemljine hemisfere, u čarobnoj Australiji?"
    }
  });
  console.log("blog rendering");
  fetchBlog();
  return (
    <div className="blog">
      {reset}
      <h3 className="blog__h3">Blog</h3>
      <div className="blog__line" />
      <div className="blog__content">
        <BoxOne img={slika} blog={blog.blog1} />
        <BoxTwo img={slika2} blog={blog.blog2} />
        <BoxOne img={slika3} blog={blog.blog3} />
        <BoxTwo img={slika4} blog={blog.blog4} />
      </div>
    </div>
  );
};

Blog.propTypes = {
  fetchBlog: PropTypes.func
};

export default connect(
  null,
  { fetchBlog }
)(Blog);
