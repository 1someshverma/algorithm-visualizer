import React from 'react';
import Navbar from '../pathfinderComponents/navbar';
import {Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Navbar/>
      <h1>Welcome to ADA Assignment</h1>

      <ul className="App-header">
          <li>
            <Link to="/nqueen">Nqueen</Link>
          </li>
          <li>
            <Link to="/paths">Graphs</Link>
          </li>
        </ul>

        <h1>Group Members</h1>
        <ul className="App-header">
          <li>
            <p>Tanmay Srivastava : 20DCS011</p>
          </li>
          <li>
          <p>Somesh : 20DCS023</p>
          </li>
        </ul>

        <h2>Submited to Dr. Nitin Gupta</h2>
    </div>
  );
};
  
export default Home;