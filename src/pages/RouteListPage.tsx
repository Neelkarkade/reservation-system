import React, { useEffect, useState } from "react";
import { searchRoutes, Route } from "../services/TS.api";

const RouteListPage: React.FC = () => {
  const [routes, setRoutes] = useState<Route[]>([]);

  useEffect(() => {
    const fetchRoutes = async () => {
      try {
        const res = await searchRoutes({ source: "", destination: "", date: "" });
        setRoutes(res.data);
      } catch {
        alert("Failed to load routes.");
      }
    };
    fetchRoutes();
  }, []);

  return (
    <div>
      <h2>All Routes</h2>
      <ul>
        {routes.map((r) => (
          <li key={r.id}>
            {r.name} - {r.source} → {r.destination} at {r.time} (Seats: {r.availableSeats})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RouteListPage;
