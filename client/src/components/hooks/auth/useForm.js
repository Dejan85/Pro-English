import React, { useState } from "react";

// hooks
import useSign from "./useSign";
import useAuthenticate from "./useAuthenticate";

const useForm = () => {
  const { signup, signin } = useSign();
  const { authenticate } = useAuthenticate();
  const [error, setError] = useState(undefined);
  const [redirect, setRedirect] = useState(false);
  const [input, setInput] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const onChange = e => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = e => {
    e && e.preventDefault();

    if (e.target.name === "signup")
      return signup(input)
        .then(res => {
          (res.error && setError(res.error)) || setRedirect(true);
        })
        .catch(err => {
          console.log(err);
        });

    if (e.target.name === "signin")
      return signin({ email: input.email, password: input.password })
        .then(res => {
          authenticate(res);
          res.error && setError(res.error);
        })
        .catch(err => {
          setError(err);
          console.log(err);
        });
  };

  return {
    input,
    onChange,
    onSubmit,
    error,
    redirect,
  };
};

export default useForm;
