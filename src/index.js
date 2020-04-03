import React, { useState, useEffect }  from "react";
import ReactDOM from "react-dom";
import Country from "./Country";
import Cases from "./Cases";
import Deaths from "./Deaths";
import Recovered from "./Recovered";
import TodayCases from "./TodayCases";
import TodayDeaths from "./TodayDeaths";
import DeathsPerOneMillion from "./DeathsPerOneMillion";
import { fetchDataByCountry } from "./api";
import {Header} from './Header'

import "./index.css";

function Root() {
  // ! Initialises state
  const [data, setData] = useState(null);
  const [country, setCountry] = useState('Germany');

  // ! Fetch data by country on intial mount and for every change in the selected country
  useEffect(() => {
    const fetchData = async country => {
      const data = await fetchDataByCountry(country);
      setData(data);
      console.log(data);
    };
    fetchData(country);
  }, [country]);

  // ! Loading indicator
  if (!data) {
    return <div>loading...</div>;
  }

  return (
    <div className="container">
      <Header>Corona App</Header>
      <Country country={country} handleCountryChange={setCountry} />
      <Cases cases={data.cases} />
      <Deaths deaths={data.deaths} />
      <Recovered recovered={data.recovered} />
      <TodayCases todayCases={data.todayCases} />
      <TodayDeaths todayDeaths={data.todayDeaths} />
      <DeathsPerOneMillion deathsPerOneMillion={data.deathsPerOneMillion} />
    </div>
  );
}

ReactDOM.render(<Root />, document.querySelector("#root"));
