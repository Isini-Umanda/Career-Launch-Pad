# train_model.py
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score, f1_score
import joblib

# Load your dataset (replace 'Data_final.csv' with your actual dataset)
print("Loading dataset...")
data = pd.read_csv('Data_final.csv')
print("Dataset loaded successfully.")

# Preprocess your data (replace 'O_score', 'C_score', etc. with actual column names in your dataset)
X = data[['O_score', 'C_score', 'E_score', 'A_score', 'N_score', 'Numerical Aptitude', 'Spatial Aptitude', 'Perceptual Aptitude', 'Abstract Reasoning', 'Verbal Reasoning']]
y = data['Career']
print("Data preprocessed successfully.")

# Split the data into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)
print("Data split into training and testing sets.")

# Train the Random Forest model
model = RandomForestClassifier()
model.fit(X_train, y_train)
print("Model training complete.")

# Make predictions on the test set
y_pred = model.predict(X_test)

# Calculate accuracy and F1 score
accuracy = accuracy_score(y_test, y_pred)
f1 = f1_score(y_test, y_pred, average='weighted')
print(f"Accuracy: {accuracy}")
print(f"F1 Score: {f1}")

# Save the trained model
joblib.dump(model, 'career_recommendation_model.pkl')
print("Model training complete and saved as 'career_recommendation_model.pkl'")
