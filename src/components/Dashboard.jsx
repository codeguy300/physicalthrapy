import React from "react";
import ImageBelowNavBar from "./imagebelow";
import Cards from "./Cards";
import Gradiants from "./Gradiants";
import Upcoming from "./Upcoming";
import Coming from "./Coming";
import Benefits from "./Benefits";
import Physical from "./Physical";
import Housing from "./Housing";
import Reviews from "./Reviews";
const Dashboard = () => {
  return (
    <div>
      <ImageBelowNavBar />
      <Cards />
      <Gradiants />
      <Upcoming />
      <Coming />
      <Benefits />
      <Physical />
      <Housing />
      <Reviews />
    </div>
  );
};

export default Dashboard;
