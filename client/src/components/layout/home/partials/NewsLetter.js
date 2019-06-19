import React from "react";

const NewsLetter = () => {
  return (
    <div className="newsLetter">
      <form className="newsLetter__form">
        <input className="newsLetter__input" placeholder="Newsletter" />
        <button className="newsLetter__btn">Prijavi se</button>
      </form>
    </div>
  );
};

export default NewsLetter;
