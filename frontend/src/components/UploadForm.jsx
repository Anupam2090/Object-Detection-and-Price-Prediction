import React, { useState } from "react";
import ResultCard from "./ResultCard";
import { predictPrice } from "../services/api";

function UploadForm() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [imagePreview, setImagePreview] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setSelectedImage(file);
    if (file) {
      setImagePreview(URL.createObjectURL(file)); // Preview image before upload
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!selectedImage) {
      alert("Please select an image.");
      return;
    }

    setLoading(true); // Show loading spinner
    const formData = new FormData();
    formData.append("image", selectedImage);

    try {
      const data = await predictPrice(formData);
      setResults(data.results);
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to predict price.");
    } finally {
      setLoading(false); // Hide loading spinner once request is complete
    }
  };

  return (
    <div className="card p-4">
      {/* <h3 className="mb-4 text-center">Upload Image to Predict</h3> */}
      <form onSubmit={handleSubmit} className="text-center">
        {/* Image preview */}
        {imagePreview && (
          <img
            src={imagePreview}
            alt="Preview"
            className="img-fluid mb-3"
            style={{ maxWidth: "300px" }}
          />
        )}

        <input
          type="file"
          className="form-control mb-3"
          onChange={handleImageChange}
          accept="image/*"
        />
        <button type="submit" className="btn btn-success" disabled={loading}>
          {loading ? "Processing..." : "Predict"}
        </button>
      </form>

      <div className="mt-5">
        {/* Display results */}
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
