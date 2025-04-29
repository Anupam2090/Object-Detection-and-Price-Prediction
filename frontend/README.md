# 🖥️ Frontend – React App

This is the React-based frontend for the **AI Price Predictor**. Users can upload an image to detect objects and receive estimated prices.

---

## 📁 Folder Structure

src/ │ ├── assets/ # Static assets like images, logos │ ├── components/ # Reusable components (Navbar, UploadForm, ResultCard) │ ├── UploadForm.jsx │ ├── ResultCard.jsx │ └── Navbar.jsx │ ├── pages/ # Full views/pages (Home, Predict) │ └── Home.jsx │ ├── services/ # API calls (e.g., POST to /predict) │ └── api.js │ ├── styles/ # CSS and custom styles │ └── style.css │ ├── App.js # Main routing for React app (using HashRouter) ├── index.js # React entry point └── setupProxy.js # Proxy setup for avoiding CORS issues with Flask backend


---

## 🚀 Getting Started

###  Install Dependencies

To get started, clone the repository and install the required dependencies:

```bash
npm install

```
### Start the React Development Server
Once dependencies are installed, start the React development server:

```
npm start

```
The app will be running at http://localhost:3000. Ensure that the Flask backend is running at http://localhost:5000 to allow the frontend to communicate with the backend.

## 📸 Image Prediction Flow

### 1. Navigate to the **Predict** page using the Navbar.

Click on the **Predict** link in the navigation bar to access the prediction page.

### 2. Upload an Image

On the **Predict** page, you will find an upload form. Upload a `.jpg`, `.jpeg`, or `.png` image of the object you want to predict.

### 3. View Detected Objects and Predicted Prices

Once the image is uploaded, the AI model will detect objects in the image and provide predicted prices for each detected object. The results will be displayed below the upload form.

