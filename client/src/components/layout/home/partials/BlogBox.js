import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const BlogBox = ({ slika }) => {
  const [text] = useState({
    p: ` Početak dvadesetog veka su obeležila velika pomeranja evropskih naroda
    u Ameriku: nekadašnja britanska kolonija otvorila je tada vrata
    hiljadama ljudi - čak 9% stanovništva Norveške je pošlo put Amerike u
    kojoj u ovom trenutku živi 40 miliona stranaca. Na čuveno ostrvo Elis
    sa još poznatijim Kipom slobode (Lady Liberty), pravo na njujorško tle
    su se iskrcali čuveni bezdomnici - u stvari raseljena lica i
    kosmopolite - poput Alberta Ajnštajna (iz Austrije), Levija Štrausa
    (iz Nemačke, tvorac čuvenih levis farmerki),Vladimira Nabokova (iz
    Rusije),`,
  });

  const [text2, setText2] = useState();

  useEffect(() => {
    if (window.screen.availWidth > 980) {
      setText2(() => {
        return text.p.substr(0, 170);
      });
    } else {
      setText2(() => {
        return text.p.substr(0, 590);
      });
    }
  }, [text.p]);

  return (
    <div className="homeBlog__blogBox">
      <img className="homeBlog__img" alt="pro english" src={slika} />
      <div className="homeBlog__content2">
        <Link className="homeBlog__link" to="/">
          DA LI JE AUSTRALIJA NOVA OBEĆANA ZEMLJA?
        </Link>
        <p className="homeBlog__p">{text2}</p>
        <div className="homeBlog__line2" />
        <span className="homeBlog__span">17. 06. 2019.</span>
        <p className="homeBlog__p2">
          by <span>Branka</span>
        </p>
      </div>
    </div>
  );
};

export default BlogBox;
