import React, { useState, useEffect } from 'react'
import PropertyListings from '../components/PropertyListings'
import PropertyModal from '../components/PropertyModal'
import axios from "axios";

const Properties = () => {
  const [filteredProperties, setFilteredProperties] = useState([])
  const [selectedProperty, setSelectedProperty] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const API_URL =
  import.meta.env.MODE === "development"
    ? "http://localhost:3000"
    : ""; // Render will serve from the same domain

  useEffect(() => {
    axios.get(`${API_URL}/property`).then((res) => setFilteredProperties(res.data));
  }, []);

  const openPropertyModal = (property) => {
    setSelectedProperty(property)
    setIsModalOpen(true)
  }

  const closePropertyModal = () => {
    setSelectedProperty(null)
    setIsModalOpen(false)
  }

  return (
    <div className="properties-page">
      <div className="page-header">
        <div className="container">
          <h1>All Properties</h1>
          <p>Discover your perfect rental home from our extensive collection</p>
        </div>
      </div>
      
      <div className="main-content">
        <PropertyListings 
          properties={filteredProperties} 
          onPropertyClick={openPropertyModal}
        />
      </div>
      
      {isModalOpen && (
        <PropertyModal 
          property={selectedProperty} 
          onClose={closePropertyModal}
        />
      )}
    </div>
  )
}

export default Properties
