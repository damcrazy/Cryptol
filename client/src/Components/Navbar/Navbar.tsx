import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
import "./Navbar.css";
function MainNavbar() {
  let user = 0;
  const loginStyle = {
    marginTop: "10px",
    border: "0",
    backgroundColor: "#791cf8",
    paddingLeft: "20px",
    paddingRight: "20px",
    paddingTop: "5px",
    paddingBottom: "5px",
  }
  // const navstyle = {
  //   position: "relative"
  // }


  return (
    <>
        <style type="text/css">
    {`
.btn-flat {
  background-color: purple;
  color: white;
}
`}
  </style>
  <div className="outer-container">
      <Navbar bg="" variant="dark" expand="lg">
        <Container className="Container-nav">
          <Navbar.Brand href="#home">
            <img
              alt="Logo"
              src="/images/Logo.svg"
              width="30"
              height="30"
              className="d-inline-block align-top logo-nav"
            />{" "}
            Cryptol
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Exchange</Nav.Link>
              <Nav.Link href="#link">Learn</Nav.Link>
            </Nav>
            <Nav>
              {user ? (
                <NavDropdown
                  title={
                    <span style={{ padding: "5px" }}>
                      <img
                        alt="Logo"
                        src="/images/person.png"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                      />
                      <span style={{ padding: "10px" }}>Username</span>
                    </span>
                  }
                  id="basic-nav-dropdown"
                >
                  <NavDropdown.Item href="#action/3.1">
                    Profile
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Wallets
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Read T&C
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <button className="outline">Login</button>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      </div>
    </>
  );
}

export default MainNavbar;
