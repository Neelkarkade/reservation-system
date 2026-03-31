import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { searchRoutes, Route } from "../services/TS.api";

const SearchPage: React.FC = () => {
  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState("");
  const [results, setResults] = useState<Route[]>([]);
  const navigate = useNavigate();

  const handleSearch = async () => {
    try {
      const res = await searchRoutes({ source, destination, date });
      setResults(res.data);
    } catch {
      alert("Search failed. Try again.");
    }
  };

  return (
    <div>
      <h2>Search Routes</h2>
      <input value={source} onChange={e => setSource(e.target.value)} placeholder="Source" />
      <input value={destination} onChange={e => setDestination(e.target.value)} placeholder="Destination" />
      <input type="date" value={date} onChange={e => setDate(e.target.value)} />
      <button onClick={handleSearch}>Search</button>

      <ul>
        {results.map(r => (
          <li key={r.id} onClick={() => navigate("/booking", { state: { route: r } })}>
            {r.name} - {r.source} → {r.destination} at {r.time} (Seats: {r.availableSeats})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchPage;
