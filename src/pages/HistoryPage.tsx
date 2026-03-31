import React, { useEffect, useState } from "react";
import { getUserBookings, Booking } from "../services/TS.api";

const HistoryPage: React.FC = () => {
  const [bookings, setBookings] = useState<Booking[]>([]);

  useEffect(() => {
    const fetchHistory = async () => {
      const res = await getUserBookings(4); // example userId
      setBookings(res.data);
    };
    fetchHistory();
  }, []);

  return (
    <div>
      <h2>Booking History</h2>
      {bookings.length === 0 ? (
        <p>No past bookings found.</p>
      ) : (
        bookings.map((b) => (
          <div key={b.id}>
            {b.routeName} - {b.source} → {b.destination} on {b.date} (Seat {b.seatNumber})
          </div>
        ))
      )}
    </div>
  );
};

export default HistoryPage;
