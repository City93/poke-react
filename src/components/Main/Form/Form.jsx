import React, {useState} from "react";

const Form = (props) => {

  const handleSubmit = (e) =>{
    e.preventDefault();
    props.handleChange(e.target.pokemonName.value)
    document.getElementById('pokemonForm').reset()
  }
  return <form onSubmit={handleSubmit} id="pokemonForm">
    <label>¿Cuál es tu pokemon favorito? <br/>
    <input type="text" name="pokemonName" id="pokemonName" label="pokemon" />
    <button type="submit">Buscar</button>
    </label>
  </form>;
};

export default Form;

