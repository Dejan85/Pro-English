import React from "react";
import PropTypes from "prop-types";

const AddEventPopUp = ({
  popupHandler,
  input,
  setInput,
  change,
  date,
  addEvent,
  updateEvent,
  name
}) => {
  const { title, time, description } = input;

  const onSubmitHandler = e => {
    e.preventDefault();
    popupHandler();
    setInput({
      ...input,
      title: "",
      time: "",
      description: ""
    });
    const data = {
      title: input.title,
      time: input.time,
      description: input.description,
      date
    };
    addEvent(data);
  };

  const onSubmitHandlerUpdate = e => {
    e.preventDefault();
    popupHandler();
    setInput({
      ...input,
      title: "",
      time: "",
      description: ""
    });
    const data = {
      title: input.title,
      time: input.time,
      description: input.description,
      date
    };
    updateEvent(data, input.id);
  };

  return (
    <form
      onSubmit={name === "addEvent" ? onSubmitHandler : onSubmitHandlerUpdate}
    >
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
            <input
              className="addEvents__form--input"
              name="title"
              type="text"
              value={title}
              onChange={change}
            />
          </div>
          <div className="addEvents__form--inputHolder">
            <label className="addEvents__form--label">Time</label>
            <input
              className="addEvents__form--input"
              name="time"
              type="text"
              value={time}
              onChange={change}
            />
          </div>
          <div className="addEvents__form--inputHolder">
            <label className="addEvents__form--label">Description</label>
            <textarea
              className="addEvents__form--textarea"
              name="description"
              type="text"
              rows="6"
              value={description}
              onChange={change}
            />
          </div>
          <div className="addEvents__form--btnHolder">
            <button className="addEvents__form--btn" type="submit">
              Save
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

AddEventPopUp.propTypes = {
  popupHandler: PropTypes.func,
  input: PropTypes.object,
  setInput: PropTypes.func,
  change: PropTypes.func,
  date: PropTypes.string,
  addEvent: PropTypes.func,
  updateEvent: PropTypes.func,
  name: PropTypes.string
};

export default AddEventPopUp;
