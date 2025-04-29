import React from "react";

function ResultCard({ object, price }) {
  return (
    <div className="card my-3 shadow-lg">
      <div className="card-body">
        <h5 className="card-title">{object}</h5>
        <p className="card-text">
          Predicted Price:{" "}
          <strong>
            {price !== null && price !== "Price not available" ? (
              <span className="text-success">₹{price}</span>
            ) : (
              <span className="text-danger">Not Available</span>
            )}
          </strong>
        </p>
      </div>
    </div>
  );
}

export default ResultCard;
