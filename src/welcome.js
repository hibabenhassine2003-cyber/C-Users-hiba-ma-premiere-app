import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Welcome() {
  const navigate = useNavigate();

  const handleLogout = () => {
    alert("Vous êtes déconnecté !");
    navigate("/");
  };

  return (
    <div className="welcome-page">
      <header className="navbar">
        <button className="logout-btn" onClick={handleLogout}>Logout</button>
      </header>

      <main className="welcome-content">
        <h1>Bienvenue 🎉</h1>
        <p className="subtitle">Veuillez choisir votre profil :</p>
        <div className="role-buttons">
          <Link to="/formulaire" className="role-btn">Étudiant</Link>
          <Link to="/formulaire" className="role-btn">Enseignant</Link>
        </div>
      </main>
    </div>
  );
}

export default Welcome;
