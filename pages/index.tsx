import DisplayBox from "@/components/DisplayBox";
import { Inter } from "next/font/google";
import Pokemon from "@/components/Pokemon";
import { PokemonProvider } from "@/context/PokemonContext";
import SearchBar from "@/components/SearchBar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="flex h-screen">
      <div className="m-auto">
        <PokemonProvider>
          <SearchBar />
          <DisplayBox>
            <Pokemon></Pokemon>
          </DisplayBox>
        </PokemonProvider>
      </div>
    </div>
  );
}
