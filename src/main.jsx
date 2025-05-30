import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import path from 'path'
import Home from './home/index.jsx'
import Navbar from './navbar/navbar.jsx'
import Issues from './issues/index.jsx'

const router = createBrowserRouter([
  {
    path:'/github_clone/',
    element:<App/>,
    children:[
      {
        path:"/github_clone/",
        element:
        <div>
          <Navbar/>
          <Home/>
        </div>
      },
      {
        path:"/github_clone/",
        element:
        <div>
          <Navbar/>
          <Issues/> 
        </div>
      },
    ]
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
