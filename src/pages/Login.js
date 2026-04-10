// src/pages/Login.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Login.css";

function Login() {
  const [nom, setNom] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nom.trim() || !password.trim()) {
      alert("Veuillez saisir le nom et le mot de passe.");
      return;
    }
    // هنا يمكن تعمل تحقق حقيقي ضد API — الآن ننتقل ببساطة
    navigate("/choix");
  };

  return (
    <div className="login-container">
      <h2>Connexion</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nom d'utilisateur"
          value={nom}
          onChange={(e) => setNom(e.target.value)}
        />
        <input
          type="password"
          placeholder="Mot de passe"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Se connecter</button>
      </form>
    </div>
  );
}

export default Login;
