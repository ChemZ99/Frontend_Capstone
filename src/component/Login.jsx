import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import { useDispatch, useSelector } from "react-redux";
import { addRole, addUser, addToken } from "../redux/actions";
import { Router, useNavigate } from "react-router-dom";
import { Container } from "react-bootstrap";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSubmit = async event => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const risposta = await fetch("http://localhost:3001/auth/login", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        email: data.get("email"),
        password: data.get("password"),
      }),
    });
    if (risposta.ok) {
      const token = await risposta.json();
      console.log(token.accessToken);
      dispatch(addToken(token.accessToken));
      navigate("/admin");
    } else {
      //componente per errori
    }
  };

  return (
    <Container fluid className="bg-photo-login full p-0">
      <Container fluid className="bg-layer-fuchsia full p-0">
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
            Sign in
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
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
              autoFocus
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
            <FormControlLabel control={<Checkbox value="remember" />} label="Remember me" />
            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
              Sign In
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
export default Login;
