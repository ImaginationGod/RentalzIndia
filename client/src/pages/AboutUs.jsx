import React from 'react'
import { Users, Award, Building2, Heart, TrendingUp, Shield, Target, Globe } from 'lucide-react'

const AboutUs = () => {
  return (
    <div className="about-page">
      <div className="page-header">
        <div className="container">
          <h1>About Rentalz India</h1>
          <p>Your trusted real estate partner with over 15+ years of excellence</p>
        </div>
      </div>

      <section className="about-content">
        <div className="container">
          <div className="about-grid">
            <div className="about-text">
              <h2>Our Story</h2>
              <p>
                Founded in 2018, Rentalz India emerged from a vision to revolutionize the real estate industry by 
                combining traditional expertise with modern technology. Our founders, seasoned real estate professionals,
                 recognized the need for a more transparent, efficient, and client-focused approach to property transactions.
              </p>
              <p>
              Whether you're a first time buyer,seasoned investor,or looking to upgrade or downsize, we're here to help you 
              achieve your real estate goals.Let us help you find your perfect property and make your real estate dreams a reality.
              </p>
              <div className="company-highlights">
                <div className="highlight">
                  <strong>Licensed Broker</strong>
                  <span>Fully licensed and insured</span>
                </div>
                <div className="highlight">
                  <strong>MLS Member</strong>
                  <span>Access to all market listings</span>
                </div>
                <div className="highlight">
                  <strong>Award Winning</strong>
                  <span>Top producer for 5 consecutive years</span>
                </div>
              </div>
            </div>
            <div className="about-image">
              <img
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Our team"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mission-section">
        <div className="container">
          <div className="section-header">
            <h2>Our Mission & Values</h2>
            <p>The principles that guide everything we do</p>
          </div>

          <div className="values-grid">
            <div className="value-card">
              <Building2 size={48} />
              <h3>Expertise</h3>
              <p>Deep market knowledge and professional expertise to guide you through every transaction with confidence.</p>
            </div>
            <div className="value-card">
              <Heart size={48} />
              <h3>Integrity</h3>
              <p>Honest, transparent communication and ethical practices in every interaction and transaction.</p>
            </div>
            <div className="value-card">
              <Target size={48} />
              <h3>Results</h3>
              <p>Focused on achieving your goals with proven strategies and relentless dedication to success.</p>
            </div>
            <div className="value-card">
              <Globe size={48} />
              <h3>Innovation</h3>
              <p>Leveraging cutting-edge technology and modern marketing to provide superior service and results.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">200+</div>
              <div className="stat-label">Properties Sold</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">98%</div>
              <div className="stat-label">Client Satisfaction</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">12+</div>
              <div className="stat-label">Expert Agents</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">10+</div>
              <div className="stat-label">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      <section className="team-section">
        <div className="container">
          <div className="section-header">
            <h2>Meet Our Leadership Team</h2>
            <p>Experienced professionals dedicated to your success</p>
          </div>

          <div className="team-grid">
            <div className="team-member">
              <img
                src="./src/assets/Dev.jpg"
                alt="Dev Srivastava"
              />
              <h3>Dev Srivastava</h3>
              <p>CEO & Principal Broker</p>
              <div className="member-details">
                <span>Licensed since 2020</span>
              </div>
            </div>
            <div className="team-member">
              <img
                src="./src/assets/Piyush.jpg"
                alt="Tanmay Srivastava"
              />
              <h3>Tanmay Srivastava</h3>
              <p>VP of Sales & Operations</p>
              <div className="member-details">
                <span>Licensed since 2022</span>
              </div>
            </div>
            
          </div>
        </div>
      </section>

    </div>
  )
}

export default AboutUs