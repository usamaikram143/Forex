import React from 'react'
import '../Css/Scroll.css'
import {RxDoubleArrowUp} from 'react-icons/rx'
import {RxDoubleArrowDown} from 'react-icons/rx'

const Scroll = () => {
  return (
    <div className='scroll'>
        <a href="#"><RxDoubleArrowUp/></a>
        <a href="#footer"><RxDoubleArrowDown/></a>
    </div>
  )
}

export default Scroll