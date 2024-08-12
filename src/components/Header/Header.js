import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink ,useNavigate} from 'react-router-dom';
import { useSelector } from "react-redux";
import {postLogout} from '../../services/ApiService'
import { useDispatch } from 'react-redux';
import { doLogout } from '../../redux/action/userAction';
import { toast } from 'react-toastify';
import { Modal } from 'bootstrap';
import ModalChangePassword from './ModalChangePassword';
import { useState } from 'react';

const Header =  () => {
  const [showModalChangePassword, setShowModalChangePassword] = useState(false)

  const navigate = useNavigate();
  const dispatch = useDispatch()
  const isAuthenticated = useSelector(state => state.user.isAuthenticated)
  const account = useSelector(state => state.user.account)
  const handleLogin = () => {
    navigate('/login')
  }
  const handleSignup = () => {
    navigate('/signup')
  }
  const handleLogout =async () => {
    let res = await postLogout(account.user_name)
    if(res.data && res.data.ec === 0){
      dispatch(doLogout())
      toast.success(res.data.em)
      localStorage.removeItem('token')
      navigate('/')
    }
    if(res.data && res.data.ec !== 0){
      toast.success(res.data.em)
    }
  }
  const handleChangePassword = () => {
    console.log('change password')
    setShowModalChangePassword(true)
  }
  return (
    <div>

    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <NavLink to="/" className='navbar-brand'>My Web</NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink to="/" className='nav-link'>Home</NavLink>
            <NavLink to="/users" className='nav-link'>Users</NavLink>
            <NavLink to="/admins" className='nav-link'>Admin</NavLink>
          </Nav>
          {isAuthenticated?
            <div>
              <NavDropdown title="Options" id="basic-nav-dropdown">
                <NavDropdown.Item onClick={() => handleLogout()} >Log out</NavDropdown.Item>
                <NavDropdown.Item onClick={() => handleChangePassword()}>Change Password</NavDropdown.Item>
                <NavDropdown.Item >Profile</NavDropdown.Item>
              </NavDropdown> 
            </div>

            :
            <>
              <button className='btn btn-outline-info btn-login' onClick={() => handleLogin()}>Log In</button>
              <button className='btn btn-light btn-sign-up' onClick={() => handleSignup()}>Sign Up</button>

            </>
          }
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <ModalChangePassword
      showModalChangePassword={showModalChangePassword}
      setShowModalChangePassword={setShowModalChangePassword}
      account={account}
    />
    </div>

  );
}

export default Header;