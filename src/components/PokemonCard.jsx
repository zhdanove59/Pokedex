function PokemonCard() {
  const pokemon = pokemonList[2]
    return( <>
    {pokemon.imgSrc?(<img src={pokemon.imgSrc}/>):(<p>??????</p>)}
    <figcaption>{pokemon.name}</figcaption>

</>
)
  };
  const pokemonList = [
    {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "pika",
      imgSrc:
        "https://i.pinimg.com/736x/5d/6d/23/5d6d23fd7adb44baba20a60c252da339.jpg",
    },
    {
      name: "mew",
    },
  ]
  export default PokemonCard;
  