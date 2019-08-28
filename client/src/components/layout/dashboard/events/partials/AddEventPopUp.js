import React from "react";
import PropTypes from "prop-types";

const AddEventPopUp = ({ popupHandler }) => {
  return (
    <div className="addEvents__popup">
      <div className="addEvents__form">
        <div className="addEvents__form--header">
          <p className="addEvents__form--heading">Add new event</p>
          <i
            className="fas fa-times addEvents__form--icon "
            onClick={popupHandler}
          />
        </div>
        <div className="addEvents__form--inputHolder">
          <label className="addEvents__form--label">Title</label>
          <input className="addEvents__form--input" name="title" type="text" />
        </div>
        <div className="addEvents__form--inputHolder">
          <label className="addEvents__form--label">Time</label>
          <input
            className="addEvents__form--input"
            name="description"
            type="text"
          />
        </div>
        <div className="addEvents__form--inputHolder">
          <label className="addEvents__form--label">Description</label>
          <textarea
            className="addEvents__form--textarea"
            name="description"
            type="text"
            rows="6"
          />
        </div>
        <div className="addEvents__form--btnHolder">
          <button className="addEvents__form--btn" type="submit">
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

AddEventPopUp.propTypes = {
  popupHandler: PropTypes.func
};

export default AddEventPopUp;
