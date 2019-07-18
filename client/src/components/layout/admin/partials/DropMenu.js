import React from 'react';
import { Link } from 'react-router-dom';

const DropMenu = ({ add, edit, del, url }) => {
  return (
    <ul className='dashboard__dropMenu'>
      <li className='dashboard__dropMenuItem'>
        <Link to={url} className='dashboard__dropMenuLink'>
          {add}
        </Link>
        <Link to='/admin' className='dashboard__dropMenuLink'>
          {edit}
        </Link>
        <Link to='/admin' className='dashboard__dropMenuLink'>
          {del}
        </Link>
      </li>
    </ul>
  );
};

export default DropMenu;
