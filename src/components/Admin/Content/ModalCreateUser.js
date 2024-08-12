import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { postCreateUser } from "../../../services/ApiService";
import { toast } from "react-toastify";
const ModalCreateUser = (props) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("");
    const handleClose = () => {
        props.setShowModalCreateUser(false)
    }

    const handleSubmiCreateStudent = async() => {
        let res = await postCreateUser(username, password, role)
        console.log(res)
        if(res.data && res.data.ec === 0){
            toast.success("Create user success")
            handleClose()
            props.setCurrentPage(1)
            props.fetchListUsers(1)
        }
        if(res.data && res.data.ec !== 0){
            toast.error(res.data.em)
            handleClose()   
        }

    }
    return (
        <>
        <Modal
          show={props.showModalCreateUser}
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
              <label className="form-label">User name</label>
              <input
                type="text"
                className="form-control"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
            </div>
            <div className="col-md-12">
              <label className="form-label">Role</label>
              <select
                className="form-select"
                value={role}
                onChange={(event) => setRole(event.target.value)}
              >
                <option value="">Select Role</option>
                <option value="ADMIN">ADMIN</option>
                <option value="USER">USER</option>
              </select>
            </div>
          </form>
        </Modal.Body>
  
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleSubmiCreateStudent}>
              Save
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    )
} 

export default ModalCreateUser;