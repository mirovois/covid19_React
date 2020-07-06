import React, { useEffect, useState } from 'react';
import { fetchCountries } from "../api";


const CountrySelector = ({ handleCountrySelector }) => {
    const [fetchedCountries,setFetchedCountries] = useState([]);
    // const [count,setCount] = useState(0);
    // const[isRed,setRed] = useState(false)
    // const increment = () => {
    //     setCount(count+1);
    //     setRed(!isRed);
    // }

    useEffect(() =>{
        const fetchAPI = async () => {
            setFetchedCountries(await fetchCountries());
        }
        fetchAPI();
    },[]);
    console.log("Info from CountrySelector component");
    console.log(fetchedCountries);
    
    return (
            <div className = "country-selector">
                <h1>CountrySelector</h1> 
                <select defaultValue="" onChange={(e) =>handleCountrySelector(e.target.value)}>
                    {fetchedCountries.map((country,index) =>(
                        <option key={index} value = {country}>{country}</option>
                    ))}
                </select>
            </div>   
    )
}
export default CountrySelector;
