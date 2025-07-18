import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Properties from './pages/Properties'
import AboutUs from './pages/AboutUs'
import Contact from './pages/Contact'
import SignIn from './pages/SignIn'
import Input from './pages/Input'
import ProtectedRoutes from './pages/ProtectedRoutes'
import './App.css'

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main className="main-wrapper">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/properties" element={<Properties />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/input" element={
              <ProtectedRoutes>
                <Input />
              </ProtectedRoutes>
            } />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App