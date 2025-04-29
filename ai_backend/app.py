from flask import Flask, request, jsonify
from flask_cors import CORS
import os
from utils.price_model import detect_objects  # notice change
from utils.fetch_price import get_price  # Correct function import
from werkzeug.utils import secure_filename

UPLOAD_FOLDER = 'uploads'
ALLOWED_EXTENSIONS = {'png', 'jpg', 'jpeg'}

app = Flask(__name__)
CORS(app)
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

if not os.path.exists(UPLOAD_FOLDER):
    os.makedirs(UPLOAD_FOLDER)

def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

@app.route('/predict', methods=['POST'])
def predict():
    if 'image' not in request.files:
        return jsonify({'error': 'No file part'}), 400
    
    file = request.files['image']

    if file.filename == '':
        return jsonify({'error': 'No selected file'}), 400

    if file and allowed_file(file.filename):
        filename = secure_filename(file.filename)
        filepath = os.path.join(app.config['UPLOAD_FOLDER'], filename)
        file.save(filepath)

        detected_objects = detect_objects(filepath)

        results = []
        for obj in detected_objects:
            price = get_price(obj)
            # Check if the price is available or not
            if price is None or price == "Price not available":
                price = "Price not available"  # Default to this if no price is found

            results.append({
                'object': obj,
                'predicted_price': price
            })

        return jsonify({
            'results': results
        })

    else:
        return jsonify({'error': 'Invalid file format'}), 400


if __name__ == '__main__':
    app.run(port=5000, debug=True)