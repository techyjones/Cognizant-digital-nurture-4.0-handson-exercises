import React from "react";

function IndianPlayers() {
  const allPlayers = ["Virat", "Rohit", "Gill", "Rahul", "SKY", "Hardik", "Jadeja", "Ashwin"];
  const oddPlayers = allPlayers.filter((_, index) => index % 2 === 0);
  const evenPlayers = allPlayers.filter((_, index) => index % 2 !== 0);

  const T20players = ["Bumrah", "Siraj"];
  const RanjiTrophyPlayers = ["Pujara", "Rahane"];
  const mergedPlayers = [...T20players, ...RanjiTrophyPlayers];

  return (
    <div>
      <h2>Indian Players</h2>
      <h3>Odd Team Players:</h3>
      <ul>
        {oddPlayers.map((player, index) => <li key={index}>{player}</li>)}
      </ul>

      <h3>Even Team Players:</h3>
      <ul>
        {evenPlayers.map((player, index) => <li key={index}>{player}</li>)}
      </ul>

      <h3>Merged Players (T20 + Ranji Trophy):</h3>
      <ul>
        {mergedPlayers.map((player, index) => <li key={index}>{player}</li>)}
      </ul>
    </div>
  );
}

export default IndianPlayers;
