import { Container, Row, Col } from "react-bootstrap";

function StatistikPengunjung(props) {
  return (
    <div>
      <Container>
        <Row className="justify-content-center align-items-start">
          <Col
            className="text-white"
            style={{
              margin: "35px 0px 0px 0px",
            }}
          >
            <h3>Statistik Pengunjung</h3>

            <h3 style={{ margin: "-20px 0px 30px 0px" }}>
              ____
            </h3>

            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
              }}
            >
              <tbody>
                <tr>
                  <th
                    style={{
                      textAlign: "left",
                      fontWeight: "normal",
                      paddingBottom: "10px",
                      whiteSpace: "nowrap",
                    }}
                  >
                    &#8651; Hari Ini
                  </th>
                  <td
                    style={{
                      textAlign: "right",
                      fontWeight: "normal",
                      paddingBottom: "10px",
                    }}
                  >
                    {props.hariini}
                  </td>
                </tr>

                <tr>
                  <th
                    style={{
                      textAlign: "left",
                      fontWeight: "normal",
                      paddingBottom: "10px",
                      whiteSpace: "nowrap",
                    }}
                  >
                    &#8651; Kemarin
                  </th>
                  <td
                    style={{
                      textAlign: "right",
                      fontWeight: "normal",
                      paddingBottom: "10px",
                    }}
                  >
                    {props.kemarin}
                  </td>
                </tr>

                <tr>
                  <th
                    style={{
                      textAlign: "left",
                      fontWeight: "normal",
                      paddingBottom: "10px",
                      whiteSpace: "nowrap",
                    }}
                  >
                    &#8651; Bulan Ini
                  </th>
                  <td
                    style={{
                      textAlign: "right",
                      fontWeight: "normal",
                      paddingBottom: "10px",
                    }}
                  >
                    {props.bulanini}
                  </td>
                </tr>

                <tr>
                  <th
                    style={{
                      textAlign: "left",
                      fontWeight: "normal",
                      paddingBottom: "10px",
                      whiteSpace: "nowrap",
                    }}
                  >
                    &#8651; Tahun Ini
                  </th>
                  <td
                    style={{
                      textAlign: "right",
                      fontWeight: "normal",
                      paddingBottom: "10px",
                    }}
                  >
                    {props.tahunini}
                  </td>
                </tr>

                <tr>
                  <th
                    style={{
                      textAlign: "left",
                      fontWeight: "normal",
                      paddingBottom: "10px",
                      whiteSpace: "nowrap",
                    }}
                  >
                    &#8651; Semua Waktu
                  </th>
                  <td
                    style={{
                      textAlign: "right",
                      fontWeight: "normal",
                      paddingBottom: "10px",
                    }}
                  >
                    {props.semuawaktu}
                  </td>
                </tr>
              </tbody>
            </table>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default StatistikPengunjung;