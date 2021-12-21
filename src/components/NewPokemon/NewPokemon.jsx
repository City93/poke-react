import React from "react";
import { useForm } from "react-hook-form";

const NewPokemon = (props) => {

  const { register, handleSubmit } = useForm();


  const onSubmit = data => props.newPokemon(data);


  return     <form onSubmit={handleSubmit(onSubmit)}>
  {/* register your input into the hook by invoking the "register" function */}
  <input required placeholder="Id Pokemon"{...register("id")} /><hr/>
  <input minLength='3' required placeholder="Nombre Pokemon"{...register("name")} /><hr/>
  <input required placeholder="Url imagen Pokemon"{...register("img")} /><hr/>
  <select required {...register("type1")}>
        <option value="bicho">Bicho</option>
        <option value="siniestro">Siniestro</option>
        <option value="dragon">Dragon</option>
        <option value="electrico">Electrico</option>
        <option value="hada">Hada</option>
        <option value="lucha">Lucha</option>
        <option value="fuego">Fuego</option>
        <option value="volador">Volador</option>
        <option value="fantasma">Fantasma</option>
        <option value="planta">Planta</option>
        <option value="tierra">Tierra</option>
        <option value="hielo">Hielo</option>
        <option value="normal">Normal</option>
        <option value="veneno">Veneno</option>
        <option value="psiquico">Psiquico</option>
        <option value="piedra">Piedra</option>
        <option value="acero">Acero</option>
        <option value="agua">Agua</option>
  </select>
  <select {...register("type2")}>
  <option placeholder="Tipo 2" value="bicho">Bicho</option>
        <option value="" defaultValue>Tipo 2</option>
        <option value="siniestro">Siniestro</option>
        <option value="dragon">Dragon</option>
        <option value="electrico">Electrico</option>
        <option value="hada">Hada</option>
        <option value="lucha">Lucha</option>
        <option value="fuego">Fuego</option>
        <option value="volador">Volador</option>
        <option value="fantasma">Fantasma</option>
        <option value="planta">Planta</option>
        <option value="tierra">Tierra</option>
        <option value="hielo">Hielo</option>
        <option value="normal">Normal</option>
        <option value="veneno">Veneno</option>
        <option value="psiquico">Psiquico</option>
        <option value="piedra">Piedra</option>
        <option value="acero">Acero</option>
        <option value="agua">Agua</option>
  </select>
  
  <input type="submit" />
</form>;
};

export default NewPokemon;
