import { Navbar, Container, Nav } from "react-bootstrap";

const NavigationBar = () => {
  return (
    <Navbar
      className="text-black"
      style={{
        height: "65px",
        display: "flex",
        alignItems: "center",
        backgroundColor: "white",
      }}
    >
      <Container
        fluid
        style={{
          width: "80%",
          margin: "0 auto",
          padding: 0,
        }}
      >
        <Nav className="w-100 justify-content-between">
          <Nav.Link>Home</Nav.Link>
          <Nav.Link>Profil ▽</Nav.Link>
          <Nav.Link>Bidang ▽</Nav.Link>
          <Nav.Link>Layanan ▽</Nav.Link>
          <Nav.Link>PPID ▽</Nav.Link>
          <Nav.Link>Berita ▽</Nav.Link>
          <Nav.Link>Informasi Publik ▽</Nav.Link>
          <Nav.Link>Festival Anggaran ▽</Nav.Link>
          <Nav.Link>SITANA ▽</Nav.Link>
          <Nav.Link>KSM ▽</Nav.Link>
          <Nav.Link>Galeri ▽</Nav.Link>
          <Nav.Link>Download</Nav.Link>
          <Nav.Link>Kontak Kami</Nav.Link>
          <Nav.Link>Produk Hukum</Nav.Link>
          <Nav.Link>SIPPN</Nav.Link>
          <Nav.Link>Agenda Kegiatan</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;