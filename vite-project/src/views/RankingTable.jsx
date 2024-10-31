
const RankingTable = ({ activeTab }) => {
    const usersData = [
        { rank: 1, name: 'hyd', tier: 'Grandmaster', medals: { gold: 11, silver: 12, bronze: 0 }, points: 157888 },
        { rank: 2, name: 'Dieter', tier: 'Grandmaster', medals: { gold: 43, silver: 17, bronze: 3 }, points: 148152 },
        { rank: 3, name: 'Psi', tier: 'Grandmaster', medals: { gold: 37, silver: 9, bronze: 0 }, points: 127784 },
        { rank: 4, name: 'Pascal Pfeiffer', tier: 'Grandmaster', medals: { gold: 25, silver: 11, bronze: 3 }, points: 109810 },
    ];

    return (
        <div className="ranking-table">
            <table>
                <thead>
                    <tr>
                        <th>Rank</th>
                        <th>Tier</th>
                        <th>User</th>
                        <th>Medals</th>
                        <th>Points</th>
                    </tr>
                </thead>
                <tbody>
                    {usersData.map((user) => (
                        <tr key={user.rank}>
                            <td>{user.rank}</td>
                            <td>{user.tier}</td>
                            <td>{user.name}</td>
                            <td>
                                <span role="img" aria-label="gold medal">🥇 {user.medals.gold}</span>
                                <span role="img" aria-label="silver medal">🥈 {user.medals.silver}</span>
                                <span role="img" aria-label="bronze medal">🥉 {user.medals.bronze}</span>
                            </td>
                            <td>{user.points.toLocaleString()}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default RankingTable;
