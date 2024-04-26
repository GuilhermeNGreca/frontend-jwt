import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import { Private } from "./Pages/Private";

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <h3>autenticação e Autorização</h3>
        <nav>
          <ul>
            <li>
              <Link to="/register">Registrar</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/private" element={<Private />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
