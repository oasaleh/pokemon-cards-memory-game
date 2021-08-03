import React from 'react';

function Score(props) {
  const { roundScore, bestScore } = props;
  return (
    <div className='scoreBoard'>
      <p className='score round'>Round Score: {roundScore}</p>
      <p className='score best'>Best Score: {bestScore}</p>
    </div>
  );
}
export default Score;
