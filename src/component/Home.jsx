import { Col, Container, Row } from "react-bootstrap";
import SignInSide from "./Login";
import { Form } from "react-bootstrap";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { FetchMainDataQueryAction } from "../redux/actions";
import Navbardef from "./Navbardef";
import { Button } from "@mui/material";
import { Card } from "react-bootstrap";

const Home = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLoading = useSelector(state => state.main.controls.isLoading);
  const hasError = useSelector(state => state.main.controls.hasError);

  const handleChange = e => {
    setQuery(e.target.value);
  };

  const handleSubmit = async e => {
    e.preventDefault();

    dispatch(FetchMainDataQueryAction(query));
    navigate("/results");
  };
  return (
    <Container fluid className="bg-photo full p-0">
      <Container fluid className="bg-layer full p-0">
        <Navbardef></Navbardef>
        <Container fluid className="ps-5 pe-5">
          <h1 className="display-4 text-center">Custom Hotel Search Engine</h1>

          <Form onSubmit={handleSubmit} className="ms-5 me-5 mt-3 text-center">
            <Form.Control
              type="search"
              value={query}
              onChange={handleChange}
              placeholder="Inserisci il nome di una citta' per iniziare la ricerca"
              className="mb-3"
              required
            />
            <Button className="mb-5" onClick={handleSubmit}>
              <Link className="btn btn-outline-dark fs-3 fam bg-layer-green" to={"/results"}>
                Cerca
              </Link>
            </Button>
          </Form>
          <Row className="gx-5 gy-5 pb-5">
            <Col xs={12} md={6}>
              <Card className="blurred">
                <Card.Img className="size" variant="top" src="https://i.imgur.com/7aXQBfC.jpeg" />
                <Card.Body>
                  <Card.Title>48 ore a firenze</Card.Title>
                  <Card.Text>
                    Cosa segnare come le migliori attrazioni da non perdere quando hai solo 2 giorni a Firenze
                  </Card.Text>
                  <button className="btn btn-outline-dark">LEGGI L'ARTICOLO</button>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} md={6}>
              <Card className="blurred">
                <Card.Img className="size" variant="top" src="https://i.imgur.com/8ijcwoi.jpeg" />
                <Card.Body>
                  <Card.Title>Monumenti e attrazioni turistiche di Milano</Card.Title>
                  <Card.Text>
                    Scopri i monumenti e le attrazioni turistiche di Milano da non perdere nel tuo viaggio nel capoluogo
                    lombardo
                  </Card.Text>
                  <button className="btn btn-outline-dark">LEGGI L'ARTICOLO</button>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} md={6}>
              <Card className="blurred">
                <Card.Img className="size" variant="top" src="https://i.imgur.com/zMaiDej.jpeg" />
                <Card.Body>
                  <Card.Title>20 locali dove mangiare a Bologna</Card.Title>
                  <Card.Text>
                    Cercando un posto dove mangiare a Bologna potreste rimanere confusi ed aver l’imbarazzo della scelta
                  </Card.Text>
                  <button className="btn btn-outline-dark">LEGGI L'ARTICOLO</button>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} md={6}>
              <Card className="blurred">
                <Card.Img className="size" variant="top" src="https://i.imgur.com/lnMuNFn.jpeg" />
                <Card.Body>
                  <Card.Title>Le 15 cose da vedere a Torino</Card.Title>
                  <Card.Text>
                    Questi sono alcuni dei tesori di Torino, ma ne trovate molti altri nella nostra sezione “Torino:
                    Cosa Fare e Vedere“
                  </Card.Text>
                  <button className="btn btn-outline-dark">LEGGI L'ARTICOLO</button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </Container>
    </Container>
  );
};
export default Home;
