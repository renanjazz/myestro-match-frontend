import React from 'react'
import {NavLink} from 'react-router-dom';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-about-contact'>
        <div>
        <NavLink to="/about" className="footer-text">About us</NavLink>
        </div>
        <div>
        <NavLink to="/contacts" className="footer-text">Contact us</NavLink>
        </div>
      </div>
      <div className='footer-drj-product'>
       <p><em>A product of <br />
        DRJ Industries</em></p>
      </div>
    </div>
  )
}

export default Footer
