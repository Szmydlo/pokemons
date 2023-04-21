import React, { FormEvent, KeyboardEvent, useState } from "react";
import {
  initialPokemon,
  usePokemon,
  usePokemonDispatch,
} from "@/context/PokemonContext";

import ShortcutButton from "./ShortcutButton";
import fetchPokemon from "@/utils/fetchUtils";

const SearchBar = () => {
  const pokemon = usePokemon();
  const pokemonDispatch = usePokemonDispatch();
  const [pokemonName, setPokemonName] = useState("");

  const fetchData = async (pokemonName: string) => {
    pokemonDispatch({
      type: "loading",
      payload: { ...initialPokemon, name: pokemonName },
    });
    try {
      const pokemonData = await fetchPokemon(pokemonName);
      pokemonDispatch({
        type: "change",
        payload: { ...pokemonData, loading: false, error: false },
      });
    } catch (e) {
      setPokemonName("");
      pokemonDispatch({
        type: "error",
        payload: { ...initialPokemon, name: pokemonName },
      });
    }
  };

  const handlePokemonInput = (e: FormEvent<HTMLInputElement>) => {
    setPokemonName(e.currentTarget ? e.currentTarget.value : "");
  };
  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Enter") fetchData(pokemonName);
  };

  const suggestions = (
    <p className="text-[12px] mb-4">
      Out of ideas? Try{" "}
      <ShortcutButton
        onClick={() => {
          fetchData("Pikachu");
          setPokemonName("Pikachu");
        }}
      >
        Pikachu
      </ShortcutButton>
      ,{" "}
      <ShortcutButton
        onClick={() => {
          fetchData("Ninetales");
          setPokemonName("Ninetales");
        }}
      >
        Ninetales
      </ShortcutButton>
      , or{" "}
      <ShortcutButton
        onClick={() => {
          fetchData("Charizard");
          setPokemonName("Charizard");
        }}
      >
        Charizard
      </ShortcutButton>
      .
    </p>
  );

  return (
    <div className="w-[600px]">
      <input
        placeholder="Which pokemon?"
        className="bg-slate-700 w-[85%] leading-9 rounded-md mr-4"
        value={!pokemonName ? pokemon.name : pokemonName}
        onChange={handlePokemonInput}
        onKeyDown={handleKeyDown}
      ></input>
      <button
        className="bg-cyan-400 w-16 leading-9 rounded-md text-black"
        onClick={() => fetchData(pokemonName)}
      >
        Fetch!
      </button>
      {suggestions}
    </div>
  );
};

export default SearchBar;
