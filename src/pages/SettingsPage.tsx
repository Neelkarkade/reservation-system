import React, { useState } from "react";

const SettingsPage: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);

  const handleSave = () => {
    alert(`Settings saved: DarkMode=${darkMode}, Notifications=${notifications}`);
  };

  return (
    <div>
      <h2>Settings</h2>
      <label>
        <input
          type="checkbox"
          checked={darkMode}
          onChange={() => setDarkMode(!darkMode)}
        />
        Enable Dark Mode
      </label>
      <br />
      <label>
        <input
          type="checkbox"
          checked={notifications}
          onChange={() => setNotifications(!notifications)}
        />
        Enable Notifications
      </label>
      <br />
      <button onClick={handleSave}>Save Settings</button>
    </div>
  );
};

export default SettingsPage;
