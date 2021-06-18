import React from "react";
import Posts from "../posts/Posts";
import Share from "../share/Share";

const Feed = () => {
  return (
    <div>
      <h1> Feed </h1>
      <Share />
      <Posts />
    </div>
  );
};

export default Feed;
