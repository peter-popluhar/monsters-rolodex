import React from "react";
import "./card.styles.css";

export const Card = ({ monster: { name, email, id } }) => {
  return (
    <div className="card-container">
      <img src={`https://robohash.org/${id}set=set2&size=80x80`} alt="" />
      <h1>name: {name}</h1>
      <h2>{email}</h2>
    </div>
  );
};
