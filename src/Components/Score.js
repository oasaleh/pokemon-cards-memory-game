import React from 'react';

function Score(props) {
  const { roundScore, bestScore } = props;
  return (
    <div className="scoreBoard">
      <div className="score round">
        <p>Round Score: {roundScore}</p>
      </div>
      <div className="score best">
        <p>Best Score: {bestScore}</p>
      </div>
    </div>
  );
}
export default Score;
