import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
import { NavLink, useNavigate } from "react-router";
import { Button } from "react-bootstrap";
import NavDropdown from 'react-bootstrap/NavDropdown';


const Menu = ({ usuarioLogeado, setusuarioLogeado }) => {
  const navegacion = useNavigate();


  const logout = () => {
    sessionStorage.removeItem("userKey");
    setusuarioLogeado("");
    navegacion("/");
  };

  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container >
          <NavLink className="nav-link" to={"/"}>
            GoodGamer
          </NavLink>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <NavLink className="nav-link" to={"/"}>
                Inicio
              </NavLink>
              <NavDropdown title="Juegos" id="basic-nav-dropdown">
               
                <NavDropdown.Item as={NavLink} to={"/Juegos"}>Todos</NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to={"/JuegosPs4"}>Ps4</NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to={"/JuegosPs5"}>Ps5</NavDropdown.Item>
              </NavDropdown>
              <NavLink className="nav-link" to={"/AcercadeNostros"}>
                Acerca de Nosotros
              </NavLink>
              {usuarioLogeado && usuarioLogeado.length > 0 ? (
                <>
                  <NavLink className="nav-link" to={"/Administrador"}>
                    Administrador
                  </NavLink>
                  <Nav.Item>
                    <Button 
                      className="nav-link btn btn-link" 
                      variant="link"
                      onClick={logout}
                    >
                      Logout
                    </Button>
                  </Nav.Item>
                </>
              ) : (
                <NavLink className="nav-link" to={"/Login"}>
                  Login
                </NavLink>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Menu;
