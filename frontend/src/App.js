import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import SoilAnalysisScreen from './screens/SoilAnalysisScreen';
import CropRecommendationScreen from './screens/CropRecommendationScreen';
import DiseaseIdentificationScreen from './screens/DiseaseIdentificationScreen';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="SoilAnalysis" component={SoilAnalysisScreen} />
        <Stack.Screen name="CropRecommendation" component={CropRecommendationScreen} />
        <Stack.Screen name="DiseaseIdentification" component={DiseaseIdentificationScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
