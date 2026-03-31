import React, { useEffect, useState } from "react";
import { getUserBookings, Booking } from "../services/TS.api";

const UserDashboard: React.FC = () => {
  const [bookings, setBookings] = useState<Booking[]>([]);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const res = await getUserBookings(4); // example userId
        setBookings(res.data);
      } catch {
        alert("Failed to load bookings.");
      }
    };
    fetchBookings();
  }, []);

  return (
    <div>
      <h2>My Bookings</h2>
      {bookings.length === 0 ? (
        <p>No bookings found.</p>
      ) : (
        bookings.map(b => (
          <div key={b.id}>
            {b.routeName} - {b.source} → {b.destination} on {b.date} (Seat {b.seatNumber})
          </div>
        ))
      )}
    </div>
  );
};

export default UserDashboard;
