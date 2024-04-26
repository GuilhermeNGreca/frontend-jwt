import React, { useState } from "react";
import axios from "axios";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        "https://rooster-darling-routinely.ngrok-free.app/login",
        {
          username: email,
          password,
        },
        {
          headers: {
            "ngrok-skip-browser-warning": "1",
          },
        }
      );
      const { data } = response;
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", data.username);
      localStorage.setItem("phone", data.phone);
      localStorage.setItem("email", data.email);
    } catch (error) {
      console.error("Erro ao fazer login:", error);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Senha"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
