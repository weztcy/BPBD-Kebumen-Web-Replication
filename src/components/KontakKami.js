import { Container, Row, Col } from "react-bootstrap";
import Alamat from "../assets/images/apple-arcade.png";
import Telpon from "../assets/images/mobile.png";
import Fax from "../assets/images/color-swatch.png";
import Email from "../assets/images/inbox.png";

function KontakKami() {
  return (
    <div>
      <Container>
        <Row className="justify-content-center align-items-start">
          <Col
            className="text-white"
            style={{
              marginTop: "35px",
              paddingLeft: "10px",
            }}
          >
            <h3>Kontak Kami</h3>

            <h3 style={{ margin: "-20px 0px 27px 0px" }}>
              ____
            </h3>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "10px",
              }}
            >
              <img
                src={Alamat}
                alt="Alamat"
                style={{
                  width: "30px",
                  height: "30px",
                  objectFit: "contain",
                }}
              />

              <p
                style={{
                  margin: "0 0 0 15px",
                  whiteSpace: "nowrap",
                }}
              >
                Jl. Arungbinang No 13 Kebumen
              </p>
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "10px",
              }}
            >
              <img
                src={Telpon}
                alt="Telpon"
                style={{
                  width: "30px",
                  height: "30px",
                  objectFit: "contain",
                }}
              />

              <p
                style={{
                  margin: "0 0 0 15px",
                  whiteSpace: "nowrap",
                }}
              >
                0287-381240 | 08112646112
              </p>
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "10px",
              }}
            >
              <img
                src={Fax}
                alt="Fax"
                style={{
                  width: "30px",
                  height: "30px",
                  objectFit: "contain",
                }}
              />

              <p
                style={{
                  margin: "0 0 0 15px",
                  whiteSpace: "nowrap",
                }}
              >
                0287-3870807
              </p>
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "10px",
              }}
            >
              <img
                src={Email}
                alt="Email"
                style={{
                  width: "30px",
                  height: "30px",
                  objectFit: "contain",
                }}
              />

              <p
                style={{
                  margin: "0 0 0 15px",
                  whiteSpace: "nowrap",
                }}
              >
                bpbdkebumenkab@gmail.com
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default KontakKami;