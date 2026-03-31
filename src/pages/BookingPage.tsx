import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { bookSeat } from "../services/TS.api";

const BookingPage: React.FC = () => {
  const location = useLocation();
  const route: any = location.state?.route;
  const [seatNo, setSeatNo] = useState("");
  const [passengerName, setPassengerName] = useState("");

  const handleBooking = async () => {
    try {
      await bookSeat({ userId: 4, busId: route.id, seatNumber: seatNo });
      alert(`Booking confirmed for ${passengerName}, Seat ${seatNo}`);
    } catch {
      alert("Booking failed. Try again.");
    }
  };

  return (
    <div>
      <h2>Booking</h2>
      <p>{route?.name} - {route?.source} → {route?.destination} at {route?.time}</p>
      <input value={passengerName} onChange={e => setPassengerName(e.target.value)} placeholder="Passenger Name" />
      <input value={seatNo} onChange={e => setSeatNo(e.target.value)} placeholder="Seat Number" />
      <button onClick={handleBooking}>Confirm Booking</button>
    </div>
  );
};

export default BookingPage;
