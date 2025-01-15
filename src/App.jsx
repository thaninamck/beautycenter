import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Import manquant
import Home from './pages/Home'; // Assure-toi que ce chemin est correct
import { Anim } from './pages/GsapAnim';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Route vers la page d'accueil */}
        <Route path="/" element={<Home />} />
        <Route path="/Services" element={<Anim />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
