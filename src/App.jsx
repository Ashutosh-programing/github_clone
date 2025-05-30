import { useState } from 'react'
import './App.css'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Navbar from './navbar/navbar'
import Home from './home'
import Issues from './issues'


function App() {
  // const router = createBrowserRouter([
  // {
  //   path:'/',
  //   element:
  //   <div>
  //     <Navbar/>
  //     <Home/>
  //   </div>,
  // },
  //   {
  //   path:'/issues',
  //   element:
  //   <div>
  //     <Navbar/>
  //     <Issues/>
  //   </div>,
  // },

  // ])

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
        path:"/github_clone/issues",
        element:
        <div>
          <Navbar/>
          <Issues/> 
        </div>
      },
    ]
  },
])

  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App
