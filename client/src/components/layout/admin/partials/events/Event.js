import React, { useState } from 'react';
// import Select from 'react-select';

// hooks
import useForm from '../../../../hooks/auth/useForm';

const Event = () => {
  const { onChange, onSubmit, input } = useForm();

  let hour = [];
  let min = [];

  for (let i = 0; i <= 24; i++) {
    if (i <= 9) {
      //   hour.push({ label: '0' + i });
      hour.push('0' + i);
    } else {
      //   hour.push({ label: i });
      hour.push(i);
    }
  }

  for (let i = 0; i <= 60; i++) {
    if (i <= 9) {
      //   min.push({ label: '0' + i });
      min.push('0' + i);
    } else {
      //   min.push({ label: i });
      min.push(i);
    }
  }

  // console.log(hour);

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
          <input name='event' onChange={onChange} value={input.event} />
        </div>
        <div className='addEvents__event--inputHolder'>
          <button type='submit'>Submit</button>
        </div>
      </div>
    </form>
  );
};

export default Event;
