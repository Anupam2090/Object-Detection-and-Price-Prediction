import React, { useState } from "react";
import UploadForm from "../components/UploadForm";
import ResultCard from "../components/ResultCard";
import { Container, Card } from "react-bootstrap";
import { motion } from "framer-motion";
import "../styles/style.css"; 

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
    <div className="predict-container">
      <div className="overlay"></div>
      <Container className="predict-content">
        <motion.h2
          className="predict-title"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Upload Image to Predict
        </motion.h2>

        <motion.div
          className="predict-card"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <UploadForm onSubmit={handlePredictionSubmit} />
        </motion.div>

        <div className="results">
          {predictions.length > 0 ? (
            predictions.map((result, index) => (
              <Card key={index} className="mb-3">
                <Card.Body>
                  <ResultCard result={result} />
                </Card.Body>
              </Card>
            ))
          ) : (
            <p className="no-prediction">No predictions available.</p>
          )}
        </div>
      </Container>
    </div>
  );
};

export default Predict;
