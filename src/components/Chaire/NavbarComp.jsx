import React from "react";
import { Button, Container, Nav, Navbar as Navbars } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/images/shopping-store.png"
function NavbarComp() {
  return (
    <Navbars sticky="top" style={{background : "white"}}>
      <Container>
        <Nav>
          <Nav.Link to={"/"} as={NavLink}>
            Home
          </Nav.Link>
          <Nav.Link to={"/store"} as={NavLink}>
            Store
          </Nav.Link>
          <Nav.Link to={"/about"} as={NavLink}>
            About
          </Nav.Link>
        </Nav>
        <Button variant="outline-primary" className="rounded-circle" style={{width : "3rem", height : "3rem", position : "relative"}}>
          <img src={Logo} alt="" style={{width : "1.5rem", height :"1.5rem"}} />
          <div className="" style={{position : "absolute", background: "red", borderRadius : "50%",color : "white", bottom : 0, right : 0, transform : "translate(25%, 25%)", width : "1.5rem", height : "1.5rem"}}>3</div>
        </Button>
      </Container>
    </Navbars>
  );
}

export default NavbarComp;
