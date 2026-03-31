import React, { useState } from "react";

const NotificationsPage: React.FC = () => {
  const [messages] = useState<string[]>([
    "Your booking was confirmed!",
    "Bus route updated by admin.",
    "System maintenance scheduled tomorrow."
  ]);

  return (
    <div>
      <h2>Notifications</h2>
      <ul>
        {messages.map((msg, idx) => (
          <li key={idx}>{msg}</li>
        ))}
      </ul>
    </div>
  );
};

export default NotificationsPage;
