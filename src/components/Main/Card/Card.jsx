import React from "react";

const Card = (props) => {
  //console.log('esto es en card', props)
  return props.pokeInfo.name?<>
    <p>Pokemon name: {props.pokeInfo.name.charAt(0).toUpperCase() + props.pokeInfo.name.slice(1)}</p>
    <img src={props.pokeInfo.img} alt="" width='300px'/>
  </>:'';
};

export default Card;
