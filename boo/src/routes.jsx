import { createBrowserRouter } from 'react-router-dom'
import Login from './pages/Login';
import Home from './pages/Home';
import Register from './pages/Register';

export const routes = createBrowserRouter([

    {
        path: '/',
        element: <Home />
        
    },

    {
        path: '/Login',
        element: <Login />
    },


    {
        path: '/Register',
        element: <Register/>
    }

]);