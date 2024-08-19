import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

function CropRecommendationScreen() {
  const [soilType, setSoilType] = useState('');
  const [climate, setClimate] = useState('');
  const [recommendedCrops, setRecommendedCrops] = useState([]);

  const recommendCrops = () => {
    fetch('http://127.0.0.1:5000/recommend-crops', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        soil_type: soilType,
        climate: climate,
      }),
    })
    .then(response => response.json())
    .then(data => setRecommendedCrops(data.recommended_crops))
    .catch(error => console.error('Error:', error));
  };

  return (
    <View>
      <Text>Crop Recommendation</Text>
      <TextInput
        placeholder="Soil Type"
        value={soilType}
        onChangeText={setSoilType}
      />
      <TextInput
        placeholder="Climate"
        value={climate}
        onChangeText={setClimate}
      />
      <Button title="Recommend Crops" onPress={recommendCrops} />
      {recommendedCrops.length > 0 && (
        <Text>Recommended Crops:</Text>
      )}
      {recommendedCrops.map((crop, index) => (
        <Text key={index}>{crop}</Text>
      ))}
    </View>
  );
}

export default CropRecommendationScreen;
