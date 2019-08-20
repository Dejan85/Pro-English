import { useState, useRef } from "react";

const useNavHandler = () => {
  const blogRef = useRef();
  const eventsRef = useRef();
  const blogIconRef = useRef();
  const eventsIconRef = useRef();
  const [ativeContent, setActiveContent] = useState({});

  const navDropHandler = e => {
    if (e.target.getAttribute("data-name") === "blog") {
      blogRef.current.style.height === "7.9rem"
        ? (blogRef.current.style.height = "0px")
        : (blogRef.current.style.height = "7.9rem");
      blogIconRef.current.style.transform === "rotate(90deg)"
        ? (blogIconRef.current.style.transform = "rotate(0deg)")
        : (blogIconRef.current.style.transform = "rotate(90deg)");
    } else if (e.target.getAttribute("data-name") === "events") {
      eventsRef.current.style.height === "11.7rem"
        ? (eventsRef.current.style.height = "0px")
        : (eventsRef.current.style.height = "11.7rem");
      eventsIconRef.current.style.transform === "rotate(90deg)"
        ? (eventsIconRef.current.style.transform = "rotate(0deg)")
        : (eventsIconRef.current.style.transform = "rotate(90deg)");
    }
  };

  const navHandler = (e) => {
    if (e === 'editBlog') {
      setActiveContent({
        editBlog: true
      });
    } else {
      setActiveContent({
        [e.target.getAttribute("data-name")]: true
      });
    }

  };

  return {
    navDropHandler,
    navHandler,
    blogRef,
    eventsRef,
    blogIconRef,
    eventsIconRef,
    ativeContent,
    setActiveContent
  };
};

export default useNavHandler;
