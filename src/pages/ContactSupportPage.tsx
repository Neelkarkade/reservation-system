import React, { useState } from "react";

const ContactSupportPage: React.FC = () => {
  const [query, setQuery] = useState("");

  const handleSend = () => {
    alert(`Support request sent: ${query}`);
    setQuery("");
  };

  return (
    <div>
      <h2>Contact Support</h2>
      <textarea
        placeholder="Describe your issue..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <br />
      <button onClick={handleSend}>Send</button>
    </div>
  );
};

export default ContactSupportPage;
