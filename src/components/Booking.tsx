import { bookSeat } from "../services/TS.api";

function Booking() {
  const handleBooking = () => {
    bookSeat({ userId: 4, busId: 7, seatNumber: "A1" })
      .then((res: any) => {
        console.log("Reservation booked:", res.data);
      })
      .catch((err: any) => {
        console.error("Booking failed:", err);
      });
  };

  return <button onClick={handleBooking}>Book Seat</button>;
}

export default Booking;
