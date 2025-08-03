import React, { useState } from "react";

function UserPage() {
  const flights = [
    { flight: "AI101", destination: "New York", price: 75000 },
    { flight: "BA202", destination: "London", price: 65000 },
    { flight: "SQ303", destination: "Singapore", price: 55000 }
  ];

  const [selectedFlight, setSelectedFlight] = useState(null);

  const bookFlight = (flight) => {
    setSelectedFlight(flight);
    alert(`You have booked flight ${flight.flight} to ${flight.destination}`);
  };

  return (
    <div>
      <h2>Available Flights (User View)</h2>
      <ul>
        {flights.map((f, index) => (
          <li key={index}>
            Flight: {f.flight} | Destination: {f.destination} | Price: ₹{f.price}{" "}
            <button onClick={() => bookFlight(f)}>Book</button>
          </li>
        ))}
      </ul>
      {selectedFlight && (
        <p style={{ color: "green" }}>
          Last booked: {selectedFlight.flight} to {selectedFlight.destination}
        </p>
      )}
    </div>
  );
}

export default UserPage;
