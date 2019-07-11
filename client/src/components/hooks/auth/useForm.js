import { useState } from 'react';

// hooks
import useSign from './useSign';
import useAuthenticate from './useAuthenticate';
import useErrorHandler from './useErrorHandle';
import useContactForm from '../contact/useContactForm';

const useForm = () => {
  const { signup, signin } = useSign();
  const { contactForm } = useContactForm();
  const { authenticate } = useAuthenticate();
  const { errorHandle } = useErrorHandler();
  const [error, setError] = useState(undefined);
  const [redirect, setRedirect] = useState(false);
  const [input, setInput] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    confirmPassword: '',
    title: '',
    question: ''
  });

  const onChange = e => {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    });
    setError({
      ...error,
      [e.target.name]: ''
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
      title,
      question
    } = errorHandle(input);

    if (e.target.name === 'signup') {
      if (!firstname && !lastname && !email && !password && !confirmPassword) {
        return signup(input)
          .then(res => {
            if (res.error) {
              setError({ serverError: res.error });
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

    if (e.target.name === 'signin') {
      if (!email && !password) {
        return signin({ email: input.email, password: input.password })
          .then(res => {
            if (res.error) {
              setError({ serverError: res.error });
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

    if (e.target.name === 'contact') {
      if (!firstname && !email && !title && !question) {
        return contactForm({
          name: input.firstname,
          email: input.email,
          title: input.title,
          question: input.question
        })
          .then(res => {
            console.log(res);
          })
          .catch(err => {
            setError(err);
            console.log(err);
          });
      } else {
        setError({ firstname, email, title, question });
      }
    }
  };

  return {
    input,
    onChange,
    onSubmit,
    error,
    redirect
  };
};

export default useForm;
