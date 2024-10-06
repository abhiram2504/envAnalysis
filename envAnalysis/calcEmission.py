import numpy as np
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression
from sklearn.metrics import mean_squared_error, r2_score

def c_emm(kWh):
    # Calculate total emissions in pounds
    total_emissions_lbs = kWh * 0.872
    
    # Convert pounds to kilograms
    total_emissions_kg = total_emissions_lbs * 0.453592
    
    return total_emissions_kg

    # Sample dataset (you can replace this with your own dataset)
data = {
    'Electricity (kWh)': [100, 200, 300, 150, 250],
    'Waste (kg)': [50, 100, 150, 75, 125],
    'Carbon Emissions (kg CO2)': [c_emm(100), c_emm(75), c_emm(100), c_emm(60), c_emm(90)]
}

# Create a DataFrame from the dataset
df = pd.DataFrame(data)

X = df[['Electricity (kWh)', 'Waste (kg)']]
y = df['Carbon Emissions (kg CO2)']

X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

model = LinearRegression()
model.fit(X_train, y_train)

y_pred = model.predict(X_test)

mse = mean_squared_error(y_test, y_pred)
r2 = r2_score(y_test, y_pred)

# Example user input
kWh = float(input("Enter the Kwh: "))
waste = float(input("Enter the waste: "))
user_input = np.array([kWh, waste]).reshape(1, -1)  # Replace with the user's input

# Predict carbon emissions
predicted_emissions = model.predict(user_input)

print(f"Predicted Carbon Emissions: {predicted_emissions[0]} kg CO2")


