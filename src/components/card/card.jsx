import React from "react";
import "./card.styles.css";

export const Card = ({ monster: { name, email, id } }) => {
  return (
    <div className="card-container">
      <div>
        <img src={`https://robohash.org/${id}?set=set1&size=180x180`} alt="" />
      </div>
      <h1>{name}</h1>
      <h2>{email}</h2>
    </div>
  );
};
