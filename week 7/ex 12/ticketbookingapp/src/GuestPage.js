import React from "react";

function GuestPage() {
  const flights = [
    { flight: "AI101", destination: "New York", price: 75000 },
    { flight: "BA202", destination: "London", price: 65000 },
    { flight: "SQ303", destination: "Singapore", price: 55000 }
  ];

  return (
    <div>
      <h2>Available Flights (Guest View)</h2>
      <ul>
        {flights.map((f, index) => (
          <li key={index}>
            Flight: {f.flight} | Destination: {f.destination} | Price: ₹{f.price}
          </li>
        ))}
      </ul>
      <p style={{ color: "red" }}>Login to book tickets!</p>
    </div>
  );
}

export default GuestPage;
