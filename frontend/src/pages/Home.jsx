import React from "react";
import { Container } from "react-bootstrap";
import { motion } from "framer-motion";
import backgroundImage from "../assets/landing_page.png"; // Import the image

const Home = () => {
  return (
    <div
      className="home-container"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <Container className="py-5 d-flex justify-content-center align-items-center">
        <div className="text-center">
          <motion.h2
            className="fadeInUp"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Welcome to the AI Price Predictor
          </motion.h2>
          <motion.p
            className="slideInLeft"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2 }}
          >
            Upload an image on the Predict page to get started.
          </motion.p>
        </div>
      </Container>
    </div>
  );
};

export default Home;
