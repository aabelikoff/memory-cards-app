import React, { useState } from 'react';

export default function Score(props) {
  const currentScore = props.score;
  const [bestScore, setBestScore] = useState(0);

  if (props.score > bestScore) {
    setBestScore(props.score);
  }

  return (
    <div className="score">
      <p>Current score: {currentScore}</p>
      <p>Best score: {bestScore}</p>
    </div>
  );
}
