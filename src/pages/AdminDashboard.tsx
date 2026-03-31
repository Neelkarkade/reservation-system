import React, { useState } from "react";
import { adminAddRoute } from "../services/TS.api";

const AdminDashboard: React.FC = () => {
  const [name, setName] = useState("");
  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");
  const [time, setTime] = useState("");

  const handleAddRoute = async () => {
    try {
      await adminAddRoute({ name, source, destination, time });
      alert("Route added successfully!");
      setName(""); setSource(""); setDestination(""); setTime("");
    } catch {
      alert("Failed to add route.");
    }
  };

  return (
    <div>
      <h2>Admin Dashboard</h2>
      <input value={name} onChange={e => setName(e.target.value)} placeholder="Route Name" />
      <input value={source} onChange={e => setSource(e.target.value)} placeholder="Source" />
      <input value={destination} onChange={e => setDestination(e.target.value)} placeholder="Destination" />
      <input value={time} onChange={e => setTime(e.target.value)} placeholder="Time" />
      <button onClick={handleAddRoute}>Add Route</button>
    </div>
  );
};

export default AdminDashboard;
