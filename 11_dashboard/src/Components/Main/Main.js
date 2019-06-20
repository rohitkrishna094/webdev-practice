import React from 'react';
import Navbar from '../Navbar/Navbar';
import Dashboard from '../Dashboard/Dashboard';
import './Main.css';

function Main() {
  return (
    <div className="main">
      <Navbar />
      <Dashboard />
    </div>
  );
}

export default Main;
