import { Col, Container, Row } from "react-bootstrap";
import FetchTest from "./FetchTest";
import SignInSide from "./Login";
import { Form } from "react-bootstrap";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { FetchMainDataQueryAction } from "../redux/actions";
import Navbardef from "./Navbardef";

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
        <Form onSubmit={handleSubmit}>
          <Form.Control
            type="search"
            value={query}
            onChange={handleChange}
            placeholder="type and press Enter"
            required
          />
        </Form>
      </Container>
    </Container>
  );
};
export default Home;
