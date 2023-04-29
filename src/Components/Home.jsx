import React from 'react'
import '../Css/Home.css'
import pic from '../Pictures/home.jpg'

const Home = () => {
  return (
    <div style={{backgroundImage:'url('+pic+')',backgroundSize:'cover',height:"100vh"}}>
      <h1>Forex and Crypto Rates</h1>
    </div>
  )
}

export default Home