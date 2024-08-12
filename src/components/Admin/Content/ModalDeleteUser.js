import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { deleteUser } from "../../../services/ApiService";
import { toast } from "react-toastify";

const ModalDeleteUser = (props) => {
    const handleClose = () => props.setShowModalDeleteUser(false);

    const handleSubmitDelete = async() => {
        let res = await deleteUser(props.deleteUser.id);

        if(res.data && res.data.ec === 0){
            toast.success(res.data.em);
            handleClose()
            props.setCurrentPage(1)
            await props.fetchListUsers(1)
        }
        if(res.data && res.data.ec !== 0){
            toast.error(res.data.em)    
            handleClose()
        }
    }

  return (
    <>
        <Modal 
            show={props.showModalDeleteUser} 
            onHide={handleClose}
            backdrop="static"
        >
            <Modal.Header closeButton>
                <Modal.Title>Confirm Delete User ?</Modal.Title>
            </Modal.Header>
            <Modal.Body>Are you sure delete this user have 
                <br/>
                <b>{` id: ${props.deleteUser && props.deleteUser.id ? props.deleteUser.id : 0} , email: ${props.deleteUser && props.deleteUser.username ? props.deleteUser.username : ""}`}</b>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={() => handleSubmitDelete()}>
                    Confirm
                </Button>
            </Modal.Footer>
        </Modal>
    </>
  );
}

export default ModalDeleteUser;