import React, { useState } from 'react';
import Profiles from './Profiles';
import { Leaderboard } from './database';

export default function Board() {
  const [period, setPeriod] = useState(0);

  const handleClick = (e) => {
    setPeriod(Number(e.target.dataset.id)); // Ensure period is a number
  };

  return (
    <div className="board">
      <h1 className='leaderboard'>Leaderboard</h1>

      <div className="duration">
        <button onClick={handleClick} data-id='7'>7 Days</button>
        <button onClick={handleClick} data-id='30'>30 Days</button>
        <button onClick={handleClick} data-id='0'>All-Time</button>
      </div>

      <Profiles leaderboard={filterLeaderboard(Leaderboard, period)} />
    </div>
  );
}

function filterLeaderboard(data, period) {
  const today = new Date();
  const previous = new Date(today);
  previous.setDate(previous.getDate() - period);

  const filtered = data.filter(val => {
    const userDate = new Date(val.dt);
    return period === 0 || (userDate >= previous && userDate <= today);
  });

  // Sort in descending order
  return filtered.sort((a, b) => b.score - a.score);
}
