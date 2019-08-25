import { useRef } from "react";

const useTabs = () => {
  const gre = useRef();
  const ielts = useRef();
  const gmat = useRef();
  const sat = useRef();
  const teofl = useRef();
  const bocconi = useRef();

  const tabs = e => {
    if (e.target.getAttribute("data-name") === "gre") {
      gre.current.style.setProperty("--width", "82%");
      ielts.current.style.setProperty("--width", "87%");
      gmat.current.style.setProperty("--width", "92%");
    } else if (e.target.getAttribute("data-name") === "ielts") {
      gre.current.style.setProperty("--width", "1%");
      ielts.current.style.setProperty("--width", "87%");
      gmat.current.style.setProperty("--width", "92%");
    } else if (e.target.getAttribute("data-name") === "gmat") {
      gre.current.style.setProperty("--width", "1%");
      ielts.current.style.setProperty("--width", "1%");
      gmat.current.style.setProperty("--width", "92%");
    } else if (e.target.getAttribute("data-name") === "bocconi") {
      gre.current.style.setProperty("--width", "1%");
      ielts.current.style.setProperty("--width", "1%");
      gmat.current.style.setProperty("--width", "1%");
    } else if (e.target.getAttribute("data-name") === "sat") {
      gre.current.style.setProperty("--width", "1%");
      ielts.current.style.setProperty("--width", "1%");
      gmat.current.style.setProperty("--width", "1%");
      sat.current.style.setProperty("--width", "1%");
    } else if (e.target.getAttribute("data-name") === "teofl") {
      gre.current.style.setProperty("--width", "1%");
      ielts.current.style.setProperty("--width", "1%");
      gmat.current.style.setProperty("--width", "1%");
      teofl.current.style.setProperty("--width", "1%");
    }
  };

  return {
    tabs,
    gre,
    ielts,
    gmat,
    bocconi,
    sat,
    teofl
  };
};

export default useTabs;
