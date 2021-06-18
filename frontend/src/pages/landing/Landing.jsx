import React from "react";
import Leftbar from "../../components/leftbar/Leftbar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";

const Landing = () => {
  return (
    <div>
      <h1>Landing</h1>
      <Leftbar />
      <Feed />
      <Rightbar />
    </div>
  );
};

export default Landing;
