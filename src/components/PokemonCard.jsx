function PokemonCard() {
  const pokemon = pokemonList[0];
  return (
    <>
    
      <figure>
        <h1>{pokemon.name}</h1>
        {pokemon.imgSrc ? <img src={pokemon.imgSrc} /> : <p>???</p>}
      </figure>
    </>
  );
 
}

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
];
export default PokemonCard;
