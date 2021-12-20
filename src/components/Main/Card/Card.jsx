import React from "react";

const Card = (props) => {
  console.log('esto es en card', props)
  return props.pokeInfo.name?<>
    <p>Pokemon name: {props.pokeInfo.name}</p>
    <img src={props.pokeInfo.img} alt="" />
  </>:'';
};

export default Card;
