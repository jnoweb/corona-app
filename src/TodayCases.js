import React from 'react';

function TodayCases(props) {
  const { todayCases } = props;
  return (
    <div className="today-cases">
      <h2>Today's Cases:</h2>
      <span className="today-cases-numbers">{ todayCases }</span>
    </div>
  );
}

export default TodayCases;