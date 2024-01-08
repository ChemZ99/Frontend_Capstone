import { Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import HotelCard from "./HotelCard";

const Results = () => {
  const data = useSelector(state => state.main.content);
  console.log(data);
  return (
    <Container fluid className="bg-photo p-0">
      <Container fluid className="bg-layer p-0">
        <Container fluid className="ps-3 pt-3 pb-5">
          <h1 className="display-1">Risultati per {data.name}</h1>
          <p>popolazione corrente: {data.population}</p>
          <Row>
            {data.hotels.map(elem => (
              <HotelCard key={elem.index} data={elem} />
            ))}
          </Row>
        </Container>
      </Container>
    </Container>
  );
};

export default Results;
