import React, { useState } from "react";
import UploadForm from "../components/UploadForm";
import ResultCard from "../components/ResultCard";
import { Container, Card } from "react-bootstrap";

const Predict = () => {
  const [predictions, setPredictions] = useState([]);

  const handlePredictionSubmit = async (image) => {
    const formData = new FormData();
    formData.append("image", image);

    try {
      const response = await fetch("http://localhost:5000/predict", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      setPredictions(data.results);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <Container className="py-5">
      <h2 className="text-center mb-4">Upload Image to Predict</h2>
      <UploadForm onSubmit={handlePredictionSubmit} />
      <div className="mt-5">
        {predictions.length > 0 ? (
          predictions.map((result, index) => (
            <Card key={index} className="mb-3">
              <Card.Body>
                <ResultCard result={result} />
              </Card.Body>
            </Card>
          ))
        ) : (
          <p>No predictions available.</p>
        )}
      </div>
    </Container>
  );
};

export default Predict;
