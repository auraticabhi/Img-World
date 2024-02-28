import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Signup from './pages/Signup'
import { AuthContext } from './context/auth'
import { useEffect, useState } from 'react'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import PublicRoute from './routes/PublicRoute'
import PrivateRoute from './routes/PrivateRoute'
import initializeFirebase from './firebase/config'
import Login from './pages/Login'
import ImageView from './components/ImageView'

let initializeFirebaseAuth;

function App() {

    initializeFirebaseAuth = initializeFirebase();
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const auth = getAuth();
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user);
            setIsLoading(false);
        })

        return unsubscribe;
    }, [])

    return ( <
            >
            <
            AuthContext.Provider value = {
                { user, isLoading, setUser, setIsLoading } } >
            <
            Routes >
            <
            Route path = "/"
            element = { < PrivateRoute > < Home / > < /PrivateRoute>}/ >
                <
                Route path = "/signup"
                element = { < PublicRoute > < Signup / > < /PublicRoute>}/ >
                    <
                    Route path = '/login'
                    element = { < PublicRoute > < Login / > < /PublicRoute>}/ >
                        <
                        Route path = "/image/:imageId"
                        element = { < ImageView / > }
                        /> <
                        /Routes> <
                        /AuthContext.Provider> <
                        />
                    )
                }

                export { initializeFirebaseAuth };
                export default App