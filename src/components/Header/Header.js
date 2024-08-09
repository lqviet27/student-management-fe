import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink ,useNavigate} from 'react-router-dom';


const Header =  () => {
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate('/login')
  }
  const handleSignup = () => {
    navigate('/signup')
  }
  return (
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
          <Nav>
            <button className='btn btn-outline-info btn-login' onClick={() => handleLogin()}>Log In</button>
            <button className='btn btn-light btn-sign-up' onClick={() => handleSignup()}>Sign Up</button>
            {/* <NavDropdown title="Options" id="basic-nav-dropdown">
                <NavDropdown.Item >Log in</NavDropdown.Item>
                <NavDropdown.Item >Log out</NavDropdown.Item>
                <NavDropdown.Item >Profile</NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;