def analyze_soil(pH, nitrogen, phosphorus, potassium):
    if pH < 5.5:
        return "Lime your soil to raise pH levels."
    elif pH > 7.5:
        return "Add sulfur to lower pH levels."
    
    recommendations = []
    if nitrogen < 50:
        recommendations.append("Add nitrogen-based fertilizer.")
    if phosphorus < 30:
        recommendations.append("Add phosphorus-based fertilizer.")
    if potassium < 200:
        recommendations.append("Add potassium-based fertilizer.")
    
    if not recommendations:
        return "Your soil nutrient levels are good!"
    
    return " ".join(recommendations)
