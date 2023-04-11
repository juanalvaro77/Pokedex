import { useEffect, useState } from 'react';
import axios from "axios";
import {useDispatch} from "react-redux";

const PokemonCard = () => {
    const [pokemonCards,setPokemonCards] = useState("pikachu")
    const dispatch=useDispatch()
    useEffect(()=>{
        axios
            .get(`https://pokeapi.co/api/v2/pokemon/${pokemonCards}`)
            .then((resp)=>setPokemonCards(resp.data))
            .catch((error)=>console.error(error));
    },[])
    return (
    <div className='pokemonCard-container'>   
                    <img src={pokemonCards?.sprites?.front_default} alt="" /><br/>
                    <span className='pokemonCard-tittle'><h1>{pokemonCards.name}</h1></span><br/>
                    <div className='pokemonCard-glove'>
                        <span>Types: </span>{pokemonCards.types?.[0]?.type?.name}<br/>
                    </div>
                    <div className='pokemonCard-glove'>
                    <span>Hp: </span><br/></div>
                    <div className='pokemonCard-glove'>
                    <span>Attak: </span><br/></div>
                    <div className='pokemonCard-glove'>
                    <span>Defense: </span><br/></div>
                    <div className='pokemonCard-glove'>
                    <span>Speed: </span></div>
        </div>
    );
}; export default PokemonCard;
