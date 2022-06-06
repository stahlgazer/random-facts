import React from 'react'
import './App.scss'
import Factoftheday from './components/Factoftheday'
import Randomfact from './components/Randomfact'

export default function App() {
  return (
    <div>
      <Factoftheday />
      <Randomfact />
    </div>
  )
}
