from flask import Blueprint, request, jsonify
from models.soil_analysis import analyze_soil

bp = Blueprint('soil', __name__)

@bp.route('/analyze-soil', methods=['POST'])
def analyze_soil_route():
    data = request.json
    pH = data.get('pH')
    nitrogen = data.get('nitrogen')
    phosphorus = data.get('phosphorus')
    potassium = data.get('potassium')
    
    recommendation = analyze_soil(pH, nitrogen, phosphorus, potassium)
    return jsonify({"recommendation": recommendation})
