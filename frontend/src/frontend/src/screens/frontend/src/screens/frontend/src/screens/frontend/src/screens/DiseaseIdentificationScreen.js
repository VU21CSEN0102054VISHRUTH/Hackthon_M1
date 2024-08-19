import React, { useState } from 'react';
import { View, Text, Button, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

function DiseaseIdentificationScreen() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [disease, setDisease] = useState('');

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.uri);
    }
  };

  const identifyDisease = () => {
    let formData = new FormData();
    formData.append('image', {
      uri: selectedImage,
      name: 'photo.jpg',
      type: 'image/jpeg',
    });

    fetch('http://127.0.0.1:5000/predict-disease', {
      method: 'POST',
      body: formData,
    })
    .then(response => response.json())
    .then(data => setDisease(data.disease))
    .catch(error => console.error('Error:', error));
  };

  return (
    <View>
      <Text>Disease Identification</Text>
      <Button title="Pick an image from gallery" onPress={pickImage} />
      {selectedImage && (
        <Image source={{ uri: selectedImage }} style={{ width: 200, height: 200 }} />
      )}
      <Button title="Identify Disease" onPress={identifyDisease} />
      <Text>{disease}</Text>
    </View>
  );
}

export default DiseaseIdentificationScreen;
