import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => (
  <div className="jumbotron">
    <h1>Pluralsight Administration</h1>
    <p>React, Redux and React Router for ultra-resposive webapps</p>
    <Link to="about" className="btn btn-primary btn-large">
      Learn more
    </Link>
  </div>
);

export default HomePage;
