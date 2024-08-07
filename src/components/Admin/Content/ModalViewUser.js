import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { FcPlus } from "react-icons/fc";
import { postCreateUser } from "../../../services/ApiService";
import { toast } from "react-toastify";

const ModalViewUser = (props) => {
  const { show, setShow, infoUser } = props;
  console.log(infoUser);
  const handleClose = () => {
    setShow(false);
  };

  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        animation={false}
        size="xl"
        backdrop="static"
        className="modal-add-user"
      >
        <Modal.Header closeButton>
          <Modal.Title>Info user</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          {/* form */}
          <form className="row g-3">
            <div className="col-md-6">
              <label className="form-label">Họ Đệm</label>
              <input
                type="text"
                className="form-control"
                value={infoUser.hoDem}
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Tên</label>
              <input
                type="text"
                className="form-control"
                value={infoUser.ten}
              />
            </div>
            <div className="col-md-12">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                value={infoUser.email}
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Gender</label>
              <select
                className="form-select"
                value={infoUser.studentDetail.gender ? 1 : 0}
              >
                <option value="">Select Gender</option>
                <option value={1}>Male</option>
                <option value={0}>Female</option>
              </select>
            </div>
            <div className="col-md-6">
              <label className="form-label">Date of Birth</label>
              <input
                type="date"
                className="form-control"
                value={infoUser.studentDetail.dateOfBirth}
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Phone</label>
              <input
                type="text"
                className="form-control"
                value={infoUser.studentDetail.phoneNum}
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Facebook</label>
              <input
                type="text"
                className="form-control"
                value={infoUser.studentDetail.facebook}
              />
            </div>
            <div className="col-md-12">
              <label className="form-label">Address</label>
              <input
                type="text"
                className="form-control"
                value={infoUser.studentDetail.address}
              />
            </div>
            <div className="col-md-12">
              <label className="form-label">Avatar</label>
            </div>
            <div className="col-md-12 img-preview">
              {infoUser.studentDetail.avatar ? (
                <img src={`data:image/png;base64,${infoUser.studentDetail.avatar}`} alt="Image preview"></img>
              ) : (
                <span>Avatar Preview</span>
              )}
            </div>
          </form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default ModalViewUser;
