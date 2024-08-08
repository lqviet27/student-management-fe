import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { deleteUser } from "../../../services/ApiService";
import { toast } from "react-toastify";

const ModalDeleteUser = (props) => {
  const {show, setShow, userDelete} = props

  const handleClose = () => setShow(false);

    const handleSubmitDelete = async() => {
        let res = await deleteUser(userDelete.id);

        if(res.data && res.data.ec === 0){
            toast.success(res.data.em);
            handleClose()
            // await props.fetchListUsers()
            props.setCurrentPage(1)
            await props.fetchListUsersWithPaginate(1)
        }
        if(res.data && res.data.ec !== 0){
            toast.error(res.data.em)    
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
                <b>{` id: ${userDelete && userDelete.id ? userDelete.id : 0} , email: ${userDelete && userDelete.email ? userDelete.email : ""}`}</b>
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

export default ModalDeleteUser;