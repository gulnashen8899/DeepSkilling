import React from "react";

function ListofPlayers() {

    const players = [
        { name: "Virat Kohli", score: 95 },
        { name: "Rohit Sharma", score: 82 },
        { name: "Shubman Gill", score: 65 },
        { name: "KL Rahul", score: 75 },
        { name: "Hardik Pandya", score: 60 },
        { name: "Ravindra Jadeja", score: 88 },
        { name: "R Ashwin", score: 55 },
        { name: "Mohammed Shami", score: 72 },
        { name: "Jasprit Bumrah", score: 68 },
        { name: "Kuldeep Yadav", score: 80 },
        { name: "Mohammed Siraj", score: 58 }
    ];

    const below70 = players.filter(player => player.score < 70);

    return (
        <div>
            <h2>All Players</h2>

            <ul>
                {players.map((player, index) => (
                    <li key={index}>
                        {player.name} - {player.score}
                    </li>
                ))}
            </ul>

            <h2>Players Scoring Below 70</h2>

            <ul>
                {below70.map((player, index) => (
                    <li key={index}>
                        {player.name} - {player.score}
                    </li>
                ))}
            </ul>

        </div>
    );
}

export default ListofPlayers;