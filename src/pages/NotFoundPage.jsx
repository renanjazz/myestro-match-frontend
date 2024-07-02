import React from 'react'
import boromir from "../assets/onedoesnot.png"

const NotFoundPage = ({profileUser}) => {
  return (
    <div className='notfound'>
      <img src={boromir} alt="notfound"/>
    </div>
  )
}

export default NotFoundPage
