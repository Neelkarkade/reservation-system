import React, { useState } from "react";

const PaymentPage: React.FC = () => {
  const [cardNumber, setCardNumber] = useState("");
  const [amount, setAmount] = useState("");

  const handlePay = () => {
    alert(`Payment of ₹${amount} made with card ending ${cardNumber.slice(-4)}`);
    setCardNumber("");
    setAmount("");
  };

  return (
    <div>
      <h2>Payment</h2>
      <input
        type="text"
        placeholder="Card Number"
        value={cardNumber}
        onChange={(e) => setCardNumber(e.target.value)}
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button onClick={handlePay}>Pay</button>
    </div>
  );
};

export default PaymentPage;
