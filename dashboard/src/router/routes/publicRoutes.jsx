
// src/router/routes/publicRoutes.js
import { lazy } from "react"; 

// Declare your pages as lazy-loaded components
const Login = lazy(()=> import('../../views/auth/Login'))   
const Register = lazy(()=> import('../../views/auth/Register'))

 // Export the array of route objects
const publicRoutes = [
    {
        path : '/Login',
        element : <Login/>
    },
    {
        path : '/Register',
        element : <Register/>
    }
]

export default publicRoutes