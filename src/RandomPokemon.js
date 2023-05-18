import React from 'react';
import "./RandomPokemon.css";

export default function RandomPokemon() {
  const pokemonNum = Math.floor(Math.random()*151) +1;
  const url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonNum}.png`;

  return (
    <div className="RandomPokemon">
      <h1>Pokemon #{pokemonNum}</h1>
      <img src={url} alt="img" />
    </div>
  )
}