import { loginUser } from "../services/TS.api";

function Login() {
  const handleLogin = () => {
    loginUser({ email: "user4@example.com", password: "password123" })
      .then((res: any) => {
        localStorage.setItem("token", res.data.token);
        alert("Login successful!");
      })
      .catch((err: any) => {
        console.error("Login failed:", err);
      });
  };

  return <button onClick={handleLogin}>Login</button>;
}

export default Login;
