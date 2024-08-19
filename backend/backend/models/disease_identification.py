import tensorflow as tf
from tensorflow.keras.models import load_model
from tensorflow.keras.preprocessing import image
import numpy as np
import os

model = load_model('static/crop_disease_model.h5')  # Ensure your model is placed in the static directory

def predict_disease(image_path):
    img = image.load_img(image_path, target_size=(224, 224))
    img_array = image.img_to_array(img)
    img_array = np.expand_dims(img_array, axis=0) / 255.0
    
    prediction = model.predict(img_array)
    class_names = ['Healthy', 'Disease 1', 'Disease 2', 'Disease 3']  # Replace with actual class names
    predicted_class = class_names[np.argmax(prediction)]
    
    return predicted_class
