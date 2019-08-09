import React from 'react';
import { Route, Switch } from 'react-router-dom';

 //
 // ─── COMPONENTS ─────────────────────────────────────────────────────────────────
 //

 // public
import Header from './components/layout/header/Header';
import Home from './components/layout/home/Home';
import Footer from './components/layout/footer/Footer';
import About from './components/layout/about/About';
import Course from './components/layout/course/Course';
import Exams from './components/layout/exams/Exams';
import Blog from './components/layout/blog/Blog';
import BlogPost from './components/layout/blog/BlogPost';
import Events from './components/layout/events/Events';
import SingleEvent from './components/layout/events/SingleEvent';
import Contact from './components/layout/contact/Contact';

// admin
import Dashboard from './components/layout/admin/Dashboard';


// hooks
import usePrivateRoute from './components/hooks/auth/usePrivateRoute';


const MainRouter = () => {
  const {PrivateRoute} = usePrivateRoute();
  return (
    <>
  {window.location.pathname !== "/dashboard" && <Header/>}
    {console.log(window.location.pathname)}
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/onama' component={About} />
      <Route exact path='/kursevi' component={Course} />
      <Route exact path='/ispiti' component={Exams} />
      <Route exact path='/blog' component={Blog} />
      <Route exact path='/singleBlog' component={BlogPost} />
      <Route exact path='/dogadjaji' component={Events} />
      <Route exact path='/dogadjaji/one' component={SingleEvent} />
      <Route exact path='/kontakt' component={Contact} />

        {/* admin */}
      <Route exact path='/dashboard' component={Dashboard}  />
    </Switch>
    {window.location.pathname !== "/dashboard" && <Footer/>}
    </>
  );
};

export default MainRouter;
