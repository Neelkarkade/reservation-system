import React from "react";

const FAQPage: React.FC = () => {
  const faqs = [
    { q: "How do I book a seat?", a: "Go to Search, select a route, then confirm booking." },
    { q: "Can I cancel a booking?", a: "Yes, use the Cancel Booking page." },
    { q: "Is payment required?", a: "Currently payments are simulated for demo purposes." }
  ];

  return (
    <div>
      <h2>FAQ</h2>
      <ul>
        {faqs.map((f, idx) => (
          <li key={idx}>
            <strong>{f.q}</strong><br />{f.a}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FAQPage;
