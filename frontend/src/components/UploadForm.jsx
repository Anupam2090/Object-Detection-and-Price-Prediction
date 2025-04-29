import React, { useState } from "react";
import ResultCard from "./ResultCard";
import { predictPrice } from "../services/api";

function UploadForm() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [results, setResults] = useState([]);

  const handleImageChange = (e) => {
    setSelectedImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!selectedImage) {
      alert("Please select an image.");
      return;
    }

    const formData = new FormData();
    formData.append("image", selectedImage);

    try {
      const data = await predictPrice(formData);
      setResults(data.results);
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to predict price.");
    }
  };

  return (
    <div className="card p-4">
      <h3 className="mb-4 text-center">Upload Image to Predict</h3>
      <form onSubmit={handleSubmit} className="text-center">
        <input
          type="file"
          className="form-control mb-3"
          onChange={handleImageChange}
        />
        <button type="submit" className="btn btn-success">
          Predict
        </button>
      </form>

      <div className="mt-5">
        {results.length > 0 &&
          results.map((item, index) => (
            <ResultCard
              key={index}
              object={item.object}
              price={item.predicted_price}
            />
          ))}
      </div>
    </div>
  );
}

export default UploadForm;
