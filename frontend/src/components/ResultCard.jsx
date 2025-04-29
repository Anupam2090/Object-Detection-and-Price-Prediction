import React from "react";

function ResultCard({ object, price }) {
  return (
    <div className="card my-3">
      <div className="card-body">
        <h5 className="card-title">{object}</h5>
        <p className="card-text">
          Predicted Price:{" "}
          <strong>₹{price !== null ? price : "Not Available"}</strong>
        </p>
      </div>
    </div>
  );
}

export default ResultCard;
