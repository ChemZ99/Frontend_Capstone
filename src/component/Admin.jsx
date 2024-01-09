import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import HotelCard from "./HotelCard";
import Navbardef from "./Navbardef";
import { Modal, Button, Form } from "react-bootstrap";
import React from "react";

const postcity = async event => {};

const putcity = async event => {};

const deletecity = async event => {};

const posthotel = async event => {};

const puthotel = async event => {};

const deletehotel = async event => {};

const postreservation = async event => {};

const putreservation = async event => {};

const deletereservation = async event => {};

const postreview = async event => {};

const putreview = async event => {};

const deletereview = async event => {};

function Addcity(props) {
  return (
    <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Add city Modal</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>City name</Form.Label>
            <Form.Control type="text" placeholder="Enter city Name" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>City province</Form.Label>
            <Form.Control type="text" placeholder="Enter city Province/Region" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>City state</Form.Label>
            <Form.Control type="text" placeholder="Enter city State" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>City population</Form.Label>
            <Form.Control type="text" placeholder="Enter city Population" />
          </Form.Group>
          <Button onClick={postcity} variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

function Modifycity(props) {
  return (
    <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Modify city Modal</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>To be modified City Id</Form.Label>
            <Form.Control type="text" placeholder="Enter city Id" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>City name</Form.Label>
            <Form.Control type="text" placeholder="Enter city Name" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>City province</Form.Label>
            <Form.Control type="text" placeholder="Enter city Province/Region" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>City state</Form.Label>
            <Form.Control type="text" placeholder="Enter city State" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>City population</Form.Label>
            <Form.Control type="text" placeholder="Enter city Population" />
          </Form.Group>
          <Button onClick={putcity} variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

function Deletecity(props) {
  return (
    <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Delete city Modal</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>To be deleted City Id</Form.Label>
            <Form.Control type="text" placeholder="Enter city Id" />
          </Form.Group>
          <Button onClick={deletecity} variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

function Addhotel(props) {
  return (
    <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Add hotel Modal</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Hotel name</Form.Label>
            <Form.Control type="text" placeholder="Enter hotel Name" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Hotel stars</Form.Label>
            <Form.Control type="text" placeholder="Enter hotel stars" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Hotel type</Form.Label>
            <Form.Control type="text" placeholder="Enter hotel type" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Hotel website</Form.Label>
            <Form.Control type="text" placeholder="Enter hotel website" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Check type="checkbox" label="Parking" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Check type="checkbox" label="Wi-Fi" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Check type="checkbox" label="Breakfast" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Check type="checkbox" label="Pool" />
          </Form.Group>
          <Button onClick={posthotel} variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

function Modifyhotel(props) {
  return (
    <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Modify hotel Modal</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>To be modified Hotel Id</Form.Label>
            <Form.Control type="text" placeholder="Enter hotel Id" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Hotel name</Form.Label>
            <Form.Control type="text" placeholder="Enter hotel Name" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Hotel stars</Form.Label>
            <Form.Control type="text" placeholder="Enter hotel stars" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Hotel type</Form.Label>
            <Form.Control type="text" placeholder="Enter hotel type" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Hotel website</Form.Label>
            <Form.Control type="text" placeholder="Enter hotel website" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Check type="checkbox" label="Parking" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Check type="checkbox" label="Wi-Fi" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Check type="checkbox" label="Breakfast" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Check type="checkbox" label="Pool" />
          </Form.Group>
          <Button onClick={posthotel} variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

function Deletehotel(props) {
  return (
    <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Delete hotel Modal</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>To be deleted Hotel Id</Form.Label>
            <Form.Control type="text" placeholder="Enter Hotel Id" />
          </Form.Group>
          <Button onClick={deletecity} variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

function Addreservation(props) {
  return (
    <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Add Reservation Modal</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Reservation start date</Form.Label>
            <Form.Control type="text" placeholder="Enter reservation start" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Reservation end date</Form.Label>
            <Form.Control type="text" placeholder="Enter reservation end" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Hotel Id</Form.Label>
            <Form.Control type="text" placeholder="Enter hotel Id" />
          </Form.Group>
          <Button onClick={postreservation} variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

function Modifyreservation(props) {
  return (
    <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Modify Reservation Modal</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>To be modified Reservation Id</Form.Label>
            <Form.Control type="text" placeholder="Enter reservation Id" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Reservation start date</Form.Label>
            <Form.Control type="text" placeholder="Enter reservation start" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Reservation end date</Form.Label>
            <Form.Control type="text" placeholder="Enter reservation end" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Hotel Id</Form.Label>
            <Form.Control type="text" placeholder="Enter hotel Id" />
          </Form.Group>
          <Button onClick={putreservation} variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

function Deletereservation(props) {
  return (
    <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Delete reservation Modal</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>To be deleted reservation Id</Form.Label>
            <Form.Control type="text" placeholder="Enter Reservation Id" />
          </Form.Group>
          <Button onClick={deletereservation} variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

function Addreview(props) {
  return (
    <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Add Review Modal</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Review evaluation</Form.Label>
            <Form.Control type="text" placeholder="Enter review evaluation" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Review description</Form.Label>
            <Form.Control type="text" placeholder="Enter review description" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Review date of dispatch</Form.Label>
            <Form.Control type="text" placeholder="Enter review date" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Review user Id</Form.Label>
            <Form.Control type="text" placeholder="Enter review user Id" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Review hotel Id</Form.Label>
            <Form.Control type="text" placeholder="Enter review hotel Id" />
          </Form.Group>
          <Button onClick={postreview} variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

function Modifyreview(props) {
  return (
    <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Modify Review Modal</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>To be modified Review Id</Form.Label>
            <Form.Control type="text" placeholder="Enter review Id" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Review evaluation</Form.Label>
            <Form.Control type="text" placeholder="Enter review evaluation" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Review description</Form.Label>
            <Form.Control type="text" placeholder="Enter review description" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Review date of dispatch</Form.Label>
            <Form.Control type="text" placeholder="Enter review date" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Review user Id</Form.Label>
            <Form.Control type="text" placeholder="Enter review user Id" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Review hotel Id</Form.Label>
            <Form.Control type="text" placeholder="Enter review hotel Id" />
          </Form.Group>
          <Button onClick={putreview} variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

function Deletereview(props) {
  return (
    <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Delete review Modal</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>To be deleted review Id</Form.Label>
            <Form.Control type="text" placeholder="Enter Review Id" />
          </Form.Group>
          <Button onClick={deletereview} variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

const Admin = () => {
  const [modal1Show, setModal1Show] = React.useState(false);
  const [modal2Show, setModal2Show] = React.useState(false);
  const [modal3Show, setModal3Show] = React.useState(false);
  const [modal4Show, setModal4Show] = React.useState(false);
  const [modal5Show, setModal5Show] = React.useState(false);
  const [modal6Show, setModal6Show] = React.useState(false);
  const [modal7Show, setModal7Show] = React.useState(false);
  const [modal8Show, setModal8Show] = React.useState(false);
  const [modal9Show, setModal9Show] = React.useState(false);
  const [modal10Show, setModal10Show] = React.useState(false);
  const [modal11Show, setModal11Show] = React.useState(false);
  const [modal12Show, setModal12Show] = React.useState(false);

  return (
    <Container>
      <Navbardef className="mb-5" />
      <Row className="gy-5">
        <Col xs={12}>
          <Button className="me-5" variant="primary" size="lg" onClick={() => setModal1Show(true)}>
            Add city
          </Button>

          <Addcity show={modal1Show} onHide={() => setModal1Show(false)} />

          <Button className="me-5" variant="primary" size="lg" onClick={() => setModal2Show(true)}>
            Modify city
          </Button>

          <Modifycity show={modal2Show} onHide={() => setModal2Show(false)} />
          <Button variant="primary" size="lg" onClick={() => setModal3Show(true)}>
            Delete city
          </Button>

          <Deletecity show={modal3Show} onHide={() => setModal3Show(false)} />
        </Col>
        <Col xs={12}>
          <Button className="me-5" variant="primary" size="lg" onClick={() => setModal4Show(true)}>
            Add hotel
          </Button>

          <Addhotel show={modal4Show} onHide={() => setModal4Show(false)} />
          <Button className="me-5" variant="primary" size="lg" onClick={() => setModal5Show(true)}>
            Modify hotel
          </Button>

          <Modifyhotel show={modal5Show} onHide={() => setModal5Show(false)} />
          <Button variant="primary" size="lg" onClick={() => setModal6Show(true)}>
            Delete hotel
          </Button>

          <Deletehotel show={modal6Show} onHide={() => setModal6Show(false)} />
        </Col>
        <Col xs={12}>
          <Button className="me-5" variant="primary" size="lg" onClick={() => setModal7Show(true)}>
            Add reservation
          </Button>

          <Addreservation show={modal7Show} onHide={() => setModal7Show(false)} />
          <Button className="me-5" variant="primary" size="lg" onClick={() => setModal8Show(true)}>
            Modify reservation
          </Button>

          <Modifyreservation show={modal8Show} onHide={() => setModal8Show(false)} />
          <Button variant="primary" size="lg" onClick={() => setModal9Show(true)}>
            Delete reservation
          </Button>

          <Deletereservation show={modal9Show} onHide={() => setModal9Show(false)} />
        </Col>
        <Col xs={12}>
          <Button className="me-5" variant="primary" size="lg" onClick={() => setModal10Show(true)}>
            Add review
          </Button>

          <Addreview show={modal10Show} onHide={() => setModal10Show(false)} />
          <Button className="me-5" variant="primary" size="lg" onClick={() => setModal11Show(true)}>
            Modify review
          </Button>

          <Modifyreview show={modal11Show} onHide={() => setModal11Show(false)} />
          <Button variant="primary" size="lg" onClick={() => setModal12Show(true)}>
            Delete review
          </Button>

          <Deletereservation show={modal12Show} onHide={() => setModal12Show(false)} />
        </Col>
      </Row>
    </Container>
  );
};

export default Admin;
