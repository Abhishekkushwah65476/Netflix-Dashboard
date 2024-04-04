import React from 'react'
import { useNavigate } from 'react-router-dom';

function Token() {
    const navigate = useNavigate()
const storeToken = localStorage.getItem('token')
   console.log(storeToken);
 if(storeToken==null){
   navigate('/')
 }
  return (
    <>
    <div>Hi</div>
    </>
  )
}

export default Token

