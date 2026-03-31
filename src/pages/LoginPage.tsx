import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser, LoginResponse } from "../services/TS.api";
import { TextField, Button, Container, Typography, Alert } from "@mui/material";

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await loginUser({ email, password });
      const data: LoginResponse = response.data;
      localStorage.setItem("token", data.token);
      navigate("/dashboard");
    } catch {
      setError("Invalid credentials. Please try again.");
    }
  };

  return (
    <Container maxWidth="sm" style={{ marginTop: "50px" }}>
      <Typography variant="h4" gutterBottom color="primary">
        Login
      </Typography>
      <form onSubmit={handleLogin}>
        <TextField
          label="Email"
          type="email"
          fullWidth
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <TextField
          label="Password"
          type="password"
          fullWidth
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <Button
          type="submit"
          variant="contained"
          color="secondary"
          fullWidth
          style={{ marginTop: "20px" }}
        >
          Login
        </Button>
      </form>
      {error && <Alert severity="error" style={{ marginTop: "20px" }}>{error}</Alert>}
    </Container>
  );
};

export default LoginPage;
