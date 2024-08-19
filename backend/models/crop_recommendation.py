def recommend_crops(soil_type, climate):
    crops = {
        "sandy": ["Carrot", "Radish", "Potato"],
        "clay": ["Rice", "Wheat", "Soybeans"],
        "loam": ["Tomato", "Pepper", "Cucumber"]
    }
    
    climate_crops = {
        "tropical": ["Banana", "Coconut", "Sugarcane"],
        "temperate": ["Wheat", "Barley", "Corn"],
        "arid": ["Date Palm", "Millet", "Sorghum"]
    }
    
    recommended_crops = list(set(crops.get(soil_type, [])) & set(climate_crops.get(climate, [])))
    return recommended_crops if recommended_crops else ["No suitable crops found."]
