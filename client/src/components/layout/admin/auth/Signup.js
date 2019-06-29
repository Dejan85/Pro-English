import React from "react";

const Signup = () => {
  return (
    <div className="sign">
      <h1 className="sign__h1">Registracija</h1>
      <div className="sign__form">
        <form>
          <div className="sign__inputHolder">
            <label className="sign__label">Name</label>
            <input className="sign__input" />
          </div>
          <div className="sign__inputHolder">
            <label className="sign__label">Prezime</label>
            <input className="sign__input" />
          </div>
          <div className="sign__inputHolder">
            <label className="sign__label">Email</label>
            <input className="sign__input" />
          </div>
          <div className="sign__inputHolder">
            <label className="sign__label">Password</label>
            <input className="sign__input" />
          </div>
          <div className="sign__inputHolder">
            <label className="sign__label">Confirm Password</label>
            <input className="sign__input" />
          </div>
          <div className="sign__btnHolder">
            <button className="sign__btn">Registruj se</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
