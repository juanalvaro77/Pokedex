import { Link } from "react-router-dom";
import axios from "axios";
import {useForm} from "react-hook-form"
import { useEffect, useState } from "react";
//// Importacion libreria para traer valor global Visitor.
import {useSelector} from "react-redux";
//////////////////////////////////////////////
//// Importacion libreria para enviar valor global "".
import {useDispatch} from "react-redux";
////////////////////////////
import {setNewPk} from "../store/slices/pokemonwish.slice"

const Pokedex = () => {
  const [pokemons, setPokemons] = useState([]);
  const [view, setView] = useState({ next: null, prev: null });
  const [pokName, setPokName] = useState("");
  const [typePokemon, setTypePokemon]=useState("");
  const [pokemonDetail, setPokemonDetail] =useState("hola");
  
  ////Me traigo valor global "visitor"////
  const visitor = useSelector(state => state.visitor)
  const pokemoncard = useSelector(state=>state.pokemoncard)
  const dispatch=useDispatch()
  useEffect(() => {
  ////Captura API////
    axios
      .get("https://pokeapi.co/api/v2/pokemon")
      .then((resp) => {
        setPokemons(resp.data.results);
        setView({ next: resp.data.next, prev: resp.data.previous });
      })
      .catch((error) => console.error(error));
    }, []);

    ////Si presionan NEXT////
  const goToNextView = () => {
    axios
      .get(view.next)
      .then((resp) => {
        setPokemons(resp.data.results);
        setView({ next: resp.data.next, prev: resp.data.previous });
      })
      .catch((error) => console.error(error));
  };
  ////Si presionan PREVIOUS////
  const goToPreView = () => {
    axios
      .get(view.prev)
      .then((resp) => {
        setPokemons(resp.data.results);
        setView({ next: resp.data.next, prev: resp.data.previous });
      })
      .catch((error) => console.error(error));
  };
  ////Capturando pokemon escrito por el usuario////
  
        ////Ingresando en el input////
                    const captureName = (event) => {
                    setPokName(event.target.value);
                  };
        ////Dando Click////
                  const searchByName = () => {dispatch(setNewPk(pokName))};
                  let typePokemon2=""  
                  const changeType = (event) => {
                    typePokemon2=event.target.value;
                  };
                  const asignType =()=>{
                    setTypePokemon(typePokemon2)
                  }
                
////// TRAER INFORMACION DE CADA TARJETA
axios
.get(`https://pokeapi.co/api/v2/pokemon/pikachu`)
.then(resp => setPokemonDetail(resp.data))
.catch(error => console.error(error))

////// TRAER INFORMACION DE CADA TARJETA
  return (
    <div>
      <div className="init">
      <img src="./ImagenPokedex.jpg" alt="" />
          <h2>Hola {visitor} te damos la bienvenida</h2>
          <input
            type="text"
            placeholder="Escribe tu Pokemon"
            value={pokName}
            onChange={captureName}
          />
          <Link to={`/pokedex/${pokName}`}>
              <input
                className="button-search"
                type="button"
                value="Search"
                onClick={searchByName}
              />
          </Link>
          <h3>
            o <br />
            tambien puedes escoger del listado de Pokemones
          </h3>
            <label htmlFor="type">Filtrar por Tipo:  </label>
            <select name="types" id="type" onChange={changeType} value={typePokemon}>
              <option value="todos">Selecciona un tipo</option>
              <option value="normal">normal</option>
              <option value="fighting">fighting</option>
              <option value="flying">flying</option>
              <option value="poison">poison</option>
              <option value="ground">ground</option>
              <option value="rock">rock</option>
              <option value="bug">bug</option>
              <option value="ghost">ghost</option>
              <option value="steel">steel</option>
              <option value="fire">fire</option>
              <option value="water">water</option>
              <option value="grass">grass</option>
              <option value="electric">electric</option>
              <option value="psychic">psychic</option>
              <option value="ice">ice</option>
              <option value="dragon">dragon</option>
              <option value="dark">dark</option>
              <option value="fairy">fairy</option>
              <option value="unknown">unknown</option>
              <option value="shadow">shadow</option>
            </select>
            <button onClick={asignType}>Filtrar</button>
            <h1>FALTA EL FILTRO Y LA INFORMACION AL INTERIOR DE LA TARJETA</h1>
      </div>
      <div className="Pokedex-Container">
         <ul type="none">
              {pokemons.map((pokemonOther) => (
                <Link key={pokemonOther.name} to={`/pokedex/${pokemonOther.name}`}>
                <li>
                  <div className='pokemonCard-container'>
                    <img src={pokemonDetail.sprites?.front_default} alt="" />
                    <span className='pokemonCard-tittle'><h2>{pokemonOther.name}</h2></span>
                    <div className="pokemonCard-glove">
                      <h3><span>Types:</span>{pokemonDetail.types?.[0]?.type?.name}</h3></div>
                    <div className='pokemonCard-glove'>
                      <h3><span>Hp: </span>{pokemonDetail.stats?.[0]?.base_stat}</h3></div>
                    <div className='pokemonCard-glove'>
                      <h3><span>Attak: </span>{pokemonDetail.stats?.[1]?.base_stat}</h3></div>
                    <div className='pokemonCard-glove'>
                      <h3><span>Defense: </span>{pokemonDetail.stats?.[2]?.base_stat}</h3></div>
                    <div className='pokemonCard-glove'>
                      <h3><span>Speed: </span>{pokemonDetail.stats?.[5]?.base_stat}</h3></div>
                  </div>
                </li>
              </Link>
            ))}
          </ul>
        </div>
        <div className="finish">
          <Link to="/">Inicio</Link>
          <button onClick={goToPreView} disabled={!view.prev}>Anterior</button>
          <button onClick={goToNextView} disabled={!view.next}>Siguiente</button>
        </div>
    </div>
  );
};

export default Pokedex;