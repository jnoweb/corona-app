import React from 'react';

function TodayDeaths(props) {
  const { todayDeaths } = props;
  return (
    <div className="today-deaths">
      <h2>Today's Deaths:</h2>
      <span className="today-deaths-numbers">{ todayDeaths }</span>
    </div>
  );
}

export default TodayDeaths;