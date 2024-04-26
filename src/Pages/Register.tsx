import React, { useState } from "react";
import axios from "axios";

const Register: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    try {
      await axios.post("http://localhost:5000/register", { email, password });
      console.log("Cadastro realizado com sucesso!");
    } catch (error) {
      console.error("Erro ao cadastrar:", error);
    }
  };

  return (
    <div>
      <h2>Cadastro</h2>
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
      <button onClick={handleRegister}>Cadastrar</button>
    </div>
  );
};

export default Register;
