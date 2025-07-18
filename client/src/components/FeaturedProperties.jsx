import React from 'react'
import { MapPin, Bed, Bath, Square, BadgeIndianRupee } from 'lucide-react'

const FeaturedProperties = ({ properties, onPropertyClick }) => {
  const formatPrice = (price, type) => {
    if (type.toUpperCase() === 'SALE') {
      return `${price.toLocaleString('en-IN', {
        style: 'currency',
        currency: 'INR',
        currencyDisplay: 'symbol'
      })}`
    }
    return `${price.toLocaleString('en-IN', {
      style: 'currency',
      currency: 'INR',
      currencyDisplay: 'symbol'
    })}/month`
  }

  const getStatusBadge = (status) => {
    const badges = {
      'for-sale': { text: 'For Sale', class: 'badge-sale' },
      'for-rent': { text: 'For Rent', class: 'badge-rent' },
      'sold': { text: 'Sold', class: 'badge-sold' },
      'new-listing': { text: 'New Listing', class: 'badge-new' }
    }
    return badges[status] || { text: status, class: 'badge-default' }
  }

  return (
    <section className="featured-properties">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Featured Properties</h2>
          <p className="section-subtitle">Handpicked properties from our premium listings</p>
        </div>

        <div className="properties-grid">
          {properties.map((property) => {
            const badge = getStatusBadge(property.status)
            return (
              <div
                key={property.id}
                className="property-card"
                onClick={() => onPropertyClick(property)}
              >
                <div className="property-image">
                  <img src={property.images[0]} alt={property.title} />
                  <div className="property-price">
                    {formatPrice(property.price, property.type)}
                  </div>
                </div>

                <div className="property-content">
                  <div className="property-header">
                    <h3 className="property-title">{property.title}</h3>
                  </div>

                  <div className="property-location">
                    <MapPin size={16} />
                    <span>{property.location}</span>
                  </div>

                  <div className="property-features">
                    <div className="feature">
                      <Bed size={16} />
                      <span>{property.bedroom} Beds</span>
                    </div>
                    <div className="feature">
                      <Bath size={16} />
                      <span>{property.bathroom} Baths</span>
                    </div>
                    <div className="feature">
                      <Square size={16} />
                      <span>{property.area} sq ft</span>
                    </div>
                    <div className="feature">
                      <BadgeIndianRupee size={16} />
                      <span>{property.type} </span>
                    </div>
                  </div>

                  <div className="property-details">
                    <div className="property-type">{property.propertyType}</div>
                  </div>

                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default FeaturedProperties