import React from "react";
import Announcement from "../components/Announcement";
import Navigation from "../components/Navigation";
import Slider from "../components/Slider";

const Home = () => {
  return (
    <div>
      <Announcement />
      <Navigation />
      <Slider />
    </div>
  );
};

export default Home;
