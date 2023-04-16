import React from "react";
// import Footer4 from "./footer";
import Navbar from "../newCompounts/navbar";

import Footer from "newCompounts/newfooter";
import Slider from "newCompounts/slider";
import  Card  from "../newCompounts/card";
function Dashboard() {
  return (
    <>
      <Navbar />
      {/* in this there is a slider and in this slider there is also hava a card */}
      <Slider />
      <Card />
      <br />
      <Footer />
    </>
  );
}
export default Dashboard;
