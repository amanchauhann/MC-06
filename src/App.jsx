import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import DishDetail from './Pages/DishDetail'

function App() {
  return (
    <>
      <Routes>
        <Route element={<Home />} path='/' />
        <Route element={<DishDetail />} path='/:restaurant_id' />

      </Routes>
    </>
  )
}

export default App
