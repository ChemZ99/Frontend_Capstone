import { Col, Container, Row } from "react-bootstrap";

const Home = () => {
  return (
    <div className="Home">
      <Row
        className="d-flex flex-row"
        style={{
          height: "70vh",
        }}
      >
        <Col>
          <Container>
            <Row>
              <Col>{/* Contenuto della home */}</Col>
            </Row>
          </Container>
        </Col>
      </Row>
    </div>
  );
};
export default Home;
