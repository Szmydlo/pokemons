import PokemonAbilities from "./PokemonAbilities";
import PokemonImage from "./PokemonImage";
import React from "react";
import { usePokemon } from "@/context/PokemonContext";

const Pokemon = () => {
  const pokemon = usePokemon();

  let pokemonTitle = "No Pokemon Yet! (xxx)";
  if (pokemon.loading) {
    pokemonTitle = `Loading ${pokemon.name}`;
  }
  if (pokemon.abilities.length) {
    pokemonTitle = `${pokemon.name} (${pokemon.number})`;
  }
  if (pokemon.error) {
    pokemonTitle = "Error";
  }

  return (
    <div className="flex-col">
      <div className="m-auto w-[300px] text-center mb-4 text-[24px]">
        {pokemonTitle}
      </div>
      <PokemonImage></PokemonImage>
      <PokemonAbilities></PokemonAbilities>
    </div>
  );
};

export default Pokemon;
