import React from "react";
import Card from '../Card/Card'

const Form = (props) => {
  const handleSubmit = (e) =>{
    e.preventDefault();
    props.handleChange(e.target.value)
  }
  return <form id="pokemonForm">
    <label>¿Cuál es tu pokemon favorito? <br/>
    <input type="text" name="pokemonName" id="pokemonName" label="pokemon" onChange={handleSubmit} className="pokemonName"/>
    </label>
    <Card pokeInfo={props.lastPokemon}/>
  </form>;
};

export default Form;