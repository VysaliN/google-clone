import React from "react";
import { Link } from "react-router-dom";
import Search from "./Search";
import { HiUserCircle } from "react-icons/hi";
import { MdApps } from "react-icons/md";
import "./Home.css";
import image from "./google.gif";

const Home = () => {
  return (
    <div className="home">
      <div className="home-header">
        <div className="home-headerleft">
          <Link to="/about">About</Link>
          <Link to="/store">Store</Link>
        </div>
        <div className="home-headerright">
          <Link to="/gmail">Gmail</Link>
          <Link to="/images">Images</Link>
          <MdApps className="app" title="Google apps" />
          <HiUserCircle className="user" title="Google Account" />
        </div>
      </div>

      <div className="home-body">
        <img src={image} />
        <Search hideButtons />
      </div>
    </div>
  );
};

export default Home;
