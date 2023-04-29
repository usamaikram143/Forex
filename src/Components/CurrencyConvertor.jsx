import React from 'react';
import { useEffect, useState } from 'react';
import Axios from 'axios';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import '../Css/CurrencyConvertor.css';
import {HiArrowNarrowRight} from "react-icons/hi";



const Currency_convertor = () => {
  // Initializing all the state variables
  const [info, setInfo] = useState([]);
  const [input,setInput]=useState(0);
  const [output,setOutput]=useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("pkr");
  const [options, setOptions] = useState([]);

  // Calling the api whenever the dependency changes
  useEffect(() => {
    Axios.get(
`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${from}.json`)
   .then((res) => {
      setInfo(res.data[from]);
    })
  }, [from]);

  useEffect(() => {
    setOptions(Object.keys(info));
    convert();
  }, [info])

 function convert(){
     var rate=info[to];
     setOutput(input*rate);
 }

  return (
    <div className='convertor_container'>
      <h1>Currency Convertor</h1>
      <div className='container'>
        <div>
          <h3>Amount</h3>
          <input type='text' placeholder='Enter the amount'
          onChange={(e) => setInput(e.target.value)}/>
        </div>
        <div className='middle'>
          <h3>From</h3>
          <Dropdown options={options}
              onChange={(e) => { setFrom(e.value) }}
              value={from} placeholder="From" />
        </div>

        <div className='switch'>
          <HiArrowNarrowRight size="30px"/>
        </div>

        <div className='right'>
          <h3>To</h3>
          <Dropdown options={options}
              onChange={(e) => {setTo(e.value)}}
              value={to} placeholder="To" />
        </div>
      </div>
      
      <div className='result'>
          <button onClick={()=>{convert()}}>Convert</button>
          <h2>Converted Amount:</h2>
          <p>{input+" "+from.toUpperCase()+" = "+output.toFixed(3)+" "+to.toUpperCase()}</p>
      </div>
    </div>
  );
}

export default Currency_convertor;