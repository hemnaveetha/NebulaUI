import React from 'react';

export default function Profiles({ leaderboard }) {
  return (
    <div id="profile">
      {Item(leaderboard)}
    </div>
  );
}

function Item(data) {
  return (
    <>
      {data.map((value, index) => (
        <div className="flex" key={index}>
          <div className="item">
            <img src={value.img} alt={value.name} />
            <div className="info">
              <h3 className='name text-dark'>{value.name}</h3>
              <span>{value.location}</span>
            </div>
          </div>
          <div className="item">
            <span>{value.score}</span>
          </div>
        </div>
      ))}
    </>
  );
}
