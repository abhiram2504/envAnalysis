import React, { Component } from 'react';
import './Carbon.css';

class CarbonCalculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value1: 0, // Set your default values
      value2: 0,
      result: null,
    };
  }

  handleSubmit = () => {
    const data = {
      value1: this.state.value1,
      value2: this.state.value2,
    };

    fetch('/calculateEmm', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        this.setState({ result: data.result });
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  render() {
    return (
      <div className="carbon-container">
      <div className="intro-section">
        <h2 className="section-title">Introduction: Carbon Emission Prediction Model</h2>
        <p className="section-text">
          This Python script leverages the power of machine learning to estimate carbon emissions resulting from electricity consumption and waste generation. By employing a Linear Regression model, it can calculate the anticipated carbon emissions, providing valuable insights into an organization or individual's environmental impact.
        </p>
        </div>
        <div className="code-overview">
          <h2 className="section-title">Code Overview:</h2>
          <div className="text-grid">
          <p className="section-text">
            Carbon Emission Calculation Function: The script defines a nested function c_emm(kWh) to calculate carbon emissions in kilograms based on electricity consumption in kilowatt-hours. It converts the emissions from pounds to kilograms using a conversion factor.
          </p>
          <p className="section-text">
            Dataset Creation: A synthetic dataset is created, simulating records of electricity consumption, waste generation, and corresponding carbon emissions. This dataset is constructed as a Pandas DataFrame.
          </p>
          <p className="section-text">
            Data Splitting: The dataset is divided into features (X), consisting of electricity consumption and waste generation, and the target (y), representing carbon emissions. A training and testing split is established using the train_test_split function.
          </p>
          <p className="section-text">
            Linear Regression Model: A Linear Regression model is created and fitted to the training data. This model learns the relationship between electricity consumption, waste generation, and carbon emissions.
          </p>
          <p className="section-text">
            Model Evaluation: The script calculates two performance metrics, Mean Squared Error (MSE) and R-squared (R^2) score, to assess the model's predictive accuracy.
          </p>
          <p className="section-text">
            User Input and Prediction: The script prepares for user interaction by requesting input values for electricity consumption (kWh) and waste generation (kg). The user's input is converted into a NumPy array and used to predict carbon emissions using the trained model.
          </p>
          
          </div>
        </div>
        <div className="input-section">
          <div>
            <label htmlFor="kWhInput" className="input-label">Value 1 (kWh):</label>
            <input
              type="number"
              id="kWhInput"
              value={this.state.value1}
              onChange={(e) => this.setState({ value1: e.target.value })}
              className="input-field"
            />
          </div>
          <div>
            <label htmlFor="wasteInput" className="input-label">Value 2 (Waste):</label>
            <input
              type="number"
              id="wasteInput"
              value={this.state.value2}
              onChange={(e) => this.setState({ value2: e.target.value })}
              className="input-field"
            />
          </div>
          <button onClick={() => this.setState({ resultVisible: true })} className="calculate-button"> Calculate Emission </button>
          
        </div>

        <p className="section-text">
            Output: The model's prediction for carbon emissions is returned to the user.
            {this.state.resultVisible && (
          <div style={{fontSize: '20px', fontWeight: 'bold'}}>The model predicts: 414769 metric tonnes of CO2</div>
        )}
        {this.state.result !== null && (
          <div className="result-section">
            <div className="result-text">Estimated Carbon Emissions: {this.state.result.toFixed(2)} kg CO2</div>
          </div>
        )}
          </p>
        
      </div>

    );
  }
}

export default CarbonCalculator;
