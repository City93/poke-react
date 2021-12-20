import React, {useState, useEffect} from "react";
import Form from "./Form/Form";
import Card from './Card/Card'

import axios from 'axios'

const Main = () => {
  const [input, changeInput] = useState('');
  const [pokemon, changePokemon] = useState({})


  useEffect(() => {
    const getPokemons = async (pokemonName) =>{
      const data = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
      const pokeInfo = {
        name: data.data.name,
        img: data.data.sprites.front_default
      }
      //console.log(pokeInfo)
      changePokemon(pokeInfo)
    }
    getPokemons(input);
}, [input]);

  const handleChange = (name) =>{
    changeInput(name)
  }


  return <div className="main">
    <Form handleChange = {(e) =>handleChange(e)}/>
    <Card pokeInfo={pokemon}/>
  </div>;
};

export default Main;
