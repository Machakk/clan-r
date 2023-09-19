import React from 'react';

const TopPlayers = () => {
    const players = [
        {
            id: 1,
            name: 'Player 1',
            team: 'Team A',
            score: 1000,
            // imageUrl: '{}', // Replace with actual image URL
        },
        {
            id: 2,
            name: 'Player 2',
            team: 'Team B',
            score: 950,
            // imageUrl: 'player2.jpg', // Replace with actual image URL
        },
        // Add more players as needed
    ];

    return (
        <div className="top-players">
            <h2>Top Players</h2>
            <ul>
                {players.map((player) => (
                    <li key={player.id} className="player-item">
                        {/* <img src={player.imageUrl} alt={player.name} /> */}
                        <div className="player-info">
                            <h3>{player.name}</h3>
                            <p>Team: {player.team}</p>
                            <p>Score: {player.score}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TopPlayers;
