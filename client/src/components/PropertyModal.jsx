import React, { useState } from 'react'
import { X, CircleX, ChevronLeft, ChevronRight } from 'lucide-react'

const PropertyModal = ({ property, onClose }) => {
  if (!property) return null

  const images = Array.isArray(property.images) && property.images.length > 0
    ? property.images
    : property.image
      ? [property.image]
      : []

  const [currentIndex, setCurrentIndex] = useState(0)

  const goToPrev = (e) => {
    e.stopPropagation()
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }

  const goToNext = (e) => {
    e.stopPropagation()
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className='modal-one'>
          {images.length > 1 && (
            <ChevronLeft size={32} className='arrows' onClick={goToPrev} />
          )}
        </div>
        <div className='modal-two'>
          <div className='modal-image-container'>
            {images.length > 0 && (
              <img
                src={images[currentIndex]}
                alt={property.title}
                className="modal-image"
              />
            )}

            {images.length > 1 && (
              <div
                className="carousel-indicators"
                style={{
                  position: 'absolute',
                  bottom: 10,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  display: 'flex',
                  gap: '6px',
                  zIndex: '1000'
                }}
              >
                {images.map((_, idx) => (
                  <span
                    key={idx}
                    style={{
                      width: 10,
                      height: 10,
                      borderRadius: '50%',
                      background: idx === currentIndex ? '#333' : '#ccc',
                      display: 'inline-block',
                      cursor: 'pointer',
                    }}
                    onClick={(e) => {
                      e.stopPropagation()
                      setCurrentIndex(idx)
                    }}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
        <div className='modal-three'>
          <button className="close-modal" onClick={onClose}>
            <X size={24} />
            {/* <CircleX size={24} /> */}
          </button>
          {images.length > 1 && (
            <ChevronRight size={32} className='arrows' onClick={goToNext} />
          )}
        </div>
      </div>
    </div>
  )
}

export default PropertyModal