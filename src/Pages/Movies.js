import React, { useEffect, useState } from 'react'
import Sidebar from '../Componenets/Sidebar'
import GenraEdit from '../Componenets/GenraEdit'
import axios from 'axios'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import MoviesEdit from '../Componenets/Movies/MoviesEdit'
import { toast } from 'react-toastify'
import Header from '../Componenets/Auth/Header'

function Movies() {

    
    const state = useLocation()
    const navigate = useNavigate()
    const [data, setData] = useState([])
    // const [token,setToken] =useState()
    // console.log("token",token)



    useEffect(() => {
      
        List()
        
    }, [state])


    const List =()=>{ 
    const  token = localStorage.getItem('token')
        
        axios.get("http://localhost:4000/admin/getallMovies", {
            headers: { "Content-Type": "multipart/form-data" },
            headers: { "token": token}
        }).then((res) => {

            setData(res.data.Data)

        }).catch((err) => {
            toast.error(err.message)
            console.log(err);

        })
    }

    const HandleDelete =(id)=>{

    const  token = localStorage.getItem('token')


        console.log("id",id);
        axios.delete(`http://localhost:4000/admin/deleteMovie/${id}`,{
            headers:{"token":token}
        }).then((res)=>{
            console.log("delete",res);
            List()
        })
    }

    return (
        <>
        <Header/>
            <div className='d-flex'>
                <Sidebar />

                <div className='w-100 p-3 border' style={{ backgroundColor: "#19376D", color: '#fff' }}>


                    <div className='d-flex justify-content-between border-bottom pb-1'>
                        <h1>Movies</h1>
                        <Link to='/MoviesAdd'>
                        <button className='btn btn-outline-primary'>Add</button>
                        </Link>
                    </div>

                    <div>
                        <table className=" bg-transparent table-bordered table-hover text-center " >
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Title</th>
                                    <th scope="col">Description</th>
                                    <th scope="col">Img</th>
                                    <th scope="col">ImgTitle</th>
                                    <th scope="col">ImgSm</th>
                                    <th scope="col">Trailer</th>
                                    <th scope="col">Video</th>
                                    <th scope="col">year</th>
                                    <th scope="col">limit</th>
                                    <th scope="col">Genre</th>
                                    <th scope="col">isSeries</th>
                                    <th scope="col" className='text-center'>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    data.map((item, index) => {
                                        // console.log("item", item)
                                        return (<>
                                            <tr>

                                                <th key={index}>{index + 1}</th>
                                                <td>{item.title}</td>
                                                <td>{item.description}</td>
                                                <td><img src={item.img} width={50} /></td>
                                                <td>{item.imgTitle}</td>
                                                <td><img src={item.imgSm} width={50} /></td>
                                                <td> 
                                                    <video width={70} height={70} controls>
                                                        <source src={item.video} type="video/mp4" />
                                                    </video>
                                                </td>
                                                <td> 
                                                    <video width={70} height={70} controls>
                                                        <source src={item.trailer} type="video/mp4" />
                                                    </video>
                                                </td>
                                              


                                                <td>{item.year}</td>
                                                <td>{item.limit}</td>
                                                <td>{item.genre}</td>
                                                <td>{item.isSeries==true?<div className='text-success'>true</div>:<div className='text-danger'>false</div>}</td>
                                                <td className='' style={{whiteSpace:'nowrap'}}>
                                                    <MoviesEdit data={item}/>
                                                    <i className='bx bxs-trash cursor-pointer fs-3' style={{color:'#e50808'}} onClick={()=>HandleDelete(item._id)} ></i>
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

export default Movies