import { useState, useRef } from "react";

const useNavHandler = () => {
    const blogRef = useRef();
    const eventsRef = useRef();
    const blogIconRef = useRef();
    const eventsIconRef = useRef();

    const navHandler = (e) => {
        if (e.target.getAttribute('data-name') === "blog") {
            blogRef.current.style.height === "12rem" ? blogRef.current.style.height = "0px" : blogRef.current.style.height = "12rem";
            blogIconRef.current.style.transform === "rotate(90deg)" ? blogIconRef.current.style.transform = "rotate(0deg)" : blogIconRef.current.style.transform = "rotate(90deg)";
        } else if (e.target.getAttribute('data-name') === "events") {
            eventsRef.current.style.height === "12rem" ? eventsRef.current.style.height = "0px" : eventsRef.current.style.height = "12rem";
            eventsIconRef.current.style.transform === "rotate(90deg)" ? eventsIconRef.current.style.transform = "rotate(0deg)" : eventsIconRef.current.style.transform = "rotate(90deg)";
        }
    }

    return {
        navHandler,
        blogRef,
        eventsRef,
        blogIconRef,
        eventsIconRef
    }
}



export default useNavHandler;
