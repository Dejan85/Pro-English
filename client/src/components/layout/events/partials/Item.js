import React from "react";
import PropTypes from "prop-types";

const Item = ({ data }) => {
  return (
    <div className="events__weekly__item">
      <span style={{ color: "black", fontWeight: "600" }}>
        {data && data.time}
      </span>
      <p>{data && data.title}</p>
    </div>
  );
};

Item.propTypes = {
  data: PropTypes.object
};

export default Item;

// style={{ color: "#eb2f64" }}
