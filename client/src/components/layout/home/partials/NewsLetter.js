import React from "react";
// import { Link } from 'react-router-dom';

// hooks
import useForm from "../../../hooks/auth/useForm";

const NewsLetter = () => {
  const { input, error, onChange, onSubmit } = useForm();

  return (
    <div className="newsLetter">
      <form className="newsLetter__form" name="newsletter" onSubmit={onSubmit}>
        {/* <form
        action='https://gmail.us3.list-manage.com/subscribe/post?u=1207ce3d9152cbfaa7a9c00b6&amp;id=7bbffb3ecc'
        method='post'
        id='mc-embedded-subscribe-form'
        name='mc-embedded-subscribe-form'
        className='validate'
        target='_blank'
        noValidate
      > */}
        <input
          className="newsLetter__input"
          placeholder="Uzmite svoju dozu znanja..."
          name="email"
          type="email"
          value={input.email}
          onChange={onChange}
        />
        {error && (
          <div className="sign__error">{error.email || error.serverError}</div>
        )}
        <button className="newsLetter__btn" to="">
          Prijavi se
        </button>
      </form>
    </div>
  );
};

export default NewsLetter;
