import React from "react";
import PropTypes from "prop-types";

// component
import Item from "./Item";

const Weekly = () => {
  return (
    <div className="events__weekly">
      <div className="events__weekly--day">
        <ul className="events__weekly--list">
          <li className="events__weekly--item">Pon 19.</li>
          <li className="events__weekly--item">Uto 20.</li>
          <li className="events__weekly--item">Sre 21.</li>
          <li className="events__weekly--item">Cet 22.</li>
          <li className="events__weekly--item">Pet 23.</li>
          <li className="events__weekly--item">Sub 24.</li>
          <li className="events__weekly--item">Ned 25.</li>
        </ul>
        <ul className="events__weekly--list2">
          <li className="events__weekly--item2">
            <Item />
            <Item />
            <Item />
            <Item />

            <Item />
          </li>
          <li className="events__weekly--item2">
            <Item />
          </li>
          <li className="events__weekly--item2">
            <Item />
            <Item />
          </li>
          <li className="events__weekly--item2">
            <Item />
            <Item />
            <Item />
          </li>
          <li className="events__weekly--item2">
            <Item />
          </li>
          <li className="events__weekly--item2">
            <Item />
            <Item />
          </li>
          <li className="events__weekly--item2">
            <Item />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Weekly;
