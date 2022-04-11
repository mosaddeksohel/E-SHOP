import React from "react";
import Announcement from "../components/Announcement";
import Categories from "../components/Categories";
import Navigation from "../components/Navigation";
import Products from "../components/Products";
import Slider from "../components/Slider";

const Home = () => {
  return (
    <div>
      <Announcement />
      <Navigation />
      <Slider />
      <Categories />
      <Products />
    </div>
  );
};

export default Home;
