import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

function Copyright() {
  return (
    <Navbar className="bg-body-tertiary">
      <Container
        style={{
          width: "100%",
          margin: "0 auto",
        }}
      >
        <Navbar.Brand
          href="#home"
          style={{
            fontSize: "14px",
            margin: 0,
          }}
        >
          © 2024. Yohanes Dimas Pratama - A11.2021.13254
        </Navbar.Brand>

        <Navbar.Toggle />

        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text
            style={{
              fontSize: "14px",
            }}
          >
            <a
              href="https://dinus.ac.id/en/"
              style={{
                fontSize: "14px",
              }}
            >
              Universitas Dian Nuswantoro
            </a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Copyright;