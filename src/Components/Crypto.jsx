import { React, useEffect, useState } from "react";
import Axios from "axios";
import '../Css/Crypto.css'


const Crypto = () => {
    const [crypto, setCrypto] = useState([]);
    
    useEffect(() => {
        Axios.get(
`https://api.coinstats.app/public/v1/coins?skip=0&limit=100¤cy=USD`
    ).then((res) => {
      setCrypto(res.data.coins);
    });
  }, []);

  const TableHeader = () => {
    return(
      <thead>
        <tr>
          <th>Icon</th>
          <th>Symbol</th>
          <th>Name</th>
          <th>Price $</th>
        </tr>
      </thead>
    )
  };

  function CryptoRates(){
    const rows = crypto.map((val, key) => {
      return (
        <tr id={key}>
          <td><img src={val.icon} alt="logo" className="logo"/></td>
          <td>{val.symbol}</td>
          <td>{val.name}</td>
          <td>{val.price.toFixed(2)}</td>
        </tr>
      );
    });

    return <tbody>{rows}</tbody>
  }

  return (
    <div className="crypto_container">
      <h1>Cryptocurrencies</h1>
      <table>
        <TableHeader/>
        <CryptoRates/>
      </table>
    </div>
  );
}

export default Crypto;