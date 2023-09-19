import { apiKeyy, clanIdd } from '../../data/api'
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ClanMembers = () => {
    const [clanMembers, setClanMembers] = useState([]);
    const [playerInfo, setPlayerInfo] = useState({});

    const apiKey = apiKeyy; // Replace with your World of Tanks API key
    const clanId = clanIdd; // Replace with your clan ID
    console.log("dsdssd \n" + clanId)

    useEffect(() => {
        // Function to fetch clan members
        const fetchClanMembers = async () => {
            try {
                const response = await axios.get(
                    `https://api.worldoftanks.eu/wot/clans/info/?application_id=${apiKey}&clan_id=${clanId}`
                );

                // Extract clan members data from the response
                const membersData = response.data.data[clanId];

                if (membersData && membersData.members) {
                    const membersList = Object.values(membersData.members);

                    // Set the clan members in the state
                    setClanMembers(membersList);
                }
            } catch (error) {
                console.error('Error fetching clan members:', error);
            }
        };

        // Call the function to fetch clan members
        fetchClanMembers();
    }, [apiKey, clanId]);

    // Function to fetch additional player information by account ID
    const fetchPlayerInfo = async (accountID) => {
        try {
            const response = await axios.get(
                `https://api.worldoftanks.eu/wot/account/info/?application_id=${apiKey}&account_id=${accountID}`
            );

            // Extract the desired fields from the response
            const playerData = response.data.data[accountID];

            // Update the playerInfo state with the new playerData
            setPlayerInfo((prevInfo) => ({
                ...prevInfo,
                [accountID]: playerData,
            }));
        } catch (error) {
            console.error('Error fetching player info:', error);
        }
    };

    // useEffect to fetch additional player info for each clan member
    useEffect(() => {
        clanMembers.forEach((member) => {
            // Fetch additional player info for each clan member
            fetchPlayerInfo(member.account_id);
        });
    }, [clanMembers, apiKey]);

    // Function to convert timestamp to a formatted date
    const formatDate = (timestamp) => {
        const date = new Date(timestamp * 1000); // Convert seconds to milliseconds
        return date.toLocaleDateString(); // You can adjust the date format as needed
    };

    return (
        <div className="clan-members">
            <h2>Clan Members</h2>
            <table>
                <thead>
                    <tr>
                        <th>Role</th>
                        <th>Joined At</th>
                        <th>Account Name</th>
                        <th>Last Battle Time</th>
                        <th>Global Rating</th>
                        <th>Statistics</th>
                    </tr>
                </thead>
                <tbody>
                    {clanMembers.map((member) => (
                        <tr key={member.account_id}>
                            <td>{member.role_i18n}</td>
                            <td>{formatDate(member.joined_at)}</td> {/* Convert and display joined_at as a date */}
                            <td>{member.account_name}</td>
                            <td>{formatDate(playerInfo[member.account_id]?.last_battle_time)}</td> {/* Convert and display last_battle_time as a date */}
                            <td>{playerInfo[member.account_id]?.global_rating}</td>
                            <td>
                                {/* Display the desired statistics */}
                                {playerInfo[member.account_id]?.statistics?.all?.spotted}
                                {/* Add more statistics fields as needed */}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ClanMembers;
