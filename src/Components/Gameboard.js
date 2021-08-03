import React from 'react';
import Card from './Card';
import Score from './Score';

function Gameboard() {
  const [cards, setCards] = React.useState([]);
  const [deck, updateDeck] = React.useState([]);
  const [selectedCards, updateSelectedCards] = React.useState([]);
  const [roundScore, updateRoundScore] = React.useState(0);
  const [bestScore, updateBestScore] = React.useState(0);

  React.useEffect(() => {
    fetch('https://api.pokemontcg.io/v2/cards?q=set.id:base1', {
      mode: 'cors',
      headers: {
        'X-Api-key': process.env.REACT_APP_KEY,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        const pokedex = data.data.map(({ id, name, nationalPokedexNumbers, images }) => ({
          id,
          name,
          nationalPokedexNumbers,
          images,
        }));
        setCards(pokedex);
      });
  }, []);

  React.useEffect(() => {
    if (cards.length) {
      updateDeck(getRandom(cards, 8));
    }
  }, [cards]);
  //fuction {useeffect}
  function handleClick(pokemon) {
    if (selectedCards.find((SelectedPokemon) => pokemon.id === SelectedPokemon.id)) {
      console.log('You lost');
      if (roundScore > bestScore) {
        updateBestScore(roundScore);
      }
      updateRoundScore(0);
      updateSelectedCards([]);
      // ask if want to play again
    } else {
      updateSelectedCards((oldPokemon) => [...oldPokemon, pokemon]);
      updateRoundScore(roundScore + 1);
      console.log(pokemon, 'was clicked');
      console.log('Selected pokemons so far:', selectedCards);
    }
    updateDeck(getRandom(cards, 8));
  }

  function getRandom(arr, n) {
    var result = new Array(n),
      len = arr.length,
      taken = new Array(len);
    if (n > len) throw new RangeError('getRandom: more elements taken than available');
    while (n--) {
      var x = Math.floor(Math.random() * len);
      result[n] = arr[x in taken ? taken[x] : x];
      taken[x] = --len in taken ? taken[len] : len;
    }
    return result;
  }

  return deck.length === 8 ? (
    <div className="gameView">
      <Score roundScore={roundScore} bestScore={bestScore} />
      <div className="gameboard">
        {/* {console.log('Gameboard was rendered.')} */}
        {deck.map((card) => {
          return <Card pokemon={card} key={card.id} onClick={handleClick} />;
        })}
      </div>
    </div>
  ) : (
    <div className="loading">
      <p>Loading Pokemons...</p>
    </div>
  );
}
export default Gameboard;
