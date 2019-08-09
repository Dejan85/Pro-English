import React, { useRef } from 'react';

// components
import DropMenu from './partials/DropMenu';
import AddBlog from './partials/blog/AddBlog';
import AddEvents from './partials/events/AddEvents';

// hooks
import usePrivateRoute from '../../hooks/auth/usePrivateRoute';
import useDropMenu from '../../hooks/auth/useDropMenu';

const Dashboard = () => {
  const { PrivateRoute } = usePrivateRoute();
  const { dropMenuHandler } = useDropMenu();
  const blogRef = useRef();
  const eventsRef = useRef();

  return (
    <div className='dashboard'>
      <div className='dashboard__header'>
        <h1 className='dashboard__h1'>ProEnglish</h1>
      </div>
      <div className='dashboard__content'>
        <div className='dashboard__nav'>
          <ul
            className='dashboard__list'
            onClick={dropMenuHandler.bind(this, blogRef)}
            ref={blogRef}
          >
            <li className='dashboard__item'>
              <div className='dashboard__icon'>
                <i className='fas fa-blog' />
                <p>Blog</p>
              </div>
              <div className='dashboard__icon'>
                <i className='fas fa-chevron-down' />
              </div>
            </li>
            <DropMenu
              add='Add Blog'
              edit='Edit Blog'
              del='Delete Blog'
              url='/admin/blog/add'
            />
          </ul>
          <ul
            className='dashboard__list'
            onClick={dropMenuHandler.bind(this, eventsRef)}
            ref={eventsRef}
          >
            <li className='dashboard__item'>
              <div className='dashboard__icon'>
                <i className='far fa-calendar-alt' />
                <p>Events</p>
              </div>
              <div className='dashboard__icon'>
                <i className='fas fa-chevron-down' />
              </div>
            </li>
            <DropMenu
              add='Add Events'
              edit='Edit Events'
              del='Delete Events'
              url='/admin/events/add'
            />
          </ul>
        </div>
        <div className='dashboard__panel'>
          <PrivateRoute exact path='/admin/blog/add' component={AddBlog} />
          <PrivateRoute exact path='/admin/events/add' component={AddEvents} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
