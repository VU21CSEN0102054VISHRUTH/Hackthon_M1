import React from 'react';
import { View, Text, Button } from 'react-native';

function HomeScreen({ navigation }) {
  return (
    <View>
      <Text>Welcome to Crop and Soil Management System</Text>
      <Button
        title="Analyze Soil"
        onPress={() => navigation.navigate('SoilAnalysis')}
      />
      <Button
        title="Recommend Crops"
        onPress={() => navigation.navigate('CropRecommendation')}
      />
      <Button
        title="Identify Disease"
        onPress={() => navigation.navigate('DiseaseIdentification')}
      />
    </View>
  );
}

export default HomeScreen;
