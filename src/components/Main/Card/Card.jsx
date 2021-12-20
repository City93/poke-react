import React from "react";

const Card = (props) => {
  console.log(props.pokeInfo.name)
  return props.pokeInfo.name?<div>
    <p>Pokemon name: {props.pokeInfo.name}</p>
    <img src={props.pokeInfo.img} alt="" />
  </div>:'';
};

export default Card;
