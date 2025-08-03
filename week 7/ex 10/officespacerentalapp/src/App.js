import React from "react";

function App() {
  // Single office object
  const singleOffice = {
    name: "Tech Park - Tower A",
    rent: 55000,
    address: "MG Road, Bengaluru",
    image: "https://via.placeholder.com/300x150?text=Tech+Park"
  };

  // List of offices
  const offices = [
    { name: "Global Business Hub", rent: 45000, address: "Whitefield, Bengaluru", image: "https://via.placeholder.com/300x150?text=Global+Hub" },
    { name: "Prestige Towers", rent: 75000, address: "Koramangala, Bengaluru", image: "https://via.placeholder.com/300x150?text=Prestige+Towers" },
    { name: "WeWork Residency", rent: 60000, address: "Indiranagar, Bengaluru", image: "https://via.placeholder.com/300x150?text=WeWork" }
  ];

  // Style function for conditional rent color
  const rentStyle = (amount) => ({
    color: amount > 60000 ? "green" : amount < 60000 ? "red" : "orange",
    fontWeight: "bold"
  });

  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
      {/* Heading */}
      <h1 style={{ textAlign: "center", color: "#333" }}>Office Space Rental App</h1>

      {/* Single office display */}
      <div style={{ border: "1px solid #ccc", padding: "15px", marginBottom: "20px" }}>
        <h2>{singleOffice.name}</h2>
        <img src={singleOffice.image} alt={singleOffice.name} style={{ width: "300px", height: "150px" }} />
        <p style={rentStyle(singleOffice.rent)}>Rent: ₹{singleOffice.rent}</p>
        <p>Address: {singleOffice.address}</p>
      </div>

      {/* List of office spaces */}
      <h2>Available Office Spaces</h2>
      {offices.map((office, index) => (
        <div key={index} style={{ border: "1px solid #ccc", padding: "15px", marginBottom: "10px" }}>
          <h3>{office.name}</h3>
          <img src={office.image} alt={office.name} style={{ width: "300px", height: "150px" }} />
          <p style={rentStyle(office.rent)}>Rent: ₹{office.rent}</p>
          <p>Address: {office.address}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
