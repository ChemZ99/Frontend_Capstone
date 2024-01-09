import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { useDispatch } from "react-redux";
import { addToken } from "../redux/actions";
import { useNavigate } from "react-router-dom";
import { Container } from "react-bootstrap";

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSubmit = async event => {
    event.preventDefault();
    const data = new FormData(event.target);
    const dataobj = Object.fromEntries(data.entries());
    console.log(dataobj);
    const risposta = await fetch("http://localhost:3001/auth/register", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        username: dataobj.username,
        email: dataobj.email,
        firstname: dataobj.firstname,
        lastname: dataobj.lastname,
        password: dataobj.password,
      }),
    });
    if (risposta.ok) {
      console.log("registrazione avvenuta con successo");
    } else {
      //componente per errori
    }
  };

  return (
    <Container fluid className="bg-photo-register full p-0">
      <Container fluid className="bg-layer-yellow full p-0">
        <Box
          className="mt-0 pt-5"
          sx={{
            my: 8,
            mx: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" color="white" variant="h5">
            Register
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
            <TextField
              className="blurred"
              sx={{ input: { color: "#9ac0ed" }, label: { color: "#9ac0ed" } }}
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoComplete="username"
            />
            <TextField
              className="blurred"
              sx={{ input: { color: "#9ac0ed" }, label: { color: "#9ac0ed" } }}
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
            />
            <TextField
              className="blurred"
              sx={{ input: { color: "#9ac0ed" }, label: { color: "#9ac0ed" } }}
              margin="normal"
              required
              fullWidth
              id="firstname"
              label="Firstname"
              name="firstname"
              autoComplete="firstname"
            />
            <TextField
              className="blurred"
              sx={{ input: { color: "#9ac0ed" }, label: { color: "#9ac0ed" } }}
              margin="normal"
              required
              fullWidth
              id="lastname"
              label="Lastname"
              name="lastname"
              autoComplete="lastname"
            />
            <TextField
              className="blurred"
              sx={{ input: { color: "#9ac0ed" }, label: { color: "#9ac0ed" } }}
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
              Register
            </Button>
          </Box>
          <Button sx={{ mt: 3, mb: 2 }} href="/">
            Home
          </Button>
        </Box>
      </Container>
    </Container>
  );
};
export default Register;
