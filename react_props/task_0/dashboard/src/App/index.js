import React from 'react';
import './App.css';
import Header from '../Header';
import Login from '../Login';
import Footer from '../Footer';
import Notifications from '../Notifications';

function App() {
  return (
    <>
      <Notifications />
      <div className="App">
        <Header />
        <Login />
        <Footer />
      </div>
    </>
  );
}

export default App;