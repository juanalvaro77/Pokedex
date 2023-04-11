import { useState } from 'react'
import './App.css'
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import Pokedex from "./views/Pokedex.jsx";
import Tecnologies from "./views/Tecnologies";
import MainLayout from "./components/MainLayout";
import PokedexIndividual from "./views/PokedexIndividual"
import PokemonCard from "./components/PokemonCard"

export default function App() {
  return (
      <div className="App">
        <PokemonCard />
      </div>
    
  );
}
