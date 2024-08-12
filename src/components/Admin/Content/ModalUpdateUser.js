import { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { toast } from "react-toastify";
import _ from "lodash";
import{ putUpdateUser} from '../../../services/ApiService'


const ModalUpdateUser = (props) => {
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");
    const [role,setRole] = useState("");

    useEffect( () => {
        if(!_.isEmpty(props.updateUser)){
            setUsername(props.updateUser.username);
            setPassword(props.updateUser.password);
            setRole(props.updateUser.role.replace('ROLE_', ''));
        }
    },[props.updateUser])

    const handleClose = () => {
        // setUsername("");
        // setPassword("");
        // setRole("");
        props.setShowModalUpdateUser(false)
    }

    const handleSubmiUpdateStudent = async() => {
        let res = await putUpdateUser(props.updateUser.id,username,password,role)
        if(res.data && res.data.ec === 0){
            toast.success(res.data.em)
            handleClose();
            await props.fetchListUsers(props.currentPage);
        }
        if(res.data && res.data.ec !== 0){
            toast.error(res.data.em)
            handleClose();
        }
    }

    return (
        <>
        <Modal
          show={props.showModalUpdateUser}
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
                disabled
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                value={password}
                disabled
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
                <option value={"ADMIN"}>ADMIN</option>
                <option value={"USER"}>USER</option>
              </select>
            </div>
          </form>
        </Modal.Body>
  
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleSubmiUpdateStudent}>
              Save
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    )
}

export default ModalUpdateUser;