import React, { useState, useLayoutEffect } from 'react'
import { useForm } from "react-hook-form"
import { Eye, EyeOff, Lock, User, Building2 } from 'lucide-react'
import './SignIn.css'
import { useSelector, useDispatch } from 'react-redux'
import { isAuthTrue, isAuthFalse } from '../redux/counter/counterSlice'

const SignIn = () => {
  const count = useSelector(state => state.counter.value) //For reading
  const dispatch = useDispatch()

  const {
    register,
    handleSubmit,
    watch,
    setError,
    reset,
    formState: { errors, isSubmitting },
  } = useForm()

  const [formSub, setFormSub] = useState(false);
  const [success, setSuccess] = useState(false);

  const onSubmit = async (data) => {
    const API_URL = import.meta.env.MODE === "development"
      ? "http://localhost:3000"
      : "";

    let r = await fetch(`${API_URL}/`, {
      method: "POST", headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    })
    let res = await r.text()
    setFormSub(true)
    if (res == "true") {
      setSuccess(true)
      dispatch(isAuthTrue())
    }
    else {
      setSuccess(false)
      dispatch(isAuthFalse())
    }
    reset();
  }

  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    licenseNumber: '',
    brokerage: ''
  })

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

  // For Loading Screen
  useLayoutEffect(() => {
    if (isSubmitting) {
      document.body.style.overflowX = "hidden";
      // document.body.style.height = "100%";
    }
    if (!isSubmitting) {
      document.body.style.overflowX = "auto";
      // document.body.style.height = "auto";
    }
  }, [isSubmitting]);

  return (
    <>
      {isSubmitting &&
        <div className="loading-page">
          <svg className="svgg" viewBox="25 25 50 50">
            <circle className="circlee" r="20" cy="50" cx="50"></circle>
          </svg>
        </div>}
      <div className="signin-page">
        <div className="signin-container">
          <div className="signin-content">
            <div className="signin-header">
              <div className="logo">
                <Building2 size={32} />
                <span>Rentalz India</span>
              </div>
              <h1>Welcome Back</h1>
              <p>
                Sign in to access your account and manage your real estate activities
              </p>
            </div>

            {/* Show success text if login is successful */}
            {formSub && success && (
              <div style={{
                background: '#d4edda',
                color: '#155724',
                border: '1px solid #c3e6cb',
                borderRadius: '4px',
                padding: '12px',
                marginBottom: '16px',
                textAlign: 'center',
                fontWeight: 'bold'
              }}>
                Login successful! Welcome back.
              </div>
            )}

            {/* Show failure text if login is unsuccessful */}
            {formSub && !success && (
              <div style={{
                background: '#ff3333',
                color: 'white',
                border: '1px solid #c3e6cb',
                borderRadius: '4px',
                padding: '12px',
                marginBottom: '16px',
                textAlign: 'center',
                fontWeight: 'bold'
              }}>
                Wrong credentials!
              </div>
            )}

            <form className="signin-form" onSubmit={handleSubmit(onSubmit)}>
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <div className="input-wrapper">
                  <User size={20} />
                  <input
                    value={formData.nameee}
                    className="form-input"
                    placeholder="Enter your full name"
                    autoComplete="off"
                    {...register("nameee", {
                      required: { value: true, message: "This field is required" },
                      // minLength: { value: 3, message: "Min length is 3" },
                      // maxLength: { value: 8, message: "Max length is 8" }
                    })
                    }
                    type="text"
                  />
                  {errors.nameee && <div>{errors.nameee.message}</div>}
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="password">Password</label>
                <div className="input-wrapper">
                  <Lock size={20} />
                  <input
                    value={formData.passworddd}
                    className="form-input"
                    placeholder="Enter your password"
                    autoComplete="off"
                    {...register("passworddd", {
                      minLength: {
                        value: 8,
                        message: "Min password length is 8"
                      }
                    })
                    }
                    type={showPassword ? 'text' : 'password'}
                  />
                  {errors.passworddd && <div>{errors.passworddd.message}</div>}
                  <button
                    type="button"
                    className="password-toggle"
                    onClick={togglePasswordVisibility}
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>

              <button disabled={isSubmitting} type="submit" className="btn btn-primary signin-btn">
                Login
              </button>
            </form>
          </div>

          <div className="signin-image">
            <img
              src="https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Modern real estate office"
            />
            <div className="image-overlay">
              <h2>Your Real Estate Journey Starts Here</h2>
              <p>Join thousands of satisfied clients who have achieved their real estate goals with PropertyHub</p>
              <div className="overlay-stats">
                <div className="overlay-stat">
                  <strong>200+</strong>
                  <span>properties sold</span>
                </div>
                <div className="overlay-stat">
                  <strong>98%</strong>
                  <span>satisfaction rate</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SignIn
