function PokemonCard({ pokemon }) {
  
  
  return (
  <> 
    <figure><h1>{pokemon.name}</h1>{pokemon.imgSrc ? <img src={pokemon.imgSrc} /> : <p>???</p>} </figure> 
  </>
  )

}


export default PokemonCard;
