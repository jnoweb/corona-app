import React from 'react';

function Deaths(props) {
  const { deaths } = props;
  return (
    <div className="deaths">
      <h2>Deaths:</h2>
      <span className="deaths-numbers">{ deaths }</span>
    </div>
  );
}

export default Deaths;