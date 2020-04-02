const BASE_URL = "https://corona.lmao.ninja";

// ! Fetch covid-19 data by country
export async function fetchDataByCountry(country){
    // ! Build url with the string template literal
    const url = `${BASE_URL}/countries/${country}`;
    // ! Make a get request to the server to fetch covid-19 data for a country
    const response = await fetch(url);
    // ! Get the data from the server reponse
    const data = await response.json();
    return data;
}
