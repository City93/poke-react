import './App.css';

import React, {useEffect, useState} from 'react'

import Main from './components/Main/';
import Header from './components/Header/'
import Footer from './components/Footer/'

import axios from 'axios'

import { pokeContext } from './context/pokeContext';
import {BrowserRouter} from 'react-router-dom';
import { useDebounce } from "use-debounce";


function App() {
  const [input, changeInput] = useState('');
  const [pokemon, changePokemon] = useState([])
  const [lastPokemon, changeLastPokemon] = useState({})
  const [value] = useDebounce(input, 1000)

  useEffect(() => {
    const getPokemons = async (pokemonName) =>{
      
      if(value && !(pokemon.find(element => element.name === pokemonName.toLowerCase()))) try{
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
  const newPokemon = (pokeInfo) =>{
    changePokemon([...pokemon,pokeInfo])
  }

  const pokeInfo = {
    pokemon,
    changeInput,
    lastPokemon,
    newPokemon,
    handleChange
  }



  return (
    <div className="App">
      <BrowserRouter>
      <pokeContext.Provider value = {pokeInfo}>
      <Header/>
      <Main/>
      </pokeContext.Provider>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
