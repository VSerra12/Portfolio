
import React from 'react'
import './App.css'
import Portfolio from './component/Portfolio'
import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
      <React.StrictMode>
        <Routes>
          <Route path='/Portfolio/' element={<Portfolio/>}/>
        </Routes>
      </React.StrictMode>,
    </>
  )
}

export default App
