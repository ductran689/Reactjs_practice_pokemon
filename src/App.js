import React from "react";
import PokeCards from "./components/PokeCards";
import { mockPokemonsData } from "./mock/pokeData";

import "./styles.css";

export default function App() {
  const name = mockPokemonsData.map((pokemon) => pokemon.name);
  console.log(name);

  const imgDefault = mockPokemonsData.map((pokemon) =>
    pokemon.sprites.back_default
      ? pokemon.sprites.back_default
      : pokemon.sprites.front_default
  );
  const imgShiny = mockPokemonsData.map((pokemon) =>
    pokemon.sprites.back_shiny
      ? pokemon.sprites.back_shiny
      : pokemon.sprites.front_shiny
  );
  const videoLink = mockPokemonsData.map((pokemon) => pokemon.videoLink);
  return (
    <div className="App">
      <h1>2o. Challenge: Loops</h1>
      <PokeCards
        name={name}
        imgDefault={imgDefault}
        imgShiny={imgShiny}
        videoLink={videoLink}
      />
    </div>
  );
}
