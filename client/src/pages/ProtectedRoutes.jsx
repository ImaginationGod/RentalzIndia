import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

const ProtectedRoutes = ({ children }) => {
    const count = useSelector(state => state.counter.value) //For reading
    const navigate = useNavigate();
    const isAuthenticated = sessionStorage.getItem('isAuthenticated') === 'true';

    useEffect(() => {
        console.log("Trying to reach /input " + count)
        if (!isAuthenticated) navigate('/signin')
    }, [])

    return (
        children
    )
}

export default ProtectedRoutes