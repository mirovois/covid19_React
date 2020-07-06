import React from 'react';


 const Country = (props) => {
    const {data, name} = props;
    return (
        <div className="total-country">
            <h1 className = "name">{name}</h1>
            <h2 className = "country-amount">{data}</h2> 
        </div>
    )
}
export default Country;
