import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function GenraTable() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
       Add
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Genre Table</Modal.Title>
        </Modal.Header>
        <Modal.Body>

            <div>
                <div className='d-flex flex-column gap-2'>
                    <input className='form-control' type='text' placeholder='title'  />
                    <input className='form-control' type='text' placeholder='sort_description' />
                    <input className='form-control' type='text' placeholder='subtitle'  />
                    <input className='form-control' type='text' placeholder='description' />
                    <input className='form-control' type='text' placeholder='slug' />
                    </div>
            </div>
           
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    

    </>
  )
}

export default GenraTable