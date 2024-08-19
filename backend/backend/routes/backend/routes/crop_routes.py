from flask import Blueprint, request, jsonify
from models.crop_recommendation import recommend_crops

bp = Blueprint('crop', __name__)

@bp.route('/recommend-crops', methods=['POST'])
def recommend_crops_route():
    data = request.json
    soil_type = data.get('soil_type')
    climate = data.get('climate')
    
    crops = recommend_crops(soil_type, climate)
    return jsonify({"recommended_crops": crops})
