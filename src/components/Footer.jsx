import React from 'react'
import {NavLink} from 'react-router-dom';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-about-contact'>
        <NavLink to="/about"><h2>About us</h2></NavLink>
        <NavLink to="/contacts"><h2>Contact us</h2></NavLink>
      </div>
      <div className='footer-drj-product'>
        <br />
        <br />
        <p><em>A product of <br />
        DRJ Industries</em></p>
      </div>
    </div>
  )
}

export default Footer
