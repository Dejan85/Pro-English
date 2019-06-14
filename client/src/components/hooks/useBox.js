import React, { useState } from "react";

const useBox = () => {
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

  const boxes = () => {
    return { box1, box2, box3, box4, box5 };
  };

  return { boxes };
};

export default useBox;
