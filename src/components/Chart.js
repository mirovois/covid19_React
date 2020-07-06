import React, {useState, useEffect} from 'react';
import {fetchDailyData} from '../api';
import { Line} from 'react-chartjs-2';



const Chart = ( {data, country} ) => {

    // const { confirmed, deaths, recovered} = data;
    const [dailyData, setDailyData] = useState([]);

    useEffect(() =>{
        const fetchAPI = async () => {
            setDailyData(await fetchDailyData());
        }
        
        fetchAPI();
    },[]);
    console.log("Data from Chart component");
    console.log(dailyData)

    const lineChart = (
        dailyData.length ? (
        <Line data ={{
            labels:dailyData.map(({ date }) => date),
            datasets:[{
                data:dailyData.map(({confirmed}) => confirmed),
                label: "Infected",
                borderColor: "#3333ff",
                fill:true,
            },{
                data:dailyData.map(({deaths}) => deaths),
                label: "Deaths",
                borderColor: "red",
                fill:true,
            },
            {
                data:dailyData.map(({recovered}) => recovered),
                label: "Recovered",
                borderColor: "green",
                fill:true,
            }
        ]
        }}
        />):null
    );
    
    return (
        <div className="chart">
            <h1>{country}</h1>
            {lineChart}
        </div>
    )
}

export default Chart;
