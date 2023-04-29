import React from 'react'
import '../Css/Footer.css'
import {BsFacebook} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsYoutube} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer id='footer'>
      <a href="#" className='footer__logo'>Usama</a>
      <div className="footer__socials">
        <a href="https://www.facebook.com/profile.php?id=100004154944958" target='blank'><BsFacebook/></a>
        <a href="https://www.instagram.com/usama.ikram1122/" target='blank'><BsInstagram/></a>
        <a href="https://github.com/usamaikram143" target='blank'><BsGithub/></a>
        <a href="https://www.youtube.com/@usamaikram7355" target='blank'><BsYoutube/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; USAMA's Forex Site. All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer