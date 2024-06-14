import PropTypes from "prop-types";

export default function PokemonCard({ pokemon }) {
  return (
    <>
      <figure>
        <h1>{pokemon.name}</h1>
        {pokemon.imgSrc ? <img src={pokemon.imgSrc} /> : <p>???</p>}{" "}
      </figure>
    </>
  );
}
PokemonCard.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string.isRequired,
    imgSrc: PropTypes.string,
  }),
};


