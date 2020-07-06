import React from 'react'
import  Country from "./Country";
import CountUp from 'react-countup';

const Countries = ({data}) => {
    const {confirmed,deaths,recovered} = data;
    if (!confirmed){
        return 'Loading...'
    }
    return (
            <div className="country-stats">
                <Country name="Infected" data = {<CountUp start={0} end={confirmed.value} duration={2.5} separator=","/>}/>
                <Country name="Deaths" data = {<CountUp start={0} end={deaths.value} duration={2.5} separator=","/>}/>
                <Country name="Recovered" data = {<CountUp start={0} end={recovered.value} duration={2.5} separator=","/>}/>
            </div>
    )
}
export default Countries;
