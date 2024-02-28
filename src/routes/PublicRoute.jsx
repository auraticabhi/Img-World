import React from 'react'
import { AuthContext } from '../context/auth'
import { useContext } from 'react'
import { Navigate } from 'react-router-dom';

function PublicRoute({ children }) {

    const { user } = useContext(AuthContext);
    if (user) {
        return <Navigate to = '/'
        replace = { true }
        />
    }

    return (
        children
    )
}

export default PublicRoute