import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Header from '../Auth/Header'

function MoviesAdd() {
    const [title,setTitle] = useState('')
    const [description,setDescription] = useState('')
    const [img,setImg] = useState('')
    const [imgTitle,setImgTitle] = useState('')
    const [imgSm,setImgSm] = useState('')
    const [trailer,setTrailer] = useState('')
    const [video,setVideo] = useState('') 
    const [year,setYear] = useState('') 
    const [limit,setLimit] = useState('') 
    const [genre,setGenre] = useState('') 
    // const [isSeries,setIsSeries] = useState('') 

    const navigate = useNavigate()

    const submit=()=>{

        const token = localStorage.getItem('token')

        let formdata= new FormData()

        formdata.append('title',title)
        formdata.append('description',description)
        formdata.append('img',img[0])
        formdata.append('imgTitle',imgTitle)
        formdata.append('imgSm',imgSm[0])
        formdata.append('trailer',trailer[0])
        formdata.append('video',video[0])
        formdata.append('year',year)
        formdata.append('limit',limit)
        formdata.append('genre',genre)
        
       
        // console.log(obj);
        axios.post("http://localhost:4000/admin/addMovie",formdata,{
            headers:{"content-type": "multipart/form-data",
            "token":token
        },
           
        }).then((res)=>{
            console.log("post",res);
           navigate("/Movies")
            
        }).catch((err)=>{
            console.log(err.message);
        })
    }


  return (
    <>
<Header/>
 <div className='p-5 border bg-light w-100 container m-5'>
    <div className='text-center fs-3 fw-bold '>
        Add Movies
    </div>


    <label>Title</label>
    <input  className='form-control' type="text" onChange={(e)=>setTitle(e.target.value)} />

    <label>Description</label>
    <input  className='form-control' type="text" onChange={(e)=>setDescription(e.target.value)}/>

    <label>Img</label>
    <input  className='form-control' type="file" onChange={(e)=>setImg(e.target.files)} />

    <label>ImgTitle</label>
    <input  className='form-control' type="text" onChange={(e)=>setImgTitle(e.target.value)}/>

    <label>ImgSm</label>
    <input  className='form-control' type="file" onChange={(e)=>setImgSm(e.target.files)} />


    <label>Trailer</label>
    <input  className='form-control' type="file"  onChange={(e)=>setTrailer(e.target.files)}/>

    <label>Video</label>
    <input  className='form-control' type="file"  onChange={(e)=>setVideo(e.target.files)}/>


    <label>year</label>
    <input  className='form-control' type="text" onChange={(e)=>setYear(e.target.value)}/>

    <label>limit</label>
    <input  className='form-control' type="text" onChange={(e)=>setLimit(e.target.value)} />

    <label>Genre</label>
    <input  className='form-control' type="text" onChange={(e)=>setGenre(e.target.value)} />
     
    <div className='mt-2'>
        <button className='btn btn-success' onClick={submit}>Submit</button>
        <Link to="/Movies"><button className='btn btn-primary mx-2'>Cancal</button></Link>
    </div>
  
   
 </div>

    </>
  )
}

export default MoviesAdd