import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from 'react-router-dom';

function ListAdd() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const navigate = useNavigate()
    const [title,setTitle]= useState()
    const [type,setType] = useState();
    const [genre,setGenres] = useState();
    const [content,setContent] = useState('')
    // console.log("NewArray",NewArray)
    
    const token =localStorage.getItem('token')
    
    const Submit =()=>{
      const NewArray = content.split(',')
      
      let obj ={
        title: title,
        Type: type,
        genres: genre,
        Content: JSON.stringify(NewArray),
      }
      // console.log("check",typeof NewArray)

      axios.post("http://localhost:4000/admin/addList",obj,{
        headers: {'Content-Type': 'application/json',
         token:token
      },
      }).then((res)=>{
        navigate("/Lists", {state:{key:res.data.data}})
        console.log(res)
        handleClose()
        
      }).catch((err)=>{
        console.log(err)
      })
    }
  return (
    <>
    
      <button className='btn btn-outline-primary' onClick={handleShow}  >Add</button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add List</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <label>Title</label>
            <input type='text' className='form-control' onChange={(e)=>setTitle(e.target.value)}/>

            <label>Type</label>
            <input type='text' className='form-control' onChange={(e)=>setType(e.target.value)}/>
            
            <label>Genre</label>
            <input type='text' className='form-control' onChange={(e)=>setGenres(e.target.value)}/>

            <label>Content</label>
            <input type='text' className='form-control' onChange={(e)=>setContent(e.target.value)}/>
          </div>
            
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={Submit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

    
    </>
  )
}

export default ListAdd