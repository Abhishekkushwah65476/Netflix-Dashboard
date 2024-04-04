import React from 'react'
import { useNavigate } from 'react-router-dom'

function Header() {

    const navigate = useNavigate()

    const storeToken=localStorage.getItem('token')

    if(storeToken==null){
        navigate('/')
    }
      
  return (
    <>
    <marquee className="d-none">
        welcom to the admin
    </marquee>
    </>
  )
}

export default Header