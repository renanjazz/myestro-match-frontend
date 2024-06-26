import React, { useState } from 'react'
import {Link, useNavigate } from 'react-router-dom'
import logowhite from '../assets/myestro-w.png'
import hamburger from '../assets/hamburger-icon.png'
import close from '../assets/close-icon.png'
import usericon from '../assets/user-profile-icon.png'


const Navbar = () => {
  const [showMenu, setShowMenu] = useState (false)

  function handleNavbarCollapse(){
    if (showMenu) {
      setShowMenu (false)
    } else {
      setShowMenu (true)
    }
  }
  
  return (
    <nav className='navbar'>
        <div className='closed-nav'>
          <Link to="UserProfilePage">
            <img
            src={usericon}
            alt='user-icon'
            className='user-icon'
            />
          </Link>
          <Link to="/">
            <img
            src={logowhite}
            alt='logo'
            className='nav-logo'
            />
          </Link>

          {showMenu ? (
            <span onClick={ () => handleNavbarCollapse()}>
            <img
            src={close}
            alt='close'
            className='close-icon'
            />
            </span>
          ) : (
            <span onClick={ () => handleNavbarCollapse()}>
              
            <img
            src={hamburger}
            alt='hamburger'
            className='hamburger-icon'
            />
            </span>
          ) }
        </div>
        {showMenu && (

<div className='opened-nav'>
  <div className='nav-row'>
    <Link>
    <button className='nav-link'>Find a teacher</button>
    </Link>
    <Link>
      <button className='nav-link'>Class schedule</button>
   </Link>
  </div>
  <div className='nav-row'>
    <Link>
      <button className='nav-link'>Find a studio</button>
    </Link>
    <Link>
      <button className='nav-link'>Studio bookings</button>
    </Link>
  </div>
  <div className='nav-row'>
    <Link>
      <button className='nav-link'>My profile</button>
    </Link>
    <Link>
      <button className='nav-link'>Login/Logout</button>
    </Link>
  </div>
</div>

        )}
        
    </nav>
  )
}

export default Navbar
