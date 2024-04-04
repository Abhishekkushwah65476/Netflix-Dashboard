import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Navigate, unstable_HistoryRouter, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function ListEdit() {
 

  const {state} = useLocation()
  console.log("state",state._id);

  const navigate = useNavigate()

  const [title,setTitle] = useState(state.title);
  const [type,setType] = useState(state.Type);
  const [genre,setGenres] = useState(state.genre);
  const [content,setContent] = useState(JSON.stringify(state.Content));


  const submit =(id)=>{

  console.log("hi",id)

    let token = localStorage.getItem('token');

   let  obj={
      title:title,
      Type:type,
      genre:genre,
      Content:content
    }

    axios.put(`http://localhost:4000/admin/updateList/${id}`,obj,{
      headers:{'Content-Type': 'application/json','token':token}
    }).then((res)=>{
      console.log(res)

      navigate('/lists')

    }).catch((error)=>{
      console.log(error)
    })

  }


  return (
    <>
    {/* <div>
      hi
    </div> */}
       {/* <i className='bx bxs-edit mx-2 cursor-pointer fs-3' style={{color:"green"}}    >
      </i> */}

      <div className='mt-5'>
        <div className='p-5 border bg-light w-100 container'>
    <div className='text-center fs-3 fw-bold '>
        Edit Movies
    </div>
    {/* onChange={(e)=>setGenre(e.target.value)}   value={genre} */}
   
    <label>Title</label>
    <input  className='form-control' type="text" onChange={(e)=>setTitle(e.target.value)} value={title} />

    <label>Type</label>
    <input  className='form-control' type="text" onChange={(e)=>setType(e.target.value)} value={type} />

    <label>Genre</label>
    <input  className='form-control' type="text" onChange={(e)=>setGenres(e.target.value)} value={genre} />

    <label>Content</label>
    {/* {
        content.map((item,index)=>{
            return <input key={index}  className='form-control' type="text" onChange={(e)=>setContent(e.target.value)}   value={item}/>
        })
    } */}
             <input  className='form-control' type="text" onChange={(e)=>setContent(e.target.value)}  value={content}/>
    

 
    <div className='mt-2'>
        <button className='btn btn-success' onClick={()=>submit(state._id)} >Submit</button>
        <button className='btn btn-primary mx-2' >Cancal</button>
    </div>
 </div>
            </div>
    </>
  )
}

export default ListEdit