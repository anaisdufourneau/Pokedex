import "./App.css";
import PokemonCard from "./components/PokemonCard.jsx";
import { useState } from "react";

 
  const pokemonList = [
    {
     
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "mew",
      imgSrc: "",
    },
    {
      name: "charmander",
      imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    },
    {
      name: "squirtle",
      imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    },
    {
    name: "pikachu",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    },
  ];

  function App() { 
    const [pokemonIndex, setPokemonIndex] = useState(0);
   const nextClick=( ) => {
    if(pokemonIndex < pokemonList.length -1) {
      setPokemonIndex(pokemonIndex+1)
     }
     
     }
     const previewClick=( ) => {
      if(pokemonIndex > 0) {
        setPokemonIndex(pokemonIndex-1)
      }

   }
  return (
    <>
    <button onClick={previewClick}>PREVIEW</button>
    <button onClick={nextClick}>NEXT</button>
      {/* {pokemonList.map((user) => {
        return <PokemonCard key={pokemonList.id}pokemon={user} />;
      })} */}

      

      <div>
        <PokemonCard pokemon={pokemonList[pokemonIndex]}/>
      </div>
    </>
  );
}

export default App
