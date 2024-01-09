import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./component/Home";
import "./App.scss";
import Login from "./component/Login";
import Results from "./component/Results";
import Register from "./component/Register";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Routes>
          <Route path="/results" element={<Results />} />
        </Routes>
        <Routes>
          <Route path="/profile" element={<Home />} />
        </Routes>
        <Routes>
          <Route path="/login" element={<Login />} />
        </Routes>
        <Routes>
          <Route path="/register" element={<Register />} />
        </Routes>
        <Routes>
          <Route path="/admin" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
