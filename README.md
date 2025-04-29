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
├── app.py                  # 🔥 Main Flask server that handles image uploads and prediction requests
├── requirements.txt        # 📦 List of Python dependencies to install
├── .env                    # 🔐 Stores API keys and environment variables (keep this private)
│
├── model/                  # 🧠 Contains YOLO model weight files (.pt) used for object detection
│
├── uploads/                # 🖼️ Temporarily stores uploaded user images for processing
│
├── utils/                  # ⚙️ Utility functions for core features
│   ├── fetch_price.py      # 💵 Gets predicted prices using Gemini API and scrapes Amazon
│   └── price_model.py      # 🧠 Performs object detection using the YOLO model
│
└── README.md               # 📖 Project overview, setup steps, and API documentation

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
