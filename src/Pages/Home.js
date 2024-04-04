import React from 'react'
import Sidebar from '../Componenets/Sidebar'
import Genre from './Genre'

function Home() {

 
  return (
    
    <>
    <div className='d-flex'>
      <Sidebar/>
      <div className='w-100 p-3 border' style={{backgroundColor:"#19376D",color:'#fff'}}>
        <Genre/>
      </div>
        
    </div>
    </>
  )
}

export default Home