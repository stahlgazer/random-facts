import React from 'react'
import './App.scss'
import About from './components/About'
import Factoftheday from './components/Factoftheday'
import Randomfact from './components/Randomfact'

export default function App() {
  return (
    <div>
      <About />
      <Factoftheday />
      <Randomfact />
    </div>
  )
}
