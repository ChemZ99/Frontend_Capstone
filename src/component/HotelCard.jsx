import { Star, StarBorder } from "@mui/icons-material";
import { Component } from "react";
import Col from "react-bootstrap/Col";
import { Accordion, Button, Card } from "react-bootstrap";
import ReviewCard from "./ReviewCard";

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
            <div className="photo-container">foto qui</div>
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
            <Button className="mt-2 ms-5" variant="outline-dark">
              Prenota
            </Button>
          </Card.Body>
        </Card>
      </Col>
    );
  }
}

export default HotelCard;
