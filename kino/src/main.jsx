import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import App2 from './app2.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const route = createBrowserRouter([
    {
        path:"/",
        element:<App/>,        
    },
    {
        path:'/moviepage',
        element:<App2/>,
    }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={route}/>
)
