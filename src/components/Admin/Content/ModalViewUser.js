import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { FcPlus } from "react-icons/fc";
import { postCreateUser } from "../../../services/ApiService";
import { toast } from "react-toastify";
import _ from "lodash";

const ModalViewUser = (props) => {
  const { show, setShow, infoUser } = props;
  console.log(infoUser);
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
    console.log("run effect")
    if(!_.isEmpty(infoUser)){
      setEmail(infoUser.email);
      setHoDem(infoUser.hoDem);
      setTen(infoUser.ten);
      setGender(infoUser.studentDetail.gender);
      setDateOfBirth(infoUser.studentDetail.dateOfBirth);
      setPhone(infoUser.studentDetail.phoneNum);
      setAddress(infoUser.studentDetail.address);
      setFacebook(infoUser.studentDetail.facebook);
      setAvatar(infoUser.studentDetail.avatar);
      // if(infoUser.studentDetail.avatar){
      // }
      setPreviewImage(`data:image/png;base64,${infoUser.studentDetail.avatar}`);
    }
  },[infoUser])


  console.log("check render")
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
                value={hoDem}
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Tên</label>
              <input
                type="text"
                className="form-control"
                value={ten}
              />
            </div>
            <div className="col-md-12">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                value={email}
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Gender</label>
              <select
                className="form-select"
                value={gender ? 1 : 0}
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
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Phone</label>
              <input
                type="text"
                className="form-control"
                value={phone}
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Facebook</label>
              <input
                type="text"
                className="form-control"
                value={facebook}
              />
            </div>
            <div className="col-md-12">
              <label className="form-label">Address</label>
              <input
                type="text"
                className="form-control"
                value={address}
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
export default ModalViewUser;
