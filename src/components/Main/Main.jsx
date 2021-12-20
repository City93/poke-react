import React, {useState, useEffect} from "react";
import Form from "./Form/Form";
import ListaPokemon from '../ListaPokemon/ListaPokemon'

import axios from 'axios'

const Main = () => {
  const [input, changeInput] = useState('');
  const [pokemon, changePokemon] = useState([])


  useEffect(() => {
    const getPokemons = async (pokemonName) =>{
      const data = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`)
      const pokeInfo = {
        name: data.data.name,
        img: data.data.sprites.front_default
      }
      //console.log(pokeInfo)
      changePokemon([...pokemon,pokeInfo])
    }
    getPokemons(input);
}, [input]);

  const handleChange = (name) =>{
    changeInput(name)
  }


  return <div className="main">
    <Form handleChange = {(e) =>handleChange(e)}/>
    <ListaPokemon pokeInfo={pokemon}/>
  </div>;
};

export default Main;
