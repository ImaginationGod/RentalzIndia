import React from 'react'

const Hero = () => {

  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            Find Your Dream Property
          </h1>
          <p className="hero-subtitle">
            Discover the perfect home, investment property, or commercial space. 
            Our expert agents are here to guide you through every step of your real estate journey.
          </p>
        </div>

        <div className="hero-stats">
          <div className="stat">
            <div className="stat-number">200+</div>
            <div className="stat-label">Properties Sold</div>
          </div>
          <div className="stat">
            <div className="stat-number">200+</div>
            <div className="stat-label">Happy Clients</div>
          </div>
          <div className="stat">
            <div className="stat-number">12+</div>
            <div className="stat-label">Expert Agents</div>
          </div>
          <div className="stat">
            <div className="stat-number">10+</div>
            <div className="stat-label">Years Experience</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero