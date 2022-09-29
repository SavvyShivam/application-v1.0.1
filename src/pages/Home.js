import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div >
      <h1>Homepage</h1>
      <p className="headline">
      </p>
      <ul>
        <li>
          <Link to="/macbookpro14one">MacBookPro14One</Link>
        </li>
        <li>
          <Link to="/macbookpro14oneone">MacBookPro14OneOne</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
