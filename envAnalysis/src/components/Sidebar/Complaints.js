import React, { useState } from "react";
import "./Complaints.css";

function Complaints() {
  const [isSubmitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform any necessary submission logic here.
    // You can make an API call, save the feedback, etc.
    // For this example, we'll just show the "thank you" message.
    setSubmitted(true);
  };

  return (
    <div className="complaints-container">
      <h1 className="complaints-heading">Complaints</h1>
      <p className="complaints-text">
        If you have any complaints, please don't hesitate to contact us. We value your feedback and will do our best to address your concerns.
      </p>
      <form className="complaints-form" onSubmit={handleSubmit}>
        <textarea id="complaint" name="complaint" rows="4" cols="50" className="complaint-textarea"></textarea>
        <button type="submit" className="complaint-submit">Submit</button>
      </form>
      {isSubmitted && (
        <div className="thank-you-message">
          Thank you for your valuable feedback! We appreciate your input.
        </div>
      )}
    </div>
  );
}

export default Complaints;
