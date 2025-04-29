# 🧠 AI-Based Object Price Prediction Backend

This backend uses **YOLO object detection** and **Google Gemini + Amazon scraping** to estimate the price of objects in uploaded images (like laptops, books, phones, etc.). It's built with **Python Flask** and easily integrates with any frontend (PHP, React, etc.).

---

## 🚀 Features

- 🔍 Detects multiple objects in an image using YOLO
- 💰 Predicts prices using:
  - 🤖 Google Gemini AI
  - 🛒 Amazon product scraping
- 📤 Upload image → 📥 Get back object names + prices in JSON
- 🔧 Ready to connect with any frontend (React, PHP, etc.)

---

## 📁 Project Structure

ai_backend/
│
├── app.py # 🔥 Main Flask server that handles image uploads and prediction requests
├── requirements.txt # 📦 List of Python dependencies to install
├── .env # 🔐 Stores API keys and environment variables (keep this private)
│
├── model/ # 🧠 Contains YOLO model weight files (.pt) used for object detection
│
├── uploads/ # 🖼️ Temporarily stores uploaded user images for processing
│
├── utils/ # ⚙️ Utility functions for core features
│ ├── fetch_price.py # 💵 Gets predicted prices using Gemini API and scrapes Amazon
│ └── price_model.py # 🧠 Performs object detection using the YOLO model
│
└── README.md # 📖 Project overview, setup steps, and API documentation

---

## 🛠️ Setup Instructions

### 1. Clone this repo

```bash
git clone https://https://github.com/Anupam2090/Object-Detection-and-Price-Prediction.git
cd ai_backend
```

### Create and Activate Virtual Environment

```

```

On Windows:

```
python -m venv venv
venv\Scripts\activate
```

```
On macOS/Linux:
```

source venv/bin/activate

```

```

### Install Dependencies

```

```

pip install -r requirements.txt

```

```

### Add Your Environment Variables

```

```

Create a .env file in the root folder with the following contents:

GEMINI_API_KEY=your_gemini_api_key_here
AMAZON_HEADERS_USER_AGENT=your_browser_user_agent_here
Run the Server

```
python app.py
```

The server will run at:
📍 http://localhost:5000

```

```

### 📡 API Endpoint: POST /predict

▶️ Request:
Method: POST

Form Data:

image: File input (image in .jpg, .jpeg, or .png format)

```

```

### 📤 Sample Response (JSON):

```
{
  "results": [
    {
      "object": "Laptop",
      "predicted_price": "₹50000"
    },
    {
      "object": "Book",
      "predicted_price": "₹300"
    }
  ]
}
```

# 🖥️ Frontend – React App

This is the React-based frontend for the **AI Price Predictor**. Users can upload an image to detect objects and receive estimated prices.

---

## 📁 Folder Structure

src/ │ ├── assets/ # Static assets like images, logos │ ├── components/ # Reusable components (Navbar, UploadForm, ResultCard) │ ├── UploadForm.jsx │ ├── ResultCard.jsx │ └── Navbar.jsx │ ├── pages/ # Full views/pages (Home, Predict) │ └── Home.jsx │ ├── services/ # API calls (e.g., POST to /predict) │ └── api.js │ ├── styles/ # CSS and custom styles │ └── style.css │ ├── App.js # Main routing for React app (using HashRouter) ├── index.js # React entry point └── setupProxy.js # Proxy setup for avoiding CORS issues with Flask backend

---

## 🚀 Getting Started

### Install Dependencies

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
