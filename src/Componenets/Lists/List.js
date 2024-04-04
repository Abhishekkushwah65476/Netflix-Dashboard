import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {  Link, NavLink, useLocation, useNavigate } from 'react-router-dom'
import Sidebar from '../Sidebar';
import ListEdit from './ListEdit';
import ListAdd from './ListAdd';

function List() {
 
    const state = useLocation()
    const navigate = useNavigate()

    const [data, setData] = useState([])
    const token = localStorage.getItem('token')
    // console.log(token)

    useEffect(() => {

        List()
    },[state])
    const List = () => {
        axios.get("http://localhost:4000/admin/getList", {
            headers: { "Content-Type": "multipart/form-data" },
            headers: { "token": token }
        }).then((res) => {
            console.log("res", res)
            setData(res.data.data)

        }).catch((err) => {
            console.log(err);
        })
    }

    const HandleDelete = (id) => {
        console.log("id", id);
        axios.delete(`http://localhost:4000/admin/deletelist/${id}`, {
            headers: { "token": token }
        }).then((res) => {
            console.log(res);
            List()
        })
    }

    return (
        <>
            <div className='d-flex'>
                <Sidebar />

                <div className='w-100 p-3 border' style={{ backgroundColor: "#19376D", color: '#fff' }}>

                    <div className='d-flex justify-content-between border-bottom pb-1'>
                        <h1>List</h1>

                        <div>
                           <ListAdd />
                        </div>
                      

                      
                    </div>

                    <div>
                        <table className=" bg-transparent table-bordered table-hover text-center " >
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Title</th>
                                    <th scope="col">Type</th>
                                    <th scope="col">genre</th>
                                    <th scope="col">Content</th>
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
                                                <td>{item.Type}</td>
                                                <td>{item.genre}</td>
                                                <td> {
                                                    item.Content.map((content) => {
                                                        // console.log("content", content)
                                                        return (<>
                                                            <div contentEditable='true' style={{ whiteSpace: 'nowrap' }}>
                                                                {content}
                                                            </div>
                                                        </>)
                                                    })
                                                }
                                                </td>

                                                <td className='' style={{ whiteSpace: 'nowrap' }}>


                                                    

                                                        <i className='bx bxs-edit mx-2 cursor-pointer fs-3' onClick={()=>navigate('/ListEdit',{state:item})} style={{ color: "green" }}  ></i>
                                                 

                                                    <i className='bx bxs-trash cursor-pointer fs-3' style={{ color: '#e50808' }} onClick={() => HandleDelete(item._id)} ></i>
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

export default List