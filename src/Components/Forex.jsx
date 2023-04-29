import * as React from 'react';
import { useQuery,gql } from '@apollo/client';
import '../Css/Forex.css';

const EXCHANGE_RATES = gql`
query GetExchangeRates {
  rates(currency: "USD") {
    currency
    rate
  }
}
`;

const TableHeader = () => {
    return (
        <thead>
            <tr>
                <th>Currency:</th>
                <th>1 USD:</th>
                <th>Inv 1 USD:</th>
            </tr>
        </thead>
    );
}

function ExchangeRates (){
    const{ loading,error,data}=useQuery(EXCHANGE_RATES);
    if(loading) return <p>Loading the Data...</p>;
    if(error) return <p>There is somthing wrong, sorry for the inconvenient. Please reload the page.</p>

    const rows = data.rates.map(({currency,rate})=> {
        return (
            <tr key={currency}>
                <td>{currency}</td>
                <td>{Math.round(rate*100)/100}</td>
                <td>{Math.round((1/rate)*1000)/1000}</td>
            </tr>
        );
    });

    return <tbody>{rows}</tbody>;
}

const Forex = () => {
    return (
        <div className='forex_container'>
            <h1>Forex</h1>
            <table>
                <TableHeader/>
                <ExchangeRates/>
            </table>
        </div>
    )
}

export default Forex;