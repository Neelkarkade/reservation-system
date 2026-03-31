import React, { useState } from "react";

const FeedbackPage: React.FC = () => {
  const [message, setMessage] = useState("");

  const handleSubmit = () => {
    alert(`Feedback submitted: ${message}`);
    setMessage("");
  };

  return (
    <div>
      <h2>Feedback</h2>
      <textarea
        placeholder="Write your feedback..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <br />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default FeedbackPage;
