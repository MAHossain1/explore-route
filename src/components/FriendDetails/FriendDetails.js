import React from "react";
import { useLoaderData } from "react-router-dom";

const FriendDetails = () => {
  const friend = useLoaderData();
  console.log(friend);
  return (
    <div>
      <h1>Details About: {friend.name}</h1>
      <h2>Everything you need to know about this person</h2>
      <p>Phone: {friend.name}</p>
      <p>visit: {friend.website}</p>
    </div>
  );
};

export default FriendDetails;
