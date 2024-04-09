import Hello from './component/nav'
import PokemonCard from './components/PokemonCard'
import NavBar from "./components/NavBar";
import './App.css'
import { useState } from "react";

function App() {
  const pokemonList = [

    {
    
        name: "bulbasaur",
    
        imgSrc:
    
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    
      },
    
      {
    
        name: "charmander",
    
        imgSrc:
    
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    
      },
    
      {
        name: "squirtle",    
        imgSrc:    
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",    
      },    
      {    
        name: "pikachu",    
        imgSrc:    
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
      },
      {
        name: "mew",
      },
    ];
  
  const [pokemonIndex, setpokemonIndex] = useState(0);

  const handleClickSuivant=()=>{
    setpokemonIndex(pokemonIndex + 1)
  }
  const handleClickPrecedent=()=>{
    setpokemonIndex(pokemonIndex - 1)
  }
  const btnPrecedentActive = pokemonIndex > 0;
  const btnSuivantActive = pokemonIndex < pokemonList.length - 1;

  return (
    <>
    <div>
      <Hello/>
      <NavBar
      handleClickPrecedent={handleClickPrecedent}
      handleClickSuivant={handleClickSuivant}
      btnPrecedentActive={btnPrecedentActive}
      btnSuivantActive={btnSuivantActive}/>
      <PokemonCard doudi={pokemonList[pokemonIndex]} />
      
      </div>
      
    </>
  )
}



export default App
