import React from 'react';

function Card(props) {
  const { pokemon, onClick } = props;
  // React.useEffect(() => {
  //   async function gettingImgUrl(pokemon) {
  //   }
  // }, []);
  return pokemon.hasOwnProperty('images') ? (
    <div className="card">
      {console.log('Card was rendered.')}
      <img
        className="cardImg"
        src={pokemon.images.large}
        alt={pokemon.name}
        onClick={() => onClick({ id: pokemon.id, name: pokemon.name })}
      />
    </div>
  ) : (
    'Loading...'
  );
}
export default Card;
