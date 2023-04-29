import React from 'react'
import { NavLink } from 'react-router-dom'
import '../Css/Nav.css'
import {BsCurrencyExchange} from 'react-icons/bs'

const Nav = () => {
  return (
    <div className='nav'>
      <NavLink to='/' className='link'>{BsCurrencyExchange}</NavLink>
      <NavLink to='/' className='link'>Home</NavLink>
      <NavLink to='/forex' className='link'>Forex</NavLink>
      <NavLink to='/crypto' className='link'>Crypto</NavLink>
      <NavLink to='currencyConvertor' className='link'>Currency Convertor</NavLink>
    </div>
  )
}

export default Nav