import React from 'react'
import { useNavigate, Outlet } from 'react-router-dom'



const ProductFormRoute = () => {
    const token = localStorage.getItem('token')
    const navigate = useNavigate()


    return (
        <>
            {(token) ? (<Outlet />) : (navigate('/signin'))}
        </>
    )
}

export default ProductFormRoute