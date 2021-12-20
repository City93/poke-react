import React from "react";
import Card from '../Main/Card/Card'

const ListaPokemon = (props) => {

  console.log(props.pokeInfo)

  const paintPokemon = () =>{
   return props.pokeInfo.map((pokemon,i)=><Card pokeInfo={pokemon} key={i}/>)
  }    

  return <>
  <p>Lista de pokemones</p>
  {paintPokemon()}
  </>
};

export default ListaPokemon;
