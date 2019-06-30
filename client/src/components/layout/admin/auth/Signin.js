import React from "react";

// hooks
import useForm from "../../../hooks/auth/useForm";

const Signin = () => {
  const { input, error, onChange, onSubmit } = useForm();

  console.log(error);
  return (
    <div className="sign">
      <h1 className="sign__h1">Login</h1>
      <div className="sign__form">
        <form onSubmit={onSubmit} name="signin">
          <div className="sign__inputHolder">
            {error && error.email}
            <label className="sign__label">Email</label>
            <input
              className="sign__input"
              name="email"
              type="email"
              value={input.email}
              onChange={onChange}
            />
          </div>

          <div className="sign__inputHolder">
            {error && error.password}
            <label className="sign__label">Password</label>
            <input
              className="sign__input"
              name="password"
              type="password"
              value={input.password}
              onChange={onChange}
            />
          </div>

          <div className="sign__btnHolder">
            <button type="submit" className="sign__btn">
              Uloguj se
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signin;
