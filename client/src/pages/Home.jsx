import React, { useState, useEffect } from 'react'
import Hero from '../components/Hero'
import FeaturedProperties from '../components/FeaturedProperties'
import PropertyModal from '../components/PropertyModal'
import { TrendingUp, Users, Award, Shield, Phone, Mail } from 'lucide-react'

const Home = () => {
  const [phoneNumber, setPhoneNumber] = useState(9219565460);
  const [email, setEmail] = useState("Devsrivastava19091@gmail.com");

  const [filteredProperties, setFilteredProperties] = useState([])
  const [selectedProperty, setSelectedProperty] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openPropertyModal = (property) => {
    setSelectedProperty(property)
    setIsModalOpen(true)
  }

  const closePropertyModal = () => {
    setSelectedProperty(null)
    setIsModalOpen(false)
  }

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await fetch("http://localhost:3000/property");
        if (!response.ok) {
          throw new Error("Failed to fetch properties");
        }
        const data = await response.json();
        setFilteredProperties(data);
      } catch (error) {
        console.error("Error fetching properties:", error);
      }
    };
    fetchProperties();
  }, []);

  return (
    <div className="home-page">
      <Hero />
      <FeaturedProperties 
        properties={filteredProperties.slice(0, 6)} 
        onPropertyClick={openPropertyModal}
      />
      
      <section className="why-choose-us">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Why Choose Rentalz India?</h2>
            <p className="section-subtitle">Your success is our priority. Here's what sets us apart</p>
          </div>
          
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <Award size={48} />
              </div>
              <h3>Expert Agents</h3>
              <p>Our licensed professionals have decades of combined experience and deep local market knowledge.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <TrendingUp size={48} />
              </div>
              <h3>Market Leadership</h3>
              <p>We've facilitated over $2 billion in real estate transactions with a 98% client satisfaction rate.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <Shield size={48} />
              </div>
              <h3>Full-Service Support</h3>
              <p>From initial consultation to closing and beyond, we provide comprehensive real estate services.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <Users size={48} />
              </div>
              <h3>Client-Focused</h3>
              <p>Personalized service tailored to your unique needs, timeline, and budget requirements.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="services-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our Services</h2>
            <p className="section-subtitle">Comprehensive real estate solutions for all your needs</p>
          </div>
          
          <div className="services-grid">
            <div className="service-card">
              <h3>Residential Sales</h3>
              <p>Expert guidance for buying and selling homes, condos, and townhouses.</p>
              <ul>
                <li>Market analysis and pricing</li>
                <li>Professional photography</li>
                <li>Negotiation expertise</li>
                <li>Transaction management</li>
              </ul>
            </div>
            <div className="service-card">
              <h3>Investment Properties</h3>
              <p>Maximize your investment potential with our specialized investment services.</p>
              <ul>
                <li>ROI analysis</li>
                <li>Portfolio management</li>
                <li>Rental property sourcing</li>
                <li>Market forecasting</li>
              </ul>
            </div>
            <div className="service-card">
              <h3>Commercial Real Estate</h3>
              <p>Professional commercial property services for businesses and investors.</p>
              <ul>
                <li>Office and retail spaces</li>
                <li>Industrial properties</li>
                <li>Land development</li>
                <li>Lease negotiations</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Make Your Move?</h2>
            <p>Connect with our expert agents today and take the first step toward your real estate goals</p>
            <div className="cta-buttons">
              <a href="/properties" className="btn btn-primary">Browse Properties</a>
              <a href="/contact" className="btn btn-secondary">
                <Phone size={20} />
                Schedule Consultation
              </a>
            </div>
            <div className="contact-quick">
              <div className="quick-contact">
                <Phone size={20} />
                <span>Call: +91-{phoneNumber}</span>
              </div>
              <div className="quick-contact">
                <Mail size={20} />
                <span>Email: {email}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {isModalOpen && (
        <PropertyModal 
          property={selectedProperty} 
          onClose={closePropertyModal}
        />
      )}
    </div>
  )
}

export default Home