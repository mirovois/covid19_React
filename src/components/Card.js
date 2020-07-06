import React from 'react';


const Card = (props) => {
    const {data, name,update} = props;
    const switchClass = (name) =>{
        switch(name){
            case "Total cases":
                return "#210366";
            case "Total deaths":
                return "#740d2c";
            case "Total recovereds":
                return "#07610f";
        default:
            return ""
        }}
    
    return (
    <div className="total">
        <h1  style = {{color:switchClass(name)}} >{data}</h1>
        <h2 className = "total-title">{name}</h2> 
        <h2 className = "total-update">Last updated:</h2>
        <h3>{update}</h3> 
    </div>
    )
    }
export default Card;
