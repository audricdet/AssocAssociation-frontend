import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {AuthProvider} from "./components/Auth"
import {RequireAuth} from './components/RequireAuth'
import React from "react"
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage';
import AssociationsPage from './pages/AssociationsPage';
import AssociationDetailsPage from './pages/AssociationDetailsPage';
import ProfilePage from './pages/ProfilePage';
import CompleteProfilePage from './pages/CompleteProfilePage';
import EditProfileInfos from './pages/EditProfilePage';
import CategoriesList from './pages/CategoriesList';
import CategoryAssociations from './pages/CategoryAssociations';


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
            <Route path="/associations/:id" element={<AssociationDetailsPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/categories" element={<CategoriesList />} />
            <Route path="/categories/:id" element={<CategoryAssociations/>} />
            <Route path="/complete-profile" element={<CompleteProfilePage />} />
            <Route path="/profile/:user_id/edit" element={<EditProfileInfos/>} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
    </div>
  )
}

export default App
