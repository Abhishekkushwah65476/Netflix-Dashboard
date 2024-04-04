import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { Navigate } from 'react-router-dom'

function Login() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

 
  const submit = () => {
    let obj = {
      Email: email,
      password: password,
    
    }
    axios.post("http://localhost:4000/UserLogin", obj, {
      headers: { "Content-Type": "Application/json" }
    }).then((res) => {
      console.log("hi", res);
      if (res.data.success == true) {

        localStorage.setItem("token", res.data.Data.token)

        toast.success("Login Success")

     navigate("/Movies")

      }
    }).catch((error) => {
      console.log(error);
      toast.error("Invalid User")

    })
  }




  return (
    <>
      <div className='d-flex justify-content-center align-items-center min-vh-100' style={{ background: '#003366' }}>
        <div style={{ background: '#6699CC' }} className='text-white p-1 rounded w-50 pt-5 pb-5'>
          <div className='text-center fw-bold fs-3 pb-4 font'>Login form</div>
          <div className='w-75 mx-auto' >
            <input type='text' placeholder='Email' className='form-control mt-2' value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type='text' placeholder='Password' className='form-control mt-2' value={password} onChange={(e) => setPassword(e.target.value)} />

            <div className='d-flex justify-content-between mt-2'>
              <Link to="" class="link-light font">Forgot Password</Link>
              <Link to="/Register" class="text-light font">Register User</Link>
            </div>

            <div className='mt-2 text-center mt-5'>
              <button className='btn btn-light w-50 font' onClick={submit}>Login</button>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default Login