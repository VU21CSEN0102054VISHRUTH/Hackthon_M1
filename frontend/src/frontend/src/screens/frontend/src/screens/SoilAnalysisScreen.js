import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

function SoilAnalysisScreen() {
  const [pH, setPH] = useState('');
  const [nitrogen, setNitrogen] = useState('');
  const [phosphorus, setPhosphorus] = useState('');
  const [potassium, setPotassium] = useState('');
  const [recommendation, setRecommendation] = useState('');

  const analyzeSoil = () => {
    fetch('http://127.0.0.1:5000/analyze-soil', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        pH: parseFloat(pH),
        nitrogen: parseFloat(nitrogen),
        phosphorus: parseFloat(phosphorus),
        potassium: parseFloat(potassium),
      }),
    })
    .then(response => response.json())
    .then(data => setRecommendation(data.recommendation))
    .catch(error => console.error('Error:', error));
  };

  return (
    <View>
      <Text>Soil Analysis</Text>
      <TextInput
        placeholder="pH Level"
        value={pH}
        onChangeText={setPH}
      />
      <TextInput
        placeholder="Nitrogen Level"
        value={nitrogen}
        onChangeText={setNitrogen}
      />
      <TextInput
        placeholder="Phosphorus Level"
        value={phosphorus}
        onChangeText={setPhosphorus}
      />
      <TextInput
        placeholder="Potassium Level"
        value={potassium}
        onChangeText={setPotassium}
      />
      <Button title="Analyze Soil" onPress={analyzeSoil} />
      <Text>{recommendation}</Text>
    </View>
  );
}

export default SoilAnalysisScreen;
