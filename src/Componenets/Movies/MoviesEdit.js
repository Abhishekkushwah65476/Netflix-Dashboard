import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
function MoviesEdit({data}) {

    const navigate = useNavigate();

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [title,setTitle] = useState(data.title);
    const [description,setDescription] = useState(data.description);
    const [img,setImg] = useState(data.img);
    const [imgTitle,setImgTitle] = useState(data.imgTitle);
    const [imgSm,setImgSm] = useState(data.imgSm)
    const [trailer,setTrailer] = useState(data.trailer)
    const [video,setVideo] = useState(data.video) 
    const [year,setYear] = useState(data.year) 
    const [limit,setLimit] = useState(data.limit) 
    const [genre,setGenre] = useState(data.genre) 

    const submitEdit=()=>{

      const token = localStorage.getItem('token')

      let formdata= new FormData()

      formdata.append('title',title)
      formdata.append('description',description)
      formdata.append('img',img[0])
      formdata.append('imgTitle',imgTitle[0])
      formdata.append('imgSm',imgSm[0])
      formdata.append('trailer',trailer[0])
      formdata.append('video',video[0])
      formdata.append('year',year)
      formdata.append('limit',limit)
      formdata.append('genre',genre)

      axios.put(`http://localhost:4000/admin/updateMovie/${data._id}`,formdata,{
      
        headers:{
          'Content-Type':'multipart/form-data',
          'token':token
        }
      }).then((res)=>{
       if(res.data.success==true){
       toast.success("data Updated SuccessFully")
       navigate("/Movies" ,{state:res.data.data} )
        handleClose()
       }else{
        toast.error("Internal server error")
       }
        
        console.log('hi',res);
      }).catch((err)=>{
        console.log(err);
      })
    }
  return (
    <>
      <i className='bx bxs-edit mx-2 cursor-pointer fs-3' style={{color:"green"}} onClick={handleShow}  >
      </i>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div>
        <div className='p-5 border bg-light w-100 container'>
    <div className='text-center fs-3 fw-bold '>
        Edit Movies
    </div>


    <label>Title</label>
    <input  className='form-control' type="text" onChange={(e)=>setTitle(e.target.value)} value={title} />

    <label>Description</label>
    <input  className='form-control' type="text" onChange={(e)=>setDescription(e.target.value)} value={description}/>

    <label>Img</label>
    <input  className='form-control' type="file" onChange={(e)=>setImg(e.target.files)} />

    <label>ImgTitle</label>
    <input  className='form-control' type="file" onChange={(e)=>setImgTitle(e.target.files)} />

    <label>ImgSm</label>
    <input  className='form-control' type="file" onChange={(e)=>setImgSm(e.target.files)}  />


    <label>Trailer</label>
    <input  className='form-control' type="file"  onChange={(e)=>setTrailer(e.target.files)} />

    <label>Video</label>
    <input  className='form-control' type="file"  onChange={(e)=>setVideo(e.target.files)} />


    <label>year</label>
    <input  className='form-control' type="text" onChange={(e)=>setYear(e.target.value)} value={year}/>

    <label>limit</label>
    <input  className='form-control' type="text" onChange={(e)=>setLimit(e.target.value)} value={limit} />

    <label>Genre</label>
    <input  className='form-control' type="text" onChange={(e)=>setGenre(e.target.value)} value={genre}/>
 
    <div className='mt-2'>
        <button className='btn btn-success' onClick={submitEdit} >Submit</button>
        <button className='btn btn-primary mx-2' onClick={handleClose}>Cancal</button>
    </div>
 </div>
            </div>
        </Modal.Body>
    
       
      </Modal>
    
    </>
  )
}

export default MoviesEdit