import React from "react";
import { usePokemon } from "@/context/PokemonContext";

const PokemonAbilities = () => {
  const pokemon = usePokemon();
  return (
    <table className="table-auto m-auto w-[300px] border-collapse mb-2">
      <thead>
        <tr className="border-b-[1px] border-cyan-400 border-dashed">
          <th>Ability</th>
          <th>Type</th>
          <th>Damage</th>
        </tr>
      </thead>
      <tbody>
        {pokemon.abilities.length ? (
          pokemon.abilities.map((ability) => (
            <tr
              key={ability.name}
              className="text-center border-b-[1px] border-cyan-400 border-dashed"
            >
              <td>{ability.name}</td>
              <td>{ability.type}</td>
              <td>{ability.damage}</td>
            </tr>
          ))
        ) : (
          <tr className="text-center border-b-[1px] border-cyan-400 border-dashed">
            <td>-</td>
            <td>-</td>
            <td>-</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default PokemonAbilities;
