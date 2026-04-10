import React from "react";
import { useNavigate } from "react-router-dom";

function SelectionScreen() {
  const navigate = useNavigate();

  return (
    <div className="selection-screen">
      <h1>Choisissez votre type d'utilisateur</h1>

      <button onClick={() => navigate("/etudiant")}>
        Je suis un étudiant
      </button>

      <button onClick={() => navigate("/enseignant")}>
        Je suis un enseignant
      </button>
    </div>
  );
}

export default SelectionScreen;
