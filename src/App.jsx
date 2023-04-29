import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Nav from './Components/Nav'
import Home from './Components/Home'
import Forex from './Components/Forex'
import Crypto from './Components/Crypto'
import CurrencyConvertor from './Components/CurrencyConvertor'
import Footer from './Components/Footer'
import Scroll from './Components/Scroll'


const App = () => {
  return (
    <Router>

      <Nav/>
      <Scroll/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/forex' element={<Forex/>}/>
        <Route path='/crypto' element={<Crypto/>}/>
        <Route path='/currencyConvertor' element={<CurrencyConvertor/>}/>
      </Routes>
      <Footer/>
    </Router>
    
  )
}

export default App