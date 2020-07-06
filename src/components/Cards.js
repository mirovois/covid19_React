import React, { useState, useEffect} from 'react'
import Card from './Card';
import CountUp from 'react-countup';
import { fetchData } from '../api'


    const Cards = () => {
        

        const [fetchedInfo, setFetchedInfo] = useState({});

        useEffect(() => {
            const fetchAPI = async () => {
                setFetchedInfo(await fetchData());
            }
            fetchAPI();
        },[setFetchedInfo])
        console.log("Info from Cards component");
        const { confirmed, deaths, recovered,lastUpdate} = fetchedInfo;
        console.log(fetchedInfo);
        if (!confirmed){
            return 'Loading...'
        }

        return(
            <div className ="totals">
                <Card name = "Total cases" update={lastUpdate.toString().substring(0,19)} data ={confirmed.value} />
                <Card name = "Total deaths" update={lastUpdate.toString().substring(0,19)} data = {deaths.value} />
                <Card name = "Total recovered" update={lastUpdate.toString().substring(0,19)} data = {recovered.value} />

            </div>     
            )
    }

export default Cards;
