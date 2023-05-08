import React from "react";
import mp from "./mapp.png";
import { Link } from "react-router-dom";
import "./home.css";
const Home = () => {
  
  return (
    <div className="map-wrap">
        <img src={mp} alt="map  icon" className="ico"></img><br/><br/>
        <h2>find your location</h2><br/><br/>
        <Link to="map" className="fcc-btn">GO...</Link>
    </div>
  );
};

export default Home;