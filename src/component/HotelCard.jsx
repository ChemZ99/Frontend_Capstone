import { Star, StarBorder } from "@mui/icons-material";
import { Component } from "react";
import Col from "react-bootstrap/Col";
import { Accordion, Button, Card, DropdownButton, Image } from "react-bootstrap";
import ReviewCard from "./ReviewCard";
import { Dropdown } from "react-bootstrap";
import { Form } from "react-bootstrap";

class HotelCard extends Component {
  stardisplayer(stars) {
    if (stars === 1) {
      return (
        <>
          <Star />
          <StarBorder />
          <StarBorder />
          <StarBorder />
          <StarBorder />
        </>
      );
    } else if (stars === 2) {
      return (
        <>
          <Star />
          <Star />
          <StarBorder />
          <StarBorder />
          <StarBorder />
        </>
      );
    } else if (stars === 3) {
      return (
        <>
          <Star />
          <Star />
          <Star />
          <StarBorder />
          <StarBorder />
        </>
      );
    } else if (stars === 4) {
      return (
        <>
          <Star />
          <Star />
          <Star />
          <Star />
          <StarBorder />
        </>
      );
    } else if (stars === 5) {
      return (
        <>
          <Star />
          <Star />
          <Star />
          <Star />
          <Star />
        </>
      );
    }
  }
  render() {
    return (
      <Col xs={12} className="mb-3">
        <Card className="position-relative blurred">
          <Card.Body>
            <h1>{this.props.data.name}</h1>
            <div className="photo-container">
              <img
                className="cover"
                src="https://cdn.openart.ai/stable_diffusion/a8fd2137227af30470de9007c65b0d8e49886e19_2000x2000.webp"
                alt="hotel here"
              ></img>
            </div>
            <p>tipo di struttura: {this.props.data.hotelType}</p>
            <p>valutazione in stelle: {this.stardisplayer(this.props.data.stars)}</p>
            <p>aggiungi una descrizione dell hotel qui</p>

            <Accordion className="bg-body-primary ms-5 me-5">
              <Accordion.Item eventKey="0">
                <Accordion.Header>Valutazioni degli utenti</Accordion.Header>
                <Accordion.Body>
                  {this.props.data.reviews.map(elem => (
                    <ReviewCard fn={this.stardisplayer} key={elem.index} data={elem} />
                  ))}
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
            <DropdownButton className="ms-3 mt-3" menuVariant="dark" drop={"up"} title={"Prenota"}>
              <Form className="ps-2 pe-2">
                <Form.Group className="mb-3">
                  <Form.Label>Data inizio</Form.Label>
                  <Form.Control placeholder="data inizio prenotazione" />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Data fine</Form.Label>
                  <Form.Control placeholder="data fine prenotazione" />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Check type="checkbox" label="suite" />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            </DropdownButton>
          </Card.Body>
        </Card>
      </Col>
    );
  }
}

export default HotelCard;
