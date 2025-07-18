import React, {useState} from 'react'
import { Building2, Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, Award } from 'lucide-react'

const Footer = () => {
  const [phoneNumber, setPhoneNumber] = useState(9219565460);
  const [email, setEmail] = useState("Devsrivastava19091@gmail.com");
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <div className="footer-logo">
            <Building2 size={32} />
            <span>Rentalz India</span>
          </div>
          <p className="footer-description">
            Your trusted real estate partner with over 10 years of experience in 
            buying, selling, and managing properties. We make real estate dreams come true.
          </p>
          <div className="certifications">
            <div className="cert-item">
              <Award size={16} />
              <span>Licensed Real Estate Broker</span>
            </div>
            <div className="cert-item">
              <Award size={16} />
              <span>MLS Member</span>
            </div>
          </div>
          <div className="social-links">
            <Facebook size={20} />
            <Twitter size={20} />
            <Instagram size={20} />
            <Linkedin size={20} />
          </div>
        </div>
        
        <div className="footer-section">
          <h4>Services</h4>
          <ul>
            <li><a href="#">Buy Property</a></li>
            <li><a href="#">Sell Property</a></li>
            <li><a href="#">Rent Property</a></li>
            <li><a href="#">Property Management</a></li>
            <li><a href="#">Investment Consulting</a></li>
            <li><a href="#">Market Analysis</a></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h4>Property Types</h4>
          <ul>
            <li><a href="#">Residential Homes</a></li>
            <li><a href="#">Condominiums</a></li>
            <li><a href="#">Townhouses</a></li>
            <li><a href="#">Commercial Properties</a></li>
            <li><a href="#">Investment Properties</a></li>
            <li><a href="#">Land & Lots</a></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h4>Contact Info</h4>
          <div className="contact-info">
            <div className="contact-item">
              <MapPin size={16} />
              <span>Gaur City Center, 1st Floor<br />Greater Noida West</span>
            </div>
            <div className="contact-item">
              <Phone size={16} />
              <span>+91-{phoneNumber}</span>
            </div>
            <div className="contact-item">
              <Mail size={16} />
              <span>{email}</span>
            </div>
          </div>
          <div className="business-hours">
            <h5>Business Hours</h5>
            <p>Mon-Sat: 9:00 AM - 6:00 PM<br />
               Sun: Closed</p>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; 2025 Rentalz India. All rights reserved. | Licensed Real Estate Broker</p>
      </div>
    </footer>
  )
}

export default Footer