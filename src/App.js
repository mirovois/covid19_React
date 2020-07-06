import React from 'react';

import Cards from "./components/Cards";

import Header from "./components/Header";
import Countries from "./components/Countries"
import Chart from "./components/Chart";
import CountrySelector from "./components/CountrySelector";
import './App.css';
import { fetchData } from "./api";
// import { countries} from "./api";

export default class App extends React.Component {
  state = {
    data:{},
    country:"",
  }
  

  async componentDidMount(){
    const fetchedData = await fetchData();
    this.setState({data: fetchedData})
  }
  handleCountrySelector = async(country) =>{
    const fetchedData = await fetchData(country);
    this.setState({data:fetchedData,country:country});
    console.log(fetchedData);
  }
  render() {
    const { data, country } = this.state;
    console.log("Our state");
    console.log(data);
    return (
      
     
       
        <section>
          <Cards data={data}/>
          <CountrySelector  handleCountrySelector={this.handleCountrySelector}/>
          <div className="country-info">
            <Countries data={data}/>
            <Chart data={data} country={country}/>
          </div>
        </section>
      
      
       )
  }
}
