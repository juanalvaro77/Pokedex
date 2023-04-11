import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
//// Importacion libreria para traer valor global Visitor.
import {useSelector} from "react-redux";


const Pokedexindividual = () => {
    ////Me traigo valor global "visitor"////
    const pokemonwrited = useSelector(state => state.pokemonwrited)
    const [pokemonMoves, setPokemonMoves] =useState([]); 
    const [pokemonAbilites, setPokemonAbilites]=useState([])
    const [pokemonTypes, setPokemonTypes]=useState([])
    const { name } = useParams();
    const [pokemon, setPokemon] = useState("")
    useEffect (()=>{
        axios
            .get(`https://pokeapi.co/api/v2/pokemon/${name}`)
            .then(resp => setPokemon(resp.data))
            .catch(error => console.error(error))
        
    },[name])

    axios
    .get(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
    .then(resp => {
      setPokemonMoves(resp.data.moves)
      setPokemonAbilites(resp.data.abilities)
      setPokemonTypes(resp.data.types)

    })
    .catch(error => console.error(error))

    
    return (
        <div className='pokedex-individual'>
            <div className='image'><img src={pokemon?.sprites?.front_default} alt="" /></div>
            <div className='areaName'><h1 className="areaName2">{pokemon.name}</h1><h2>Weight: {pokemon.weight}</h2><h2>Height: {pokemon.height}</h2></div>
            <div className='areaType'><h1>Type: </h1>
            <ul type="none">
              {pokemonTypes.map((pkT) => (
                <li key={pkT.id}>
                  <div >
                    <h2>{pkT.type.name}</h2>
                  </div>
                </li>
              
            ))}
            </ul>

            </div>
            <div className='areaAbilities'><h1>Abilities: </h1>
            <ul type="none">
              {pokemonAbilites.map((pkA) => (
                <li key={pkA.id}>
                  <div >
                    <h2>{pkA.ability.name}</h2>
                  </div>
                </li>
              
            ))}
            </ul>
            </div>
                
            <div className='areaMovments'><h1>Movments: </h1>
     <ul type="none">
              {pokemonMoves.map((pkM) => (
                <li key={pkM.id}>
                  <div >
                    <h3>{pkM.move?.name}</h3>
                  </div>
                </li>
              
            ))}
</ul>
            </div>
            <Link className="link-back" to="/pokedex">Volver</Link>    
        </div>

    );
  };

export default Pokedexindividual;
/*import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const PokemonDetails = () => {
  const [details, setDetails] = useState({});
  const { name } = useParams();
  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then((resp) => setDetails(resp.data))
      .catch((error) => console.error(error));
  }, [name]);

  return (
    <div className="pokemon-card">
      <h1>Pokemones</h1>
      <h2>{details.name}</h2>
      <img src={details.sprites?.front_default} alt="" />
      <Link to="/pokedex">Volver</Link>
    </div>
  );
};

export default PokemonDetails;*/