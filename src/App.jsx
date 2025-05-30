import { useState } from 'react'
import './App.css'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Navbar from './navbar/navbar'
import Home from './home'
import Issues from './issues'


function App() {
  const router = createBrowserRouter([
  {
    path:'/',
    element:
    <div>
      <Navbar/>
      <Home/>
    </div>,
  },
    {
    path:'/issues',
    element:
    <div>
      <Navbar/>
      <Issues/>
    </div>,
  },

  ])

  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App
