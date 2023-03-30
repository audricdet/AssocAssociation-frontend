import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {AuthProvider} from "./components/Auth"
import {RequireAuth} from './components/RequireAuth'
import React from "react"
import BottomNav from './components/BottomNAv'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage';
import AssociationsPage from './pages/AssociationsPage';


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div className='full'>
      <AuthProvider>
        <BrowserRouter history={history}>
          <Routes>
            <Route path="/login" element={<LoginPage />} /> 
            <Route path="/register" element={<RegisterPage/>}/>
            <Route path="/associations" element={<AssociationsPage/>}/>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
    </div>
  )
}

export default App
