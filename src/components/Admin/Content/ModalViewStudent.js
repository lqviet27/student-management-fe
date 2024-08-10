import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { FcPlus } from "react-icons/fc";
import { postCreateStudent } from "../../../services/ApiService";
import { toast } from "react-toastify";
import _ from "lodash";

const ModalViewStudent = (props) => {
  const { show, setShow, infoStudent } = props;
  const handleClose = () => {
    setShow(false);
  };
  const [email, setEmail] = useState("");
  const [hoDem, setHoDem] = useState("");
  const [ten, setTen] = useState("");
  const [gender, setGender] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [facebook, setFacebook] = useState("");
  const [avatar, setAvatar] = useState(null);
  const [previewImage, setPreviewImage] = useState("");
  useEffect( () => {

    if(!_.isEmpty(infoStudent)){
      setEmail(infoStudent.email);
      setHoDem(infoStudent.hoDem);
      setTen(infoStudent.ten);
      setGender(infoStudent.studentDetail.gender);
      setDateOfBirth(infoStudent.studentDetail.dateOfBirth);
      setPhone(infoStudent.studentDetail.phoneNum);
      setAddress(infoStudent.studentDetail.address);
      setFacebook(infoStudent.studentDetail.facebook);
      setAvatar(infoStudent.studentDetail.avatar);
      setPreviewImage(`data:image/png;base64,${infoStudent.studentDetail.avatar}`);
    }
  },[infoStudent])


  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        animation={false}
        size="xl"
        backdrop="static"
        className="modal-add-student"
      >
        <Modal.Header closeButton>
          <Modal.Title>Info student</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          {/* form */}
          <form className="row g-3">
            <div className="col-md-6">
              <label className="form-label">Họ Đệm</label>
              <input
                type="text"
                className="form-control"
                value={hoDem}
                readOnly 
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Tên</label>
              <input
                type="text"
                className="form-control"
                value={ten}
                readOnly 
              />
            </div>
            <div className="col-md-12">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                value={email}
                readOnly 
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Gender</label>
              <select
                className="form-select"
                value={gender ? 1 : 0}
                readOnly 
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
                value={dateOfBirth}
                readOnly 
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Phone</label>
              <input
                type="text"
                className="form-control"
                value={phone}
                readOnly 
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Facebook</label>
              <input
                type="text"
                className="form-control"
                value={facebook}
                readOnly 
              />
            </div>
            <div className="col-md-12">
              <label className="form-label">Address</label>
              <input
                type="text"
                className="form-control"
                value={address}
                readOnly 
              />
            </div>
            <div className="col-md-12">
              <label className="form-label">Avatar</label>
            </div>
            <div className="col-md-12 img-preview">
              {avatar ? (
                <img src={previewImage} alt="Image preview"></img>
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
export default ModalViewStudent;
