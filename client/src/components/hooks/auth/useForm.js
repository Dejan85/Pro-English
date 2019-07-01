import { useState } from "react";

// hooks
import useSign from "./useSign";
import useAuthenticate from "./useAuthenticate";
import useErrorHandler from "./useErrorHandle";

const useForm = () => {
  const { signup, signin } = useSign();
  const { authenticate } = useAuthenticate();
  const { errorHandle } = useErrorHandler();
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
    const {
      firstname,
      lastname,
      email,
      password,
      confirmPassword,
    } = errorHandle(input);

    if (e.target.name === "signup") {
      if (!firstname && !lastname && !email && !password && !confirmPassword) {
        return signup(input)
          .then(res => {
            if (res.error) {
              setError({ taken: res.error });
            } else {
              setRedirect(true);
            }
          })
          .catch(err => {
            console.log(err);
          });
      } else {
        setError({ firstname, lastname, email, password, confirmPassword });
      }
    }

    if (e.target.name === "signin") {
      if (!email && !password) {
        return signin({ email: input.email, password: input.password })
          .then(res => {
            if (res.error) {
              setError(res.error);
            } else {
              authenticate(res);
              setRedirect(true);
            }
          })
          .catch(err => {
            setError(err);
            console.log(err);
          });
      } else {
        setError({ email, password });
      }
    }
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
