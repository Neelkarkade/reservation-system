import React, { useState } from "react";
import { registerUser } from "../services/TS.api";

const RegisterPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    try {
      await registerUser({ email, password });
      alert("Registration successful! You can now login.");
    } catch {
      alert("Registration failed. Try again.");
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <input value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" />
      <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" />
      <button onClick={handleRegister}>Register</button>
    </div>
  );
};

export default RegisterPage;
