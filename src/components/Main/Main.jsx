import React, {useState, useEffect} from "react";
import Form from "./Form/Form";
import ListaPokemon from '../ListaPokemon/ListaPokemon'
import { useDebounce } from "use-debounce";

import {Route, Routes} from 'react-router-dom';

import axios from 'axios'
import NewPokemon from "../NewPokemon/NewPokemon";

const Main = () => {
  const [input, changeInput] = useState('');
  const [pokemon, changePokemon] = useState([])
  const [lastPokemon, changeLastPokemon] = useState({})
  const [value] = useDebounce(input, 1000)

  useEffect(() => {
    const getPokemons = async (pokemonName) =>{
      
      if(value && !(pokemon.find(element => element.name === pokemonName))) try{
        const data = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`)
        const pokeInfo = {
          name: data.data.name,
          img: data.data.sprites.versions["generation-v"]["black-white"].animated.front_default || data.data.sprites.front_default
        }
         changePokemon([...pokemon,pokeInfo])
         changeLastPokemon(pokeInfo)
      } catch (err){
        alert('try again')
      }
    }
    getPokemons(value);
}, [value]);

  const handleChange = (name) =>{
    changeInput(name)
  }


  return <main className="main">
    <Routes>
      <Route path="/" element={<ListaPokemon pokeInfo={pokemon}/>} exact />
      <Route path="/new" element={<NewPokemon/>} />
      <Route path="/search" element={<Form lastPokemon={lastPokemon} handleChange = {(e) =>handleChange(e)}/>} />
    </Routes>
  </main>;
};

export default Main;
