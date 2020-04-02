import React from 'react';

function Recovered(props) {
  const { recovered } = props;
  return (
    <div className="recovered">
      <h2>Recovered:</h2>
      <span className="recovered-numbers">{ recovered }</span>
    </div>
  );
}

export default Recovered;