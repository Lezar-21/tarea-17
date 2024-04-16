import { Outlet, Link } from "react-router-dom"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from './img/logo.png'
// Plantilla principal de la App
const Layout = () => {
    return (
        <>
            <Navbar expand="md" className="bg-body-tertiary">
                <Container fluid>
                    <Navbar.Brand href="/">
                        <img alt="Inicio" src={Logo} height="25" />
                    </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Link to="/" className="nav-link">Inicio</Link>
                            <Link to="/Usuarios" className="nav-link">Usuarios</Link>
                            <Link to="/Bitacora" className="nav-link">Bitácora</Link>
                        </Nav>
                        <Navbar.Text>
                            <Link to="/Login" classilame="nav-link">Iniciar sesión</Link>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Container className="mt-2 mb-5">
                <Outlet />
            </Container >
        </>
    )
};

export default Layout;