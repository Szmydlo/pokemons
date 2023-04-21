import {
  Dispatch,
  ReactNode,
  Reducer,
  createContext,
  useContext,
  useReducer,
} from "react";

interface PokemonState {
  error: boolean;
  loading: boolean;
  number: string;
  name: string;
  imageUrl: string;
  abilities: Array<{
    name: string;
    type: string;
    damage: number;
  }>;
}

interface PokemonAction {
  type: "change" | "loading" | "loadingFinished" | "error" | "reset";
  payload?: PokemonState;
}

export const initialPokemon: PokemonState = {
  error: false,
  loading: false,
  number: "",
  name: "",
  imageUrl: "",
  abilities: [],
};

const PokemonContext = createContext<PokemonState>(initialPokemon);
const PokemonDispatchContext = createContext<Dispatch<PokemonAction>>(
  () => null
);

const PokemonReducer: Reducer<PokemonState, PokemonAction> = (
  pokemonState,
  action
) => {
  switch (action.type) {
    case "change": {
      return action.payload;
    }
    case "loading": {
      return { ...action.payload, loading: true };
    }
    case "loadingFinished": {
      return { ...action.payload, loading: false };
    }
    case "error": {
      return { ...action.payload, error: true };
    }
    case "reset": {
      return initialPokemon;
    }
  }
};

export const usePokemon = () => useContext(PokemonContext);
export const usePokemonDispatch = () => useContext(PokemonDispatchContext);

export const PokemonProvider = ({ children }: { children: ReactNode }) => {
  const [pokemonState, dispatch] = useReducer<
    Reducer<PokemonState, PokemonAction>
  >(PokemonReducer, initialPokemon);

  return (
    <PokemonContext.Provider value={pokemonState}>
      <PokemonDispatchContext.Provider value={dispatch}>
        {children}
      </PokemonDispatchContext.Provider>
    </PokemonContext.Provider>
  );
};
