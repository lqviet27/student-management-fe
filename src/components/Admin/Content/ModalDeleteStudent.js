import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { deleteStudent } from "../../../services/ApiService";
import { toast } from "react-toastify";

const ModalDeleteStudent = (props) => {
  const {show, setShow, studentDelete} = props

  const handleClose = () => setShow(false);

    const handleSubmitDelete = async() => {
        let res = await deleteStudent(studentDelete.id);

        if(res.data && res.data.ec === 0){
            toast.success(res.data.em);
            handleClose()
            props.setCurrentPage(1)
            await props.fetchListStudentsWithPaginate(1)
        }
        if(res.data && res.data.ec !== 0){
            toast.error(res.data.em)    
            handleClose()
        }
    }

  return (
    <>
        <Modal 
            show={show} 
            onHide={handleClose}
            backdrop="static"
        >
            <Modal.Header closeButton>
                <Modal.Title>Confirm Delete Student ?</Modal.Title>
            </Modal.Header>
            <Modal.Body>Are you sure delete this student have 
                <br/>
                <b>{` id: ${studentDelete && studentDelete.id ? studentDelete.id : 0} , email: ${studentDelete && studentDelete.email ? studentDelete.email : ""}`}</b>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={() =>  handleSubmitDelete()}>
                    Confirm
                </Button>
            </Modal.Footer>
        </Modal>
    </>
  );
}

export default ModalDeleteStudent;