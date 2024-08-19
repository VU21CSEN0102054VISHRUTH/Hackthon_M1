from flask import Blueprint, request, jsonify
from models.disease_identification import predict_disease
import os

bp = Blueprint('disease', __name__)

@bp.route('/predict-disease', methods=['POST'])
def predict_disease_route():
    if 'image' not in request.files:
        return jsonify({"error": "No image uploaded"}), 400
    
    image_file = request.files['image']
    image_path = os.path.join('static/images', image_file.filename)
    image_file.save(image_path)
    
    disease = predict_disease(image_path)
    os.remove(image_path)  # Clean up the saved image file after prediction
    
    return jsonify({"disease": disease})
