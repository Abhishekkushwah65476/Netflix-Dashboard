import axios from 'axios'
import React, { useState } from 'react'
import { Link} from 'react-router-dom'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

function Register() { 

const Navigate = useNavigate()
  const [name,setName] =useState()
  const [username,setUsername] = useState()
  const [email,setEmail] = useState()
  const [phone,setPhone] = useState()
  const [password,setPassword] = useState()
  const [confirm,setConfirm] = useState()

  const submit=()=>{
   let  obj={
    User_id:username,
    name:name,
    Email_id:email,
    Phone_number:phone,
    password:password,
    confirm_password:confirm
    }
    axios.post("http://localhost:3003/addUser",obj,{
      headers:{"Content-Type":"application/json"},
      
    }).then((res)=>{

      if(res.data.success==true){
        setName('')
        setUsername('')
        setEmail('')
        setPhone('')
        setPassword('')
        setConfirm('')
        toast.success("Account created Successfully")
        setTimeout(() => {

          Navigate('/Login')

        }, 1000);
      }
     
      
      

    }).catch((error)=>{
      toast.error("Please fill all fields")
      console.log(error);
    })

    
  }


  return (
    <>
      <div className='d-flex justify-content-center align-items-center min-vh-100' style={{background:'#003366'}}>
        <div style={{background:'#6699CC'}} className='text-white p-1 rounded w-50 pt-5 pb-5'>
             <div className='text-center fw-bold fs-3 pb-4 font'>Create an account</div>
             <div className='w-75 mx-auto' >

                <input type='text' placeholder='Name' className='form-control mt-2' value={name} onChange={(e)=>setName(e.target.value)}/>
                <input type='text' placeholder='Username' className='form-control mt-2' value={username} onChange={(e)=>setUsername(e.target.value)}/>
                <input type='text' placeholder='Email' className='form-control mt-2' value={email} onChange={(e)=>setEmail(e.target.value)}/>
                <input type='Phone' placeholder='Phone' className='form-control mt-2' value={phone} onChange={(e)=>setPhone(e.target.value)}/>
                <input type='text' placeholder='Password' className='form-control mt-2' value={password} onChange={(e)=>setPassword(e.target.value)}/>
                <input type='text' placeholder='Confirm password' className='form-control mt-2' value={confirm} onChange={(e)=>setConfirm(e.target.value)}/>

                <div className='d-flex justify-content-between mt-2'>
                <a href="#" class="link-light lh-base font"><input type="checkbox" className='mx-1'/>Remember me</a>
                <Link to="/Login" class="text-light font">Login User</Link>
                </div>

                <div className='mt-2 text-center mt-5'>
                    <button className='btn btn-light w-50 font' onClick={submit}>Sign up</button>
                </div>
             </div>
        </div>

    </div>
    </>
  )
}

export default Register