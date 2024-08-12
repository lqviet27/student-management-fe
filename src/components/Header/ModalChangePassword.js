import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { putChangePassword } from "../../services/ApiService";
import { toast } from "react-toastify";

const ModalChangePassword = (props) => {
    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const handleClose = () => {
        props.setShowModalChangePassword(false)
    }
    const handleSubmit = async ()  => {
        let res = await putChangePassword(props.account.user_name,oldPassword, newPassword)
        console.log(res);
        if(res.data && res.data.ec === 0){
            toast.success("Change password success")
            handleClose()
        }
        if(res.data && res.data.ec !== 0){
            toast.error(res.data.em)
            handleClose()
        }
    }
    return (
        <>
        <Modal
          show={props.showModalChangePassword}
          onHide={handleClose}
          animation={false}
          size="xl"
          backdrop="static"
          className="modal-add-student"
        >
          <Modal.Header closeButton>
            <Modal.Title>Update User</Modal.Title>
          </Modal.Header>
  
          <Modal.Body>
          <form className="row g-3">
            <div className="col-md-6">
              <label className="form-label">Old Password</label>
              <input
                type="text"
                className="form-control"
                value={oldPassword}
                onChange={(event) => setOldPassword(event.target.value)}
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">New Password</label>
              <input
                type="password"
                className="form-control"
                value={newPassword}
                onChange={(event) => setNewPassword(event.target.value)}
              />
            </div>
            
          </form>
        </Modal.Body>
  
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleSubmit}>
              Change
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    )

}

export default ModalChangePassword;