import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import '../Sidebar.css'
import { Navigate } from 'react-router-dom';

function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);
  const [token,setToken] = useState('')
  const navigate = useNavigate()

 const Logout=()=>{
  
  let item = localStorage.clear('token')
  if(!item){
    navigate("/login")
  }

 }

  const toggleSidebar = () => {

    setIsOpen(!isOpen);

  };

  return (
    <>

      <div className='bodySidebar'>
        <div className={`sidebar  ${isOpen ? 'open' : 'closed'}`}>

          <div className='d-flex align-items-center justify-content-between sticky-top' style={{ borderBottom: '1px solid grey' }} >
            {isOpen ? <div className='textwrap fs-5' style={{ backgroundColor: '#19376D', padding: '21.5px 8px 21.5px 8px' }}>Netflix Admin</div> : ''}
            <div style={{ padding: '13px 8px 13px 8px' }}  >
              <button onClick={toggleSidebar} className="toggle-btn"   >
                {isOpen ? <i className='bx bx-menu  '></i> : <i className='bx bx-menu' ></i>}
              </button>
            </div>
          </div>

          <div className=''>
            <ul style={{ padding: '8px' }}>

              <Link to='/Movies' className='text-decoration-none  text-white '>
                <li className='menu-list'><i class='bx bx-tachometer' ></i><div className='textwrap'>Movies</div></li>
              </Link>

              <Link to='/Lists' className='text-decoration-none  text-white '>
                <li className='menu-list'><i class='bx bxs-group' ></i><div className='textwrap'>Lists</div></li>
              </Link>
              
              <div className='text-decoration-none  text-white '>
                <li className='menu-list'><i class='bx bx-notepad'></i><div className='textwrap'>SideBar</div></li>
              </div>

              <div className='text-decoration-none  text-white '>
                <li className='menu-list'><i class='bx bxs-book-reader'></i><div className='textwrap'>Result</div></li>
              </div>
              <div className='text-decoration-none  text-white '>
                <li className='menu-list'><i class='bx bxs-book-alt'></i><div className='textwrap'>Question Bank</div></li>
              </div>
              <div className='text-decoration-none  text-white '>
                <li className='menu-list'><i class='bx bxs-book-alt'></i><div className='textwrap' onClick={Logout}>Logout</div></li>
              </div>

            </ul>
          </div>

        </div>
      </div>

    </>
  )
}

export default Sidebar