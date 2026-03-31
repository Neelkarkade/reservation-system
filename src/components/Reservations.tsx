import { getUserBookings } from "../services/TS.api";

function Reservations() {
  const handleGetReservations = () => {
    getUserBookings(4)
      .then((res: any) => {
        console.log("User reservations:", res.data);
      })
      .catch((err: any) => {
        console.error("Failed to fetch reservations:", err);
      });
  };

  return <button onClick={handleGetReservations}>View Reservations</button>;
}

export default Reservations;
