import { useState } from "react";

// hooks
import useSign from "./useSign";
import useAuthenticate from "./useAuthenticate";
import useErrorHandler from "./useErrorHandle";
import useContactForm from "../contact/useContactForm";
import useFetchNewsletter from "../home/useFetchNewsletter";

const useForm = () => {
  const { signup, signin } = useSign();
  const { contactForm } = useContactForm();
  const { authenticate } = useAuthenticate();
  const { errorHandle } = useErrorHandler();
  const { fetchNewsletter } = useFetchNewsletter();
  const [error, setError] = useState(undefined);
  const [redirect, setRedirect] = useState(false);
  const [input, setInput] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: "",
    title: "",
    question: "",
    timeFromOne: "",
    timeToOne: "00",
    timeFromTwo: "",
    timeToTwo: "00",
    eventDescription: "",
    file: ""
  });
  const [date, setDate] = useState();

  const onChange = e => {
    setInput({
      ...input,
      [e.target.name]: e.target.files[0] ? e.target.files[0] : e.target.value
    });

    setError({
      ...error,
      [e.target.name]: ""
    });
  };

  const getEventData = date => {
    setDate(date);
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
      // timeFromOne,
      // timeToOne,
      // timeFromTwo,
      // timeToTwo,
      // event
    } = errorHandle(input);

    if (e.target.name === "signup") {
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

    if (e.target.name === "signin") {
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

    if (e.target.name === "contact") {
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

    if (e.target.name === "newsletter") {
      if (!email) {
        return fetchNewsletter({
          email: input.email
        });
        // .then(res => {
        //   console.log(res);
        // })
        // .catch(err => {
        //   setError(err);
        //   console.log(err);
        // });
      } else {
        setError({ email });
      }
    }

    if ((e.target.name = "addEvents")) {
      const data = {
        time: `${input.timeFromOne +
          " : " +
          input.timeToOne} - ${input.timeFromTwo + " : " + input.timeToTwo}`,
        description: input.eventDescription,
        date
      };

      console.log(data.time);
      console.log(data.description);
      console.log(data.date);
    }
  };

  return {
    input,
    onChange,
    onSubmit,
    error,
    redirect,
    getEventData
  };
};

export default useForm;
