import { Col, Container, Row } from "react-bootstrap";
import FetchTest from "./FetchTest";
import SignInSide from "./Login";
import { Form } from "react-bootstrap";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getJobsAction } from "../redux/actions";

const Home = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLoading = useSelector(state => state.main.controls.isLoading);
  const hasError = useSelector(state => state.main.controls.hasError);

  const baseEndpoint = "http://localhost:3001/users";

  const handleChange = e => {
    setQuery(e.target.value);
  };

  const handleSubmit = async e => {
    e.preventDefault();

    dispatch(getJobsAction(baseEndpoint, query));
  };
  return (
    <div className="Home">
      <Form onSubmit={handleSubmit}>
        <Form.Control type="search" value={query} onChange={handleChange} placeholder="type and press Enter" required />
      </Form>
    </div>
  );
};
export default Home;
