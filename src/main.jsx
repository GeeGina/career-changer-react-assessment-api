import React from 'react'
import ReactDOM from 'react-dom/client'
import Owner from './Owner';
import Home from './Home'
import {createBrowserRouter,RouterProvider,} from "react-router-dom";

const router = createBrowserRouter([
  {
    path:"/",
    element: <Home />
  },
  {
    path:"/owner",
    element:<Owner />
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
