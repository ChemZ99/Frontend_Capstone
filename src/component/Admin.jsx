import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import HotelCard from "./HotelCard";
import Navbardef from "./Navbardef";
import { Modal, Button, Form } from "react-bootstrap";
import React from "react";

const restoperator = async (event, endpoint, token) => {
  event.preventDefault();
  try {
    if (endpoint.includes("/cities/add")) {
      const data = new FormData(event.currentTarget);
      const dataobj = Object.fromEntries(data.entries());
      const risposta = await fetch("http://localhost:3001" + endpoint, {
        method: "POST",
        headers: {
          Authorization: "Bearer " + token,
          "content-type": "application/json",
        },
        body: JSON.stringify({
          name: dataobj.name,
          province: dataobj.province,
          state: dataobj.state,
          population: parseInt(dataobj.population),
        }),
      });
      if (risposta.ok) {
        console.log("cityPOST success");
      } else {
        console.log("error in the REST operator");
      }
    }
    if (endpoint.includes("/cities/modify")) {
      const data = new FormData(event.currentTarget);
      const dataobj = Object.fromEntries(data.entries());
      const risposta = await fetch("http://localhost:3001" + endpoint + dataobj.id, {
        method: "PUT",
        headers: {
          Authorization: "Bearer " + token,
          "content-type": "application/json",
        },
        body: JSON.stringify({
          name: dataobj.name,
          province: dataobj.province,
          state: dataobj.state,
          population: parseInt(dataobj.population),
        }),
      });
      if (risposta.ok) {
        console.log("cityPUT success");
      } else {
        console.log("error in the REST operator");
      }
    }
    if (endpoint.includes("/cities/delete")) {
      const data = new FormData(event.currentTarget);
      const dataobj = Object.fromEntries(data.entries());
      const risposta = await fetch("http://localhost:3001" + endpoint + dataobj.id, {
        method: "DELETE",
        headers: {
          Authorization: "Bearer " + token,
          "content-type": "application/json",
        },
      });
      if (risposta.ok) {
        console.log("cityDELETE success");
      } else {
        console.log("error in the REST operator");
      }
    }
    if (endpoint.includes("/hotels/add")) {
      const data = new FormData(event.currentTarget);
      const dataobj = Object.fromEntries(data.entries());
      const risposta = await fetch("http://localhost:3001" + endpoint, {
        method: "POST",
        headers: {
          Authorization: "Bearer " + token,
          "content-type": "application/json",
        },
        body: JSON.stringify({
          name: dataobj.name,
          stars: parseInt(dataobj.stars),
          hotelType: dataobj.type.toUpperCase(),
          wifi: dataobj.wifi === "on" ? true : false,
          breakfast: dataobj.breakfast === "on" ? true : false,
          pool: dataobj.pool === "on" ? true : false,
          parking: dataobj.parking === "on" ? true : false,
          websiteURL: dataobj.website,
        }),
      });
      if (risposta.ok) {
        console.log("hotelPOST success");
      } else {
        console.log("error in the REST operator");
      }
    }
    if (endpoint.includes("/hotels/modify")) {
      const data = new FormData(event.currentTarget);
      const dataobj = Object.fromEntries(data.entries());
      const risposta = await fetch("http://localhost:3001" + endpoint + dataobj.id, {
        method: "PUT",
        headers: {
          Authorization: "Bearer " + token,
          "content-type": "application/json",
        },
        body: JSON.stringify({
          name: dataobj.name,
          stars: parseInt(dataobj.stars),
          hotelType: dataobj.type.toUpperCase(),
          wifi: dataobj.wifi === "on" ? true : false,
          breakfast: dataobj.breakfast === "on" ? true : false,
          pool: dataobj.pool === "on" ? true : false,
          parking: dataobj.parking === "on" ? true : false,
          websiteURL: dataobj.website,
        }),
      });
      if (risposta.ok) {
        console.log("hotelPUT success");
      } else {
        console.log("error in the REST operator");
      }
    }
    if (endpoint.includes("/hotels/delete")) {
      const data = new FormData(event.currentTarget);
      const dataobj = Object.fromEntries(data.entries());
      const risposta = await fetch("http://localhost:3001" + endpoint + dataobj.id, {
        method: "DELETE",
        headers: {
          Authorization: "Bearer " + token,
          "content-type": "application/json",
        },
      });
      if (risposta.ok) {
        console.log("hotelDELETE success");
      } else {
        console.log("error in the REST operator");
      }
    }
    if (endpoint.includes("/reservations/add")) {
      const data = new FormData(event.currentTarget);
      const dataobj = Object.fromEntries(data.entries());
      const risposta = await fetch("http://localhost:3001" + endpoint, {
        method: "POST",
        headers: {
          Authorization: "Bearer " + token,
          "content-type": "application/json",
        },
        body: JSON.stringify({
          reservation_start: dataobj.reservation_start,
          reservation_end: dataobj.reservation_end,
          hotelid: dataobj.hotelid,
        }),
      });
      if (risposta.ok) {
        console.log("reservationPOST success");
      } else {
        console.log("error in the REST operator");
      }
    }
    if (endpoint.includes("/reservations/modify")) {
      const data = new FormData(event.currentTarget);
      const dataobj = Object.fromEntries(data.entries());
      const risposta = await fetch("http://localhost:3001" + endpoint + dataobj.id, {
        method: "PUT",
        headers: {
          Authorization: "Bearer " + token,
          "content-type": "application/json",
        },
        body: JSON.stringify({
          reservation_start: dataobj.reservation_start,
          reservation_end: dataobj.reservation_end,
          hotelid: dataobj.hotelid,
        }),
      });
      if (risposta.ok) {
        console.log("reservationPUT success");
      } else {
        console.log("error in the REST operator");
      }
    }
    if (endpoint.includes("/reservations/delete")) {
      const data = new FormData(event.currentTarget);
      const dataobj = Object.fromEntries(data.entries());
      const risposta = await fetch("http://localhost:3001" + endpoint + dataobj.id, {
        method: "DELETE",
        headers: {
          Authorization: "Bearer " + token,
          "content-type": "application/json",
        },
      });
      if (risposta.ok) {
        console.log("reservationDELETE success");
      } else {
        console.log("error in the REST operator");
      }
    }
    if (endpoint.includes("/reviews/add")) {
      const data = new FormData(event.currentTarget);
      const dataobj = Object.fromEntries(data.entries());
      const risposta = await fetch("http://localhost:3001" + endpoint, {
        method: "POST",
        headers: {
          Authorization: "Bearer " + token,
          "content-type": "application/json",
        },
        body: JSON.stringify({
          evaluation: parseInt(dataobj.evaluation),
          description: dataobj.description,
          date_of_dispatch: dataobj.date_of_dispatch,
          userid: dataobj.userid,
          hotelid: dataobj.hotelid,
        }),
      });
      if (risposta.ok) {
        console.log("reviewPOST success");
      } else {
        console.log("error in the REST operator");
      }
    }
    if (endpoint.includes("/reviews/modify")) {
      const data = new FormData(event.currentTarget);
      const dataobj = Object.fromEntries(data.entries());
      const risposta = await fetch("http://localhost:3001" + endpoint + dataobj.id, {
        method: "PUT",
        headers: {
          Authorization: "Bearer " + token,
          "content-type": "application/json",
        },
        body: JSON.stringify({
          evaluation: parseInt(dataobj.evaluation),
          description: dataobj.description,
          date_of_dispatch: dataobj.date_of_dispatch,
          userid: dataobj.userid,
          hotelid: dataobj.hotelid,
        }),
      });
      if (risposta.ok) {
        console.log("reviewPUT success");
      } else {
        console.log("error in the REST operator");
      }
    }
    if (endpoint.includes("/reviews/delete")) {
      const data = new FormData(event.currentTarget);
      const dataobj = Object.fromEntries(data.entries());
      const risposta = await fetch("http://localhost:3001" + endpoint + dataobj.id, {
        method: "DELETE",
        headers: {
          Authorization: "Bearer " + token,
          "content-type": "application/json",
        },
      });
      if (risposta.ok) {
        console.log("reviewDELETE success");
      } else {
        console.log("error in the REST operator");
      }
    }
  } catch (error) {
    console.log(error);
  }
};

