import React from 'react'
import boromir from "../assets/onedoesnot.png"
import { Link } from 'react-router-dom'

const NotFoundPage = ({profileUser}) => {
  return (
    <div className='notfound'>
      <img className='not-found-image' src={boromir} alt="notfound"/>
      <div className='book-back-box'>
      <Link to={"/"}>
        <button className='book-back-button'>
          Return home
        </button>
      </Link>
      </div>
    </div>
  )
}

export default NotFoundPage
