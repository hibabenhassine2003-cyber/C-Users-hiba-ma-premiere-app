import React from "react";
import { useNavigate } from "react-router-dom";  // لازم تستورد useNavigate
import "../Style.css";

function Etudiant() {
  const navigate = useNavigate();

  const handleRetour = () => {
    navigate("/"); // يرجع لصفحة Login
  };

  return (
    <div className="page-container">
      <h1 className="title">Bienvenue Étudiant 👨‍🎓</h1>

      <div className="card">
        <h2>📚 Vos Modules</h2>
        <ul>
          <li>Développement Web 2</li>
          <li>Base de Données</li>
          <li>Algorithmique & Structures</li>
          <li>UML 2 – Modélisation</li>
        </ul>
      </div>

      <div className="card">
        <h2>📝 Derniers devoirs</h2>
        <p>Aucun devoir pour le moment.</p>
      </div>

      <div className="card">
        <h2>📢 Annonces</h2>
        <p>⚠️ Examen Web 2 le 28 décembre 2025.</p>
      </div>

      <button className="logout-btn" onClick={handleRetour}>
        Retour
      </button>
    </div>
  );
}

export default Etudiant;
