import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

// hooks
import useForm from '../../../../hooks/auth/useForm';

const Event = ({ eventData, eventHandler }) => {
  const { onChange, onSubmit, input, getEventData } = useForm();

  let hour = [];
  let min = [];

  for (let i = 0; i <= 24; i++) {
    if (i <= 9) {
      hour.push('0' + i);
    } else {
      hour.push(i);
    }
  }

  for (let i = 0; i <= 60; i++) {
    if (i <= 9) {
      min.push('0' + i);
    } else {
      min.push(i);
    }
  }

  useEffect(
    () => {
      return getEventData(eventData);
    },
    [eventData]
  );

  return (
    <form onSubmit={onSubmit} name='addEvent'>
      <div className='addEvents__event'>
        <div className='addEvents__event--inputHolder'>
          <select onChange={onChange} name='timeFromOne'>
            {hour.map((item, index) => {
              return (
                <option key={index} value={item}>
                  {item}
                </option>
              );
            })}
          </select>
          :
          <select name='timeToOne' onChange={onChange}>
            {min.map((item, index) => {
              return (
                <option key={index} value={item}>
                  {item}
                </option>
              );
            })}
          </select>
        </div>
        <div className='addEvents__event--inputHolder'>
          <select onChange={onChange} name='timeFromTwo'>
            {hour.map((item, index) => {
              return (
                <option key={index} value={item}>
                  {item}
                </option>
              );
            })}
          </select>
          :
          <select onChange={onChange} name='timeToTwo'>
            {min.map((item, index) => {
              return (
                <option key={index} value={item}>
                  {item}
                </option>
              );
            })}
          </select>
        </div>

        <div className='addEvents__event--inputHolder'>
          <input
            name='eventDescription'
            onChange={onChange}
            value={input.eventDescription}
          />
        </div>
        <div className='addEvents__event--inputHolder'>
          <button type='submit' onClick={eventHandler}>
            Submit
          </button>
        </div>
      </div>
    </form>
  );
};

Event.propTypes = {
  eventData: PropTypes.object,
  onChange: PropTypes.func,
  onSubmit: PropTypes.func,
  input: PropTypes.object,
  eventHandler: PropTypes.func
};

export default Event;
