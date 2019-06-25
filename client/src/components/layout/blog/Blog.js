import React, { useState } from "react";

// component
import BoxOne from "../blog/partials/BoxOne";
import BoxTwo from "../blog/partials/BoxTwo";

//images
import slika from "../../../sass/images/blog1.jpg";
import slika2 from "../../../sass/images/blog2.jpg";
import slika3 from "../../../sass/images/blog3.jpg";
import slika4 from "../../../sass/images/blog4.jpg";

const Blog = () => {
  const [blog] = useState({
    blog1: {
      date: "25. Jun 2019",
      heading: "Da li je Australija nova obećana zemlja?",
      p:
        "Beskrajan, plavi krug. U njemu, zvezda. Da li je san o izobilju, boljem životu i srećnim ljudima moguće ostvariti samo u Americi ili svoj američki san možete da doživite i na suprotnoj strani Zemljine hemisfere, u čarobnoj Australiji?  Beskrajan, plavi krug. U njemu, zvezda. Da li je san o izobilju, boljem životu i srećnim ljudima moguće ostvariti samo u Americi ili svoj američki san možete da doživite i na suprotnoj strani Zemljine hemisfere, u čarobnoj Australiji?",
    },
    blog2: {
      date: "25. Jun 2019",
      heading: "Da li je Australija nova obećana zemlja?",
      p:
        "Beskrajan, plavi krug. U njemu, zvezda. Da li je san o izobilju, boljem životu i srećnim ljudima moguće ostvariti samo u Americi ili svoj američki san možete da doživite i na suprotnoj strani Zemljine hemisfere, u čarobnoj Australiji?  Beskrajan, plavi krug. U njemu, zvezda. Da li je san o izobilju, boljem životu i srećnim ljudima moguće ostvariti samo u Americi ili svoj američki san možete da doživite i na suprotnoj strani Zemljine hemisfere, u čarobnoj Australiji?",
    },
    blog3: {
      date: "25. Jun 2019",
      heading: "Da li je Australija nova obećana zemlja?",
      p:
        "Beskrajan, plavi krug. U njemu, zvezda. Da li je san o izobilju, boljem životu i srećnim ljudima moguće ostvariti samo u Americi ili svoj američki san možete da doživite i na suprotnoj strani Zemljine hemisfere, u čarobnoj Australiji?  Beskrajan, plavi krug. U njemu, zvezda. Da li je san o izobilju, boljem životu i srećnim ljudima moguće ostvariti samo u Americi ili svoj američki san možete da doživite i na suprotnoj strani Zemljine hemisfere, u čarobnoj Australiji?",
    },
    blog4: {
      date: "25. Jun 2019",
      heading: "Da li je Australija nova obećana zemlja?",
      p:
        "Beskrajan, plavi krug. U njemu, zvezda. Da li je san o izobilju, boljem životu i srećnim ljudima moguće ostvariti samo u Americi ili svoj američki san možete da doživite i na suprotnoj strani Zemljine hemisfere, u čarobnoj Australiji?  Beskrajan, plavi krug. U njemu, zvezda. Da li je san o izobilju, boljem životu i srećnim ljudima moguće ostvariti samo u Americi ili svoj američki san možete da doživite i na suprotnoj strani Zemljine hemisfere, u čarobnoj Australiji?",
    },
  });
  return (
    <div className="blog">
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

export default Blog;
