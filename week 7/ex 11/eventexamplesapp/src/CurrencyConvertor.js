import React, { useState } from "react";

function CurrencyConvertor() {
  const [rupees, setRupees] = useState("");
  const [euros, setEuros] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!rupees || isNaN(rupees)) {
      alert("Please enter a valid number");
      return;
    }
    const converted = (rupees / 90).toFixed(2); // Approx conversion rate
    setEuros(converted);
  };

  return (
    <div style={{ border: "1px solid #ccc", padding: "20px", width: "300px" }}>
      <h2>Currency Converter</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Indian Rupees:{" "}
          <input
            type="text"
            value={rupees}
            onChange={(e) => setRupees(e.target.value)}
          />
        </label>
        <button type="submit" style={{ marginLeft: "10px" }}>
          Convert
        </button>
      </form>
      {euros !== null && (
        <p>
          {rupees} INR = <strong>{euros} EUR</strong>
        </p>
      )}
    </div>
  );
}

export default CurrencyConvertor;
