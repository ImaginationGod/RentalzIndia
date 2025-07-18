import React, { useEffect, useState } from 'react'
import { MapPin, Bed, Bath, Square, BadgeIndianRupee } from 'lucide-react'
import { useSelector } from 'react-redux'

const PropertyListings = ({ properties, onPropertyClick }) => {
  const count = useSelector(state => state.counter.value) //For reading

  let isAuth = sessionStorage.getItem('isAuthenticated') === 'true';

  useEffect(() => {
    if (count) {
      isAuth = sessionStorage.getItem('isAuthenticated') === 'true';
    }
  }, [count])

  let deleteCard = async (property) => {
    try {
      let r = await fetch("http://localhost:3000/delete", {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify(property)
      })
      let res = await r.json();
      if (res.success) {
        window.location.reload()
      } else {
        console.log("Error deleting property!");
      }
    } catch (err) {
      console.error("Error deleting property:", err);
    }
  }

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

  return (
    <div className="property-listings">
      <div className="listings-header">
        <h2>Available Properties</h2>
        <div className="listings-count">{properties.length} properties found</div>
      </div>

      <div className="listings-grid">
        {properties.map((property) => {
          // Use the first image from the images array, or fallback to a placeholder if not available
          const imageUrl =
            Array.isArray(property.images) && property.images.length > 0
              ? property.images[0]
              : 'https://thumb.ac-illust.com/b1/b170870007dfa419295d949814474ab2_t.jpeg'

          return (
            <div
              key={property._id}
              className="listing-card"
            // onClick={() => onPropertyClick(property)}
            >
              <div className="listing-image" onClick={() => onPropertyClick(property)}>
                <img src={imageUrl} alt={property.title} />
              </div>

              <div className="listing-content" onClick={() => onPropertyClick(property)}>
                <div className="listing-header">
                  <h3 className="listing-title">{property.title}</h3>
                  <div className="listing-price">{formatPrice(property.price, property.type)}</div>
                </div>

                <div className="listing-location">
                  <MapPin size={16} />
                  <span>{property.location}</span>
                </div>

                <div className="listing-features">
                  <div className="feature">
                    <Bed size={16} />
                    <span>{property.bedroom}</span>
                  </div>
                  <div className="feature">
                    <Bath size={16} />
                    <span>{property.bathroom}</span>
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
              </div>
              {isAuth && <button className='del-btn'
                onClick={() => { deleteCard(property) }}
              >Delete</button>}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default PropertyListings