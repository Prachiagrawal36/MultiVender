
// src/router/routes/publicRoutes.js
import { lazy } from "react"; 

// Declare your pages as lazy-loaded components
const Login = lazy(()=> import('../../views/auth/Login'))   
const Register = lazy(()=> import('../../views/auth/Register'))
const AdminLogin = lazy(()=> import('../../views/auth/AdminLogin')) 



 // Export the array of route objects
const publicRoutes = [
    {
        path : '/Login',
        element : <Login/>
    },
    {
        path : '/Register',
        element : <Register/>
    },
     {
        path : '/admin/login',
        element : <AdminLogin/> 
    }
]

export default publicRoutes