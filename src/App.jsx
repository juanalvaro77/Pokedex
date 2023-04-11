import { useState } from 'react'
import './App.css'
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import Pokedex from "./views/Pokedex.jsx";
import MainLayout from "./components/MainLayout";
import PokedexIndividual from "./views/PokedexIndividual"
import PokemonCard from './components/PokemonCard';

export default function App() {
  return (
    <HashRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pokedex" element={<Pokedex />} />
          <Route element={<MainLayout />}>
 
            <Route path="/Pokedex/:name" element={<PokedexIndividual />} />
          </Route>
        </Routes>
      </div>
    </HashRouter>
  
  );
}

