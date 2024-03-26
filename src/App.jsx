import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Hello from './component/nav'
import PokemonCard from './components/PokemonCard'
import './App.css'

function App() {
  return (
    <>
    <div>
      <Hello/>
      <PokemonCard/>
      </div>
      
    </>
  )
}

export default App
