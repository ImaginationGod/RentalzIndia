import React, { useState } from 'react'
import { MapPin, Phone, Mail, Clock, Send, MapPinCheck } from 'lucide-react'

const Contact = () => {
  const [phoneNumber, setPhoneNumber] = useState(9219565460); //Make admin to be able to change the number
  const [email, setEmail] = useState("Devsrivastava19091@gmail.com");

  const [formData, setFormData] = useState({
    name: '',
    // email: '',
    // subject: '',
    message: ''
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // setFormData({ name: '', email: '', subject: '', message: '' })
    setFormData({ name: '', message: '' })
  }

  const handleClick = () => {
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(formData.message)}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <div className="contact-page">
      <div className="page-header">
        <div className="container">
          <h1>Contact Us</h1>
          <p>Get in touch with our team - we're here to help</p>
        </div>
      </div>

      <section className="contact-content">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <h2>Get in Touch</h2>
              <p>
                Have questions about our properties or services? We'd love to hear from you. 
                Send us a message and we'll respond as soon as possible.
              </p>
              
              <div className="contact-details">
                <div className="contact-item">
                  <MapPin size={24} />
                  <div>
                    <h3>Address</h3>
                    <p>Gaur City Center, 1st Floor<br />Greater Noida West</p>
                  </div>
                </div>
                
                <div className="contact-item">
                  <Phone size={24} />
                  <div>
                    <h3>Phone</h3>
                    <p>+91-{phoneNumber}</p>
                  </div>
                </div>
                
                <div className="contact-item">
                  <Mail size={24} />
                  <div>
                    <h3>Email</h3>
                    <p>{email}</p>
                  </div>
                </div>
                
                <div className="contact-item">
                  <Clock size={24} />
                  <div>
                    <h3>Business Hours</h3>
                    <p>Monday - Saturday: 9:00 AM - 6:00 PM<br />Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="contact-form-container">
              <form className="contact-form" onSubmit={handleSubmit}>
                <h2>Send us a Message</h2>
                
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="form-input"
                      required
                    />
                  </div>
                  
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="form-textarea"
                    rows="6"
                    required
                  ></textarea>
                </div>
                
                <button type="submit" className="btn btn-primary" onClick={handleClick}>
                  <Send size={20} />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="map-section">
        <div className="container">
          <h2>Find Us <MapPinCheck size={28} strokeWidth={3} /></h2>
          <div
            className="map-placeholder"
            style={{ cursor: "pointer" }}
            onClick={() => window.open("https://maps.google.com/?q=Gaur+City+Center,+Greater+Noida+West", "_blank")}
            title="Open in Google Maps"
          >
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact