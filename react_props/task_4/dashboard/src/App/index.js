import React from 'react';
import PropTypes from 'prop-types';
import './App.css';
import Header from '../Header';
import Login from '../Login';
import Footer from '../Footer';
import Notifications from '../Notifications';
import CourseList from '../CourseList';

function App({ isLoggedIn = false }) {
  return (
    <>
      <Notifications displayDrawer={false} />
      <div className="App">
        <Header />
        {isLoggedIn ? <CourseList /> : <Login />}
        <Footer />
      </div>
    </>
  );
}

App.propTypes = {
  isLoggedIn: PropTypes.bool,
};

export default App;