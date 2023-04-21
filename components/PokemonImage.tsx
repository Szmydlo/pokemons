import { usePokemon, usePokemonDispatch } from "@/context/PokemonContext";

import Image from "next/image";
import React from "react";

const PokemonImage = () => {
  const pokemon = usePokemon();
  const pokemonDispatch = usePokemonDispatch();

  const handleTryAgain = () => {
    pokemonDispatch({ type: "reset" });
  };
  let renderedComponent = (
    <div className="table">
      <p className="table-cell text-center align-middle">
        Please submit a pokemon!
      </p>
    </div>
  );
  if (pokemon.loading) {
    renderedComponent = <div className=" m-auto">Loading...</div>;
  }
  if (pokemon.imageUrl) {
    renderedComponent = (
      <Image
        src={pokemon.imageUrl ? pokemon.imageUrl : ""}
        alt="Please submit a pokemon!"
        width={160}
        height={160}
        className="m-auto"
      />
    );
  }
  if (pokemon.error) {
    renderedComponent = (
      <div className="m-auto">
        <p className="text-center align-middle mb-2">
          Error while loading {pokemon.name}
        </p>
        <button
          onClick={handleTryAgain}
          className="m-auto block bg-red-400 rounded-md w-24 leading-8"
        >
          Try again
        </button>
      </div>
    );
  }

  return (
    <div className="border border-dashed rounded-md w-[180px] h-[180px] flex m-auto mb-4">
      {renderedComponent}
    </div>
  );
};

export default PokemonImage;
