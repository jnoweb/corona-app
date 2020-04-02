import React from 'react';

function DeathsPerOneMillion(props) {
  const { deathsPerOneMillion } = props;
  return (
    <div className="deathsPerOneMillion">
      <h2>Deaths Per One Million:</h2>
      <span className="deathsPerOneMillion-numbers">{ deathsPerOneMillion }</span>
    </div>
  );
}

export default DeathsPerOneMillion;