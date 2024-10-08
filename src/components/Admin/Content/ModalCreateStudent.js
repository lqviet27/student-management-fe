import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { FcPlus } from "react-icons/fc";
import { postCreateStudent } from "../../../services/ApiService";
import { toast } from "react-toastify";

const ModalCreateStudent = (props) => {
  const { show, setShow } = props;

  const handleClose = () => {
    setShow(false);
    setEmail("");
    setHoDem("");
    setTen("");
    setGender("");
    setDateOfBirth("");
    setPhone("");
    setAddress("");
    setAvatar(null);
    setFacebook("");
    setPreviewImage("");
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

  const handleUploadImage = (event) => {
    if (event.target && event.target.files && event.target.files[0]) {
      setPreviewImage(URL.createObjectURL(event.target.files[0]));
      setAvatar(event.target.files[0]);
    } else {
    }
  };

  const validateEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  }
  const validatePhone = (phone) => {
    const PhonePattern = /^(?:\+84|0)[3-9][0-9]{8}$/;
    return PhonePattern.test(phone);
  }

  const handleSubmiCreateStudent = async () => {

    const isValidEmail = validateEmail(email);
    if(!isValidEmail){
      toast.error("Email is invalid");
      return;
    }
    const isValidPhone = validatePhone(phone);
    if(!isValidPhone){
      toast.error("Phone is invalid");
      return;
    }
    if(avatar === ""){
      setAvatar(null);
    }
    let res = await postCreateStudent(email, hoDem, ten, gender, dateOfBirth, phone, address, facebook, avatar);

    console.log(res)
    if(res.data && res.data.ec === 0){
      toast.success(res.data.em);
      handleClose();
      props.setCurrentPage(1)
      await props.fetchListStudentsWithPaginate(1)
    }
    if(res.data && res.data.ec !== 0){
      toast.error(res.data.em);
      handleClose();
    }
  };
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
          <Modal.Title>Add new student</Modal.Title>
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
                onChange={(event) => setHoDem(event.target.value)}
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Tên</label>
              <input
                type="text"
                className="form-control"
                value={ten}
                onChange={(event) => setTen(event.target.value)}
              />
            </div>
            <div className="col-md-12">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Gender</label>
              <select
                className="form-select"
                value={gender}
                onChange={(event) => setGender(event.target.value)}
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
                onChange={(event) => setDateOfBirth(event.target.value)}
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Phone</label>
              <input
                type="text"
                className="form-control"
                value={phone}
                onChange={(event) => setPhone(event.target.value)}
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Facebook</label>
              <input
                type="text"
                className="form-control"
                value={facebook}
                onChange={(event) => setFacebook(event.target.value)}
              />
            </div>
            <div className="col-md-12">
              <label className="form-label">Address</label>
              <input
                type="text"
                className="form-control"
                value={address}
                onChange={(event) => setAddress(event.target.value)}
              />
            </div>
            <div className="col-md-12">
              <label className="form-label label-upload" htmlFor="inputUpload">
                <FcPlus />
                Upload Avatar
              </label>
              <input
                type="file"
                hidden
                id="inputUpload"
                onChange={(event) => handleUploadImage(event)}
              ></input>
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
          <Button variant="primary" onClick={() => handleSubmiCreateStudent()}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default ModalCreateStudent;
