import React from "react";
import { useNavigate } from "react-router-dom";
import "../Style.css"; // تأكد من مسار الملف صحيح

function Enseignant() {
  const navigate = useNavigate();

  const handleRetour = () => {
    navigate("/"); // يرجع لصفحة Login
  };

  return (
    <div className="page-container">
      <h1 className="title">Espace Enseignant 👨‍🏫</h1>

      <p>
        Bienvenue dans votre espace enseignant.  
        Vous pouvez gérer vos cours, suivre les étudiants et ajouter du contenu pédagogique.
      </p>

      <div className="card">
        <h2>📁 Vos Classes</h2>
        <ul>
          <li>2ème année – Développement Web</li>
          <li>1ère année – Algorithmique</li>
          <li>3ème année – Base de Données</li>
        </ul>
      </div>

      <div className="card">
        <h2>📝 Gestion des devoirs</h2>
        <button className="btn">Ajouter un devoir</button>
        <button className="btn">Consulter devoirs</button>
      </div>

      <div className="card">
        <h2>📢 Annonces pour étudiants</h2>
        <button className="btn">Créer une annonce</button>
      </div>

      <button className="logout-btn" onClick={handleRetour}>
        Retour
      </button>
    </div>
  );
}

export default Enseignant;
