// src/pages/ChoixUtilisateur.js
import React from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

function ChoixUtilisateur() {
  const navigate = useNavigate();

  return (
    <div className="selection-container">
      <h2>Choisissez votre type d'utilisateur</h2>

      <button onClick={() => navigate("/etudiant")}>Espace Étudiant</button>
      <button onClick={() => navigate("/enseignant")}>Espace Enseignant</button>

      <button className="logout-btn" onClick={() => navigate("/login")}>
        Déconnexion
      </button>
    </div>
  );
}

export default ChoixUtilisateur;
