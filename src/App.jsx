import Hello from './component/nav'
import PokemonCard from './components/PokemonCard'
import './App.css'

function App() {
  const pokemonList = [
    {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "pika",
      imgSrc:
        "https://i.etsystatic.com/46611762/r/il/323a26/5653417372/il_794xN.5653417372_12rs.jpg",
    },
    {
      name: "mew",
    },
  ]
  return (
    <>
    <div>
      <Hello/>
      <PokemonCard doudi={pokemonList[0]} />
      </div>
      
    </>
  )
}

export default App
