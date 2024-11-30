# app.py
from flask import Flask, request, jsonify
from flask_cors import CORS
import joblib
import numpy as np

app = Flask(__name__)
CORS(app)  # Enable CORS to handle cross-origin requests

# Load the trained model
print("Loading the trained model...")
model = joblib.load('career_recommendation_model.pkl')
print("Model loaded successfully.")

@app.route('/predict', methods=['POST'])
def predict():
    try:
        # Parse incoming request JSON payload
        data = request.get_json()
        # Validate that all questions have been answered
        features = data.get('features')
        if not features or len(features) != 10 or any(feature == 0 for feature in features):
            return jsonify({'error': 'Please answer all questions'}), 400
        # Extract features from the JSON payload
        features = np.array(features).reshape(1, -1)  # Assuming 'features' is a list
        # Predict using the trained model
        prediction = model.predict(features)
        # Send back the prediction as a response
        return jsonify({'career_path': prediction[0]})
    except Exception as e:
        # Handle exceptions and return error message
        return jsonify({'error': str(e)})

if __name__ == '__main__':
    app.run(port=5000, debug=True)
