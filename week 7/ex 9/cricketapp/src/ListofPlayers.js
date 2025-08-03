import React from "react";

function ListofPlayers() {
  const players = [
    { name: "Virat Kohli", score: 85 },
    { name: "Rohit Sharma", score: 65 },
    { name: "Shubman Gill", score: 72 },
    { name: "KL Rahul", score: 55 },
    { name: "Suryakumar Yadav", score: 90 },
    { name: "Hardik Pandya", score: 60 },
    { name: "Ravindra Jadeja", score: 75 },
    { name: "R Ashwin", score: 40 },
    { name: "Bumrah", score: 88 },
    { name: "Shami", score: 67 },
    { name: "Siraj", score: 30 }
  ];

  const below70 = players.filter(player => player.score < 70);

  return (
    <div>
      <h2>List of Players</h2>
      <h3>All Players:</h3>
      <ul>
        {players.map((player, index) => (
          <li key={index}>{player.name} - {player.score}</li>
        ))}
      </ul>

      <h3>Players with score below 70:</h3>
      <ul>
        {below70.map((player, index) => (
          <li key={index}>{player.name} - {player.score}</li>
        ))}
      </ul>
    </div>
  );
}

export default ListofPlayers;
