import React, { useState } from "react";

const useBox = () => {
  //
  // ─── BOX ────────────────────────────────────────────────────────────────────────
  //

  const [box1] = useState({
    i: <i className="fas fa-users" />,
    p: "Rad u malim grupama",
    span:
      "Predavanja vodimo u malim grupama. Zelimo da posvetimo maksimum paznje svakom u grupi.",
    color: "home__icon--box1",
  });
  const [box2] = useState({
    i: <i className="far fa-comments" />,
    p: "Aktivna upotreba",
    span:
      " Whether you stay with us for one week or one year, we will make sure you have the time of your life.",
    color: "home__icon--box2",
  });
  const [box3] = useState({
    i: <i className="fas fa-user-tie" />,
    p: "Induvidualni pristup",
    span:
      " Whether you stay with us for one week or one year, we will make sure you have the time of your life.",
    color: "home__icon--box3",
  });
  const [box4] = useState({
    i: <i className="far fa-comment-dots" />,
    p: "Prosirenje vokabulara",
    span:
      " Whether you stay with us for one week or one year, we will make sure you have the time of your life.",
    color: "home__icon--box4",
  });
  const [box5] = useState({
    i: <i className="fab fa-teamspeak" />,
    p: "Online predavanja",
    span:
      " Whether you stay with us for one week or one year, we will make sure you have the time of your life.",
    color: "home__icon--box5",
  });

  //
  // ─── CIRCLE ───────────────────────────────────────────────────────────────────────
  //

  const [circle1] = useState({
    heading: "a2",
    p:
      " This crash course in layers reveals or shows you in photoshop and create wonders in graphics industry...",
    color: "#FC424F",
  });
  const [circle2] = useState({
    heading: "b1",
    p:
      " This crash course in layers reveals or shows you in photoshop and create wonders in graphics industry...",
    color: "#59B131",
  });
  const [circle3] = useState({
    heading: "b2",
    p:
      " This crash course in layers reveals or shows you in photoshop and create wonders in graphics industry...",
    color: "#018CE1",
  });

  const boxes = () => {
    return { box1, box2, box3, box4, box5 };
  };

  const circle = () => {
    return { circle1, circle2, circle3 };
  };

  return { boxes, circle };
};

export default useBox;
