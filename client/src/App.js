import react, { useContext } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './components/Navbar.js'
import Auth from './components/Auth.js'
import Profile from './components/Profile.js'
// import Public from './components/Public.js'
import { UserContext } from './context/UserProvider.js'
import { PartyContext } from './context/PartyProvider.js'
import './App.scss'

export default function App() {
  
  const { token, logout, user } = useContext(UserContext)
  const { parties } = useContext(PartyContext)

  return (
    <div className="app">
      { token && <Navbar logout={logout} /> }
      <Routes>
        <Route
        path="/"
        element={ token ? <Navigate to="/profile" /> : <Auth />}
      />
      <Route 
        path="/profile"
        element={<Profile />}
      />
      {/* <Route 
        path="/public"
        element={<Public />}
      /> */}
      </Routes>
    </div>
  )
}