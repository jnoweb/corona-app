import React from 'react';

function Cases(props) {
  const { cases } = props;
  return (
    <div className="cases">
      <h2>Coronavirus Cases:</h2>
      <span className="case-numbers">{ cases }</span>
    </div>
  );
}

export default Cases;