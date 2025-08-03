import React, { useState } from "react";
import GuestPage from "./GuestPage";
import UserPage from "./UserPage";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Handle login and logout
  const handleLogin = () => setIsLoggedIn(true);
  const handleLogout = () => setIsLoggedIn(false);

  // Element variable for button
  const button = isLoggedIn ? (
    <button onClick={handleLogout} style={{ marginBottom: "20px" }}>Logout</button>
  ) : (
    <button onClick={handleLogin} style={{ marginBottom: "20px" }}>Login</button>
  );

  // Prevent rendering UserPage if not logged in
  const page = isLoggedIn ? <UserPage /> : <GuestPage />;

  return (
    <div style={{ fontFamily: "Arial", padding: "20px" }}>
      <h1>Ticket Booking App</h1>
      {button}
      {page}
    </div>
  );
}

export default App;
