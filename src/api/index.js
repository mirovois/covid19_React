import axios from 'axios';

const url = "https://covid.mathdro.id/api";

export const fetchData = async(country) => {
  let floatingUrl = url;
  if(country) {
    floatingUrl = `${url}/countries/${country}`
  }

  try{  
    const { data: { confirmed,deaths,recovered,lastUpdate } } = await axios.get(floatingUrl);
    return { confirmed,deaths,recovered,lastUpdate };
} catch (error) {
} 
}

export const fetchDailyData = async () => {
  try{
    const { data } = await axios.get(`${url}/daily`);
    // console.log(data);
    const modifiedData = data.map(dailyData =>({
      confirmed:dailyData.confirmed.total,
      deaths:dailyData.deaths.total,
      revovered:dailyData.recovered.total,
      lastUpdate:dailyData.lastUpdate,
      date:dailyData.reportDate
    }));
    console.log(modifiedData);
    return modifiedData;
  }
  catch(error){}
}

export const fetchCountries = async () => {
  try{
    const { data: { countries }} = await axios.get(`${url}/countries`);
    // console.log(countries);
    return countries.map(country => country.name)
  } catch(error){}

}