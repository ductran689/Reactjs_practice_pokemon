import React, { useState } from "react";
import { mockPokemonsData } from "../mock/pokeData";

export default function Todos(props) {
  const imgShiny = mockPokemonsData.map((pokemon) =>
    pokemon.sprites.back_shiny
      ? pokemon.sprites.back_shiny
      : pokemon.sprites.front_shiny
  );
  const imgDefault = mockPokemonsData.map((pokemon) =>
    pokemon.sprites.front_default
      ? pokemon.sprites.front_default
      : pokemon.sprites.back_default
  );
  function handleMouseOver(e) {
    const changeId = e.target.dataset.change;
    console.log(changeId);
    console.log(e.target.src);
    e.target.src = imgShiny[changeId];
  }
  function handleMouseOut(e) {
    const changeId = e.target.dataset.change;
    e.target.src = imgDefault[changeId];
  }
  const display = mockPokemonsData.map((pokemon, index) => (
    <li key={index + 10}>
      <h1 key={index}>{pokemon.name}</h1>
      <img
        key={index + 20}
        data-change={index}
        src={
          pokemon.sprites.front_default
            ? pokemon.sprites.front_default
            : pokemon.sprites.back_default
        }
        alt=""
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      />
    </li>
  ));

  return (
    <div className="todo-list">
      <ul>{display}</ul>
    </div>
  );
}
