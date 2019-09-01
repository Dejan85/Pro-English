import React from "react";
// import { Link } from "react-router-dom";
import PropTypes from "prop-types";

// components

const Event = ({ item }) => {
  console.log(item);
  return (
    <div className="event">
      <div className="event__content">
        <div className="event__date">
          <div className="event__date--num">{item.date.split(" ")[0]}</div>
          <div className="event__date--mounth">{item.date.split(" ")[1]}</div>
        </div>
        <h2 className="event__h2">
          {item.title}
          <span className="event__span">
            <i className="far fa-clock" />
            {`${item.date.split(" ")[0]}. ${item.date.split(" ")[1]} ${
              item.date.split(" ")[2]
            }. ${item.time}`}
          </span>
          <p className="event__p">{item.description}</p>
        </h2>

        {/* <p className="event__p">{item.description}</p> */}
        {/* <Link to="/dogadjaji/one" className="event__link">
          Procitaj sve
        </Link> */}
      </div>
    </div>
  );
};

Event.propTypes = {
  item: PropTypes.object
};

export default Event;
