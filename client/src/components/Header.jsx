import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Building2, Menu, X } from 'lucide-react'
import { useSelector, useDispatch } from 'react-redux'
import { isAuthTrue, isAuthFalse } from '../redux/counter/counterSlice'

const Header = () => {  
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()

  const count = useSelector(state => state.counter.value) //For reading
  const dispatch = useDispatch()

  let isAuth = sessionStorage.getItem('isAuthenticated') === 'true';

  useEffect(() => {
    if (count) {
      isAuth = sessionStorage.getItem('isAuthenticated') === 'true';
    }
  }, [count])

  const isActive = (path) => location.pathname === path

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">
        <div className='logo-container'>
        </div>
          <Building2 size={32} />
          <span className="logo-text">Rentalz India</span>
        </Link>

        <nav className={`desktop-nav ${isMobileMenuOpen ? 'mobile-nav-open' : ''}`}>
          <Link
            to="/"
            className={`nav-link ${isActive('/') ? 'active' : ''}`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/properties"
            className={`nav-link ${isActive('/properties') ? 'active' : ''}`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Properties
          </Link>
          <Link
            to="/about"
            className={`nav-link ${isActive('/about') ? 'active' : ''}`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            About Us
          </Link>
          <Link
            to="/contact"
            className={`nav-link ${isActive('/contact') ? 'active' : ''}`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contact
          </Link>
          {isAuth &&
            <Link
              to="/input"
              className={`nav-link ${isActive('/input') ? 'active' : ''}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Input
            </Link>}
        </nav>

        {isAuth && <button className='btn logout' onClick={() => {
          dispatch(isAuthFalse())
          window.location.reload()
        }}>Logout</button>}
        <button className="mobile-menu-btn" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </header>
  )
}

export default Header