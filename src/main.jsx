import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import Route from './components/Router/Route'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <ToastContainer position="top-right" autoClose={3000} />
    <RouterProvider router={Route}></RouterProvider>
  </React.StrictMode>,
)
