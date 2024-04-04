import React, { useEffect, useState } from 'react'
import Sidebar from '../Componenets/Sidebar'
import axios from 'axios'


function Genre() {

  const [data,setData]= useState([])


  useEffect(() => {

  List()
  }, [])


  const List =()=>{

    const token = localStorage.getItem('token')
  
    axios.get("http://localhost:4000/admin/getGenre",{
      headers: { "Content-Type": "application/json","token":token }
    }).then((res)=>{
      console.log("res",res)
      setData(res.data.list)

    }).catch((err)=>{
      console.log(err)
    })
  }
  



  return (
    <>
       <div className='d-flex'>
                <Sidebar/>

                <div className='w-100 p-3 border' style={{ backgroundColor: "#19376D", color: '#fff' }}>

                    <div className='d-flex justify-content-between border-bottom pb-1'>
                        <h1>Genre</h1>

                        <div>
                           {/* <ListAdd /> */}
                           <button className='btn btn-outline-primary'>Add</button>
                        </div>
                      

                      
                    </div>

                    <div>
                        <table className=" bg-transparent table-bordered table-hover text-center " >
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Id</th>
                                    <th scope="col">Movies</th>
                                    <th scope="col" className='text-center'>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                              {
                                data.map((item,index)=>{
                                  // console.log(item)
                                  return(<>
                            <tr>
                              <td key={index}>{index+1}</td>
                              <td>{item._id}</td>
                              <td>{item.Movies}</td>
                              <td>
                                <button className='btn btn-primary mx-2'>Edit</button>
                                <button className='btn btn-danger mx-2'>Delete</button>                              
                              </td>
                            </tr>   

                                  </>)
                                })
                              }
                            </tbody>
                        </table >
                    </div>
                </div>
            </div>
   
    </>
  )
}

export default Genre