import React, { useState, useLayoutEffect } from 'react';
import { useForm } from "react-hook-form";
import './Input.css';
import axios from "axios";

const Input = () => {
  const [loading, setLoading] = useState(false);

  const {
    control,
    register,
    handleSubmit,
    watch,
    setError,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const [uploadedImages, setUploadedImages] = useState([]);

  const onSubmit = async (data) => {
    setLoading(true);
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("location", data.location);
    formData.append("price", data.price);
    formData.append("type", data.type);
    formData.append("bedroom", data.bedroom);
    formData.append("bathroom", data.bathroom);
    formData.append("area", data.area);
    formData.append("propertyType", data.propertyType);

    for (let i = 0; i < data.images.length; i++) {
      formData.append("images", data.images[i]);
    }

    try {
      const res = await axios.post("http://localhost:3000/input", formData, {
        headers: { "Content-Type": "multipart/form-data" },
        // body: JSON.stringify(formData)
      });
      // console.log(res.data);
      reset();
      setUploadedImages([]);
    }
    catch (error) { console.error("Error uploading property:", error); }
    finally { setLoading(false); }
  };

  const handleImageChange = (event) => {
    const files = event.target.files;
    setUploadedImages(Array.from(files));
  };

  // For Loading Screen
  useLayoutEffect(() => {
    if (loading) {
      document.body.style.overflowX = "hidden";
      document.body.style.height = "100%";
    }
    if (!loading) {
      document.body.style.overflowX = "auto";
      document.body.style.height = "auto";
    }
  }, [loading]);

  return (
    <>
      {loading &&
        <div className="loading-page">
          <svg className="svgg" viewBox="25 25 50 50">
            <circle className="circlee" r="20" cy="50" cx="50"></circle>
          </svg>
        </div>}
      <div className="get-started-page">
        <div className="page-header">
          <div className="container">
            <h1>Property Update Form</h1>
            <p>Change existing properties or add a new one</p>
          </div>
        </div>

        <div className='form-container'>
          <form className="form" onSubmit={handleSubmit(onSubmit)} autoComplete="off">
            <p className="title">Property Details</p>
            <p className="message">Update the properties</p>

            <label>
              <input
                className='input'
                placeholder="Property Name/Address"
                autoComplete="off"
                {...register("title", {
                  // required: { value: true, message: "This field is required" },
                })}
                type="text"
              />
              {errors.title && <div>{errors.title.message}</div>}
              <span>Title</span>
            </label>

            <label>
              <input
                className="input"
                placeholder=""
                autoComplete="off"
                {...register("location", {
                  // required: { value: true, message: "This field is required" },
                })}
                type="text"
              />
              {errors.location && <div>{errors.location.message}</div>}
              <span>Location</span>
            </label>

            <label>
              <input
                className="input"
                placeholder=""
                autoComplete="off"
                min="0"
                {...register("price", {
                  required: { value: true, message: "This field is required" },
                })}
                type="number"
              />
              {errors.price && <div>{errors.price.message}</div>}
              <span>Price</span>
            </label>

            <label>
              <input
                className="input"
                placeholder="Rent/Sale"
                autoComplete="off"
                {...register("type", {
                  // required: { value: true, message: "This field is required" },
                })}
                type="text"
              />
              {errors.type && <div>{errors.type.message}</div>}
              <span>Type</span>
            </label>

            <label>
              <input
                className="input"
                placeholder=""
                autoComplete="off"
                min="0"
                {...register("bedroom", {
                  // required: { value: true, message: "This field is required" },
                })}
                type="number"
              />
              {errors.bedroom && <div>{errors.bedroom.message}</div>}
              <span>Bedrooms</span>
            </label>

            <label>
              <input
                className="input"
                placeholder=""
                autoComplete="off"
                min="0"
                {...register("bathroom", {
                  // required: { value: true, message: "This field is required" },
                })}
                type="number"
              />
              {errors.bathroom && <div>{errors.bathroom.message}</div>}
              <span>Bathrooms</span>
            </label>

            <label>
              <input
                className="input"
                placeholder=""
                autoComplete="off"
                min="0"
                {...register("area", {
                  // required: { value: true, message: "This field is required" },
                })}
                type="number"
              />
              {errors.area && <div>{errors.area.message}</div>}
              <span>Area (sq ft)</span>
            </label>

            <label>
              <input
                className="input"
                placeholder=""
                autoComplete="off"
                {...register("propertyType", {
                  // required: { value: true, message: "This field is required" },
                })}
                type="text"
              />
              {errors.propertyType && <div>{errors.propertyType.message}</div>}
              <span>Property Type</span>
            </label>

            <label>
              <input
                type="file"
                {...register("images")}
                multiple
                onChange={handleImageChange}
              />
              <span style={{ fontSize: '0.85em', color: '#6b7280', display: 'block' }}>
                Or upload image files (you can select multiple)
              </span>
            </label>
            <div style={{ marginBottom: '1rem' }}>
              {uploadedImages.length > 0 && (
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(4, 1fr)',
                    gap: 8,
                    marginTop: 8,
                    maxWidth: 4 * 110 + 3 * 8, // 4 images + 3 gaps
                  }}>
                  {uploadedImages.map((image, i) => (
                    <img
                      key={i}
                      style={{
                        width: 110,
                        height: 80,
                        objectFit: 'cover',
                        borderRadius: 6,
                        border: '1px solid #eee',
                        background: '#fafafa',
                        display: 'block',
                        margin: '0 auto',
                      }}
                      src={URL.createObjectURL(image)}
                      alt={`Uploaded image ${i}`}
                    />
                  ))}
                </div>
              )}
            </div>

            {errors.submit && <div>{errors.submit.message}</div>}

            <button className="submit" type="submit" disabled={isSubmitting}>Submit</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Input;
