import React, { useState } from "react";

// Components
import Map from "./paritals/Map";

const Contact = () => {
  const [reset] = useState(() => {
    return window.scrollTo(0, 0);
  });
  return (
    <div className="contact">
      {reset}
      <div className="contact__map">
        <Map />
      </div>
      <div className="contact__content">
        <h1 className="contact__h1">Kontakt</h1>
        <span className="contact__span">
          Pisite nam o svemu sto vas interesuje, tu smo da odgovorimo na svako
          vase pitanje.
        </span>
        <div className="contact__form">
          <form>
            <div className="contact__input">
              <label>Ime</label>
              <input />
            </div>
            <div className="contact__input">
              <label>Email</label>
              <input />
            </div>
            <div className="contact__input">
              <label>Tema</label>
              <input />
            </div>
            <div className="contact__input">
              <label>Pitanje</label>
              <textarea rows="7" />
            </div>
            <div className="contact__input">
              <button>Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

// https://www.youtube.com/watch?v=Pf7g32CwX_s
