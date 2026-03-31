import React, { useState } from "react";
import { cancelBooking } from "../services/TS.api";

const CancelBookingPage: React.FC = () => {
  const [bookingId, setBookingId] = useState<number>(0);

  const handleCancel = async () => {
    try {
      await cancelBooking(bookingId);
      alert(`Booking ${bookingId} cancelled successfully!`);
    } catch {
      alert("Failed to cancel booking. Try again.");
    }
  };

  return (
    <div>
      <h2>Cancel Booking</h2>
      <input
        type="number"
        placeholder="Booking ID"
        value={bookingId}
        onChange={(e) => setBookingId(Number(e.target.value))}
      />
      <button onClick={handleCancel}>Cancel</button>
    </div>
  );
};

export default CancelBookingPage;

// 👇 ensures file is treated as a module under --isolatedModules
export {};
