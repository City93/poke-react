import React, {useContext} from "react";
import Form from "./Form/Form";
import ListaPokemon from '../ListaPokemon/ListaPokemon'

import { pokeContext } from "../../context/pokeContext";

import {Route, Routes} from 'react-router-dom';

import NewPokemon from "../NewPokemon/NewPokemon";

const Main = () => {

  const {pokemon, lastPokemon, newPokemon, handleChange} = useContext(pokeContext)

  return <main className="main">
    <Routes>
      <Route path="/" element={<ListaPokemon pokeInfo={pokemon}/>} exact />
      <Route path="/new" element={<NewPokemon newPokemon = {(e) =>newPokemon(e)}/>} />
      <Route path="/search" element={<Form lastPokemon={lastPokemon} handleChange = {(e) =>handleChange(e)}/>} />
    </Routes>
  </main>;
};

export default Main;
