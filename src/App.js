// src/App.js
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import ChoixUtilisateur from "./pages/ChoixUtilisateur";
import Etudiant from "./pages/Etudiant";
import Enseignant from "./pages/Enseignant";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/choix" element={<ChoixUtilisateur />} />
        <Route path="/etudiant" element={<Etudiant />} />
        <Route path="/enseignant" element={<Enseignant />} />

       
        
      </Routes>
    </div>
  );
}

export default App;