function Addcity(props) {
  const token = useSelector(state => state.login.token);
  return (
    <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Add city Modal</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={event => restoperator(event, "/cities/add", token)}>
          <Form.Group className="mb-3">
            <Form.Label>City name</Form.Label>
            <Form.Control type="text" name="name" placeholder="Enter city Name" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>City province</Form.Label>
            <Form.Control type="text" name="province" placeholder="Enter city Province/Region" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>City state</Form.Label>
            <Form.Control type="text" name="state" placeholder="Enter city State" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>City population</Form.Label>
            <Form.Control type="text" name="population" placeholder="Enter city Population" />
          </Form.Group>
          <Button variant="primary" type="submit">
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
  const token = useSelector(state => state.login.token);
  return (
    <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Modify city Modal</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={event => restoperator(event, `/cities/modify/id=`, token)}>
          <Form.Group className="mb-3">
            <Form.Label>To be modified City Id</Form.Label>
            <Form.Control type="text" name="id" placeholder="Enter city Id" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>City name</Form.Label>
            <Form.Control type="text" name="name" placeholder="Enter city Name" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>City province</Form.Label>
            <Form.Control type="text" name="province" placeholder="Enter city Province/Region" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>City state</Form.Label>
            <Form.Control type="text" name="state" placeholder="Enter city State" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>City population</Form.Label>
            <Form.Control type="text" name="population" placeholder="Enter city Population" />
          </Form.Group>
          <Button variant="primary" type="submit">
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
  const token = useSelector(state => state.login.token);
  return (
    <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Delete city Modal</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={event => restoperator(event, `/cities/delete/id=`, token)}>
          <Form.Group className="mb-3">
            <Form.Label>To be deleted City Id</Form.Label>
            <Form.Control type="text" name="id" placeholder="Enter city Id" />
          </Form.Group>
          <Button variant="primary" type="submit">
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
  const token = useSelector(state => state.login.token);
  return (
    <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Add hotel Modal</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={event => restoperator(event, `/hotels/add=`, token)}>
          <Form.Group className="mb-3">
            <Form.Label>Hotel name</Form.Label>
            <Form.Control type="text" name="name" placeholder="Enter hotel Name" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Hotel stars</Form.Label>
            <Form.Control type="text" name="stars" placeholder="Enter hotel stars" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Hotel type</Form.Label>
            <Form.Control type="text" name="type" placeholder="Enter hotel type" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Hotel website</Form.Label>
            <Form.Control type="text" name="website" placeholder="Enter hotel website" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Check type="checkbox" name="parking" label="Parking" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Check type="checkbox" name="wifi" label="Wi-Fi" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Check type="checkbox" name="breakfast" label="Breakfast" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Check type="checkbox" name="pool" label="Pool" />
          </Form.Group>
          <Button variant="primary" type="submit">
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
  const token = useSelector(state => state.login.token);
  return (
    <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Modify hotel Modal</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={event => restoperator(event, `/hotels/modify/id=`, token)}>
          <Form.Group className="mb-3">
            <Form.Label>To be modified Hotel Id</Form.Label>
            <Form.Control type="text" name="id" placeholder="Enter hotel Id" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Hotel name</Form.Label>
            <Form.Control type="text" name="name" placeholder="Enter hotel Name" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Hotel stars</Form.Label>
            <Form.Control type="text" name="stars" placeholder="Enter hotel stars" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Hotel type</Form.Label>
            <Form.Control type="text" name="type" placeholder="Enter hotel type" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Hotel website</Form.Label>
            <Form.Control type="text" name="website" placeholder="Enter hotel website" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Check type="checkbox" name="parking" label="Parking" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Check type="checkbox" name="wifi" label="Wi-Fi" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Check type="checkbox" name="breakfast" label="Breakfast" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Check type="checkbox" name="pool" label="Pool" />
          </Form.Group>
          <Button variant="primary" type="submit">
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
  const token = useSelector(state => state.login.token);
  return (
    <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Delete hotel Modal</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={event => restoperator(event, `/hotels/delete/id=`, token)}>
          <Form.Group className="mb-3">
            <Form.Label>To be deleted Hotel Id</Form.Label>
            <Form.Control type="text" name="id" placeholder="Enter Hotel Id" />
          </Form.Group>
          <Button variant="primary" type="submit">
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
  const token = useSelector(state => state.login.token);
  return (
    <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Add Reservation Modal</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={event => restoperator(event, `/reservations/add`, token)}>
          <Form.Group className="mb-3">
            <Form.Label>Reservation start date</Form.Label>
            <Form.Control
              type="text"
              name="reservation_start"
              placeholder="Enter reservation start - format yyyy-mm-dd"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Reservation end date</Form.Label>
            <Form.Control type="text" name="reservation_end" placeholder="Enter reservation end - format yyyy-mm-dd" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Hotel Id</Form.Label>
            <Form.Control type="text" name="hotelid" placeholder="Enter hotel Id" />
          </Form.Group>
          <Button variant="primary" type="submit">
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
  const token = useSelector(state => state.login.token);
  return (
    <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Modify Reservation Modal</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={event => restoperator(event, `/reservations/modify/id=`, token)}>
          <Form.Group className="mb-3">
            <Form.Label>To be modified Reservation Id</Form.Label>
            <Form.Control type="text" name="id" placeholder="Enter reservation Id" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Reservation start date</Form.Label>
            <Form.Control
              type="text"
              name="reservation_start"
              placeholder="Enter reservation start - format yyyy-mm-dd"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Reservation end date</Form.Label>
            <Form.Control type="text" name="reservation_end" placeholder="Enter reservation end - format yyyy-mm-dd" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Hotel Id</Form.Label>
            <Form.Control type="text" name="hotelid" placeholder="Enter hotel Id" />
          </Form.Group>
          <Button variant="primary" type="submit">
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
  const token = useSelector(state => state.login.token);
  return (
    <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Delete reservation Modal</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={event => restoperator(event, `/reservations/delete/id=`, token)}>
          <Form.Group className="mb-3">
            <Form.Label>To be deleted reservation Id</Form.Label>
            <Form.Control type="text" name="id" placeholder="Enter Reservation Id" />
          </Form.Group>
          <Button variant="primary" type="submit">
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
  const token = useSelector(state => state.login.token);
  return (
    <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Add Review Modal</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={event => restoperator(event, `/reviews/add`, token)}>
          <Form.Group className="mb-3">
            <Form.Label>Review evaluation</Form.Label>
            <Form.Control type="text" name="evaluation" placeholder="Enter review evaluation" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Review description</Form.Label>
            <Form.Control type="text" name="description" placeholder="Enter review description" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Review date of dispatch</Form.Label>
            <Form.Control type="text" name="date_of_dispatch" placeholder="Enter review date - format yyyy-mm-dd" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Review user Id</Form.Label>
            <Form.Control type="text" name="userid" placeholder="Enter review user Id" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Review hotel Id</Form.Label>
            <Form.Control type="text" name="hotelid" placeholder="Enter review hotel Id" />
          </Form.Group>
          <Button variant="primary" type="submit">
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
  const token = useSelector(state => state.login.token);
  return (
    <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Modify Review Modal</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={event => restoperator(event, `/reviews/modify/id=`, token)}>
          <Form.Group className="mb-3">
            <Form.Label>To be modified Review Id</Form.Label>
            <Form.Control type="text" name="id" placeholder="Enter review Id" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Review evaluation</Form.Label>
            <Form.Control type="text" name="evaluation" placeholder="Enter review evaluation" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Review description</Form.Label>
            <Form.Control type="text" name="description" placeholder="Enter review description" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Review date of dispatch</Form.Label>
            <Form.Control type="text" name="date_of_dispatch" placeholder="Enter review date - format yyyy-mm-dd" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Review user Id</Form.Label>
            <Form.Control type="text" name="userid" placeholder="Enter review user Id" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Review hotel Id</Form.Label>
            <Form.Control type="text" name="hotelid" placeholder="Enter review hotel Id" />
          </Form.Group>
          <Button variant="primary" type="submit">
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
  const token = useSelector(state => state.login.token);
  return (
    <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Delete review Modal</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={event => restoperator(event, `/reviews/delete/id=`, token)}>
          <Form.Group className="mb-3">
            <Form.Label>To be deleted review Id</Form.Label>
            <Form.Control type="text" name="id" placeholder="Enter Review Id" />
          </Form.Group>
          <Button variant="primary" type="submit">
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

          <Deletereview show={modal12Show} onHide={() => setModal12Show(false)} />
        </Col>
      </Row>
    </Container>
  );
};

export default Admin;
