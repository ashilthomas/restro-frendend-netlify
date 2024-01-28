
import { Button, Container,  Nav, Navbar } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { userlogout } from '../redux/userAuth'
import jsCookie from 'js-cookie'

function Header() {
  const navigate = useNavigate()
  const isAuthenticated = useSelector((state)=> state.auth.isAuthenticated)

  const dispatch = useDispatch()
  const handileLogout = ()=>{

dispatch(userlogout())
    jsCookie.remove("token")
    navigate('/login')
  }
  return (
    <Navbar expand="lg" className="bg-black" style={{ height:"80px", paddingLeft: "30px", paddingRight: "30px"}}>
    <Container fluid>
      <Navbar.Brand as = {Link} to="/"style={{ color:"white", fontSize :"30px", paddingLeft:"10px"}}>Restaurants</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
          <Nav.Link as = {Link} to="/"  style={{ color:"white" }}>Home</Nav.Link>
          <Nav.Link as = {Link} to="/about"  style={{ color:"white" }}>About</Nav.Link>
       
          <Nav.Link as = {Link} to="/contact" style={{ color:"white" }}>Contact</Nav.Link>
          <Nav.Link as = {Link} to="/service" style={{ color:"white" }}>Service</Nav.Link>
          <Nav.Link as = {Link} to="/add" style={{ color:"white" }}>ADD</Nav.Link>
          <Nav.Link as = {Link} to="/register" style={{ color:"white" }}>Register</Nav.Link>

          <Nav.Link as = {Link} to="/users" style={{ color:"white" }}>users</Nav.Link>
        
          </Nav>
          <Nav className='ms-auto'>
            {isAuthenticated ?     <Button onClick={handileLogout}>LOGIN OUT</Button>: 
             <Nav.Link as = {Link} to="/login" style={{ color:"white" }}>
            <Button onClick={handileLogout}>LOGIN</Button>
          </Nav.Link>}
         
          </Nav>
        
      </Navbar.Collapse>
    </Container>
  </Navbar>
  
  )
}

export default Header