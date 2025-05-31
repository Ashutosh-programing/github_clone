import React from 'react'
import { useState } from 'react'
import menu from '../assets/menu.png'

const Issues = () => {
  const[open,setOpen] = useState(false);
  return (
    <div>
      <button className='h-10 w-10 bg-blue-500' onClick={()=>setOpen(!open)}><img className='h-5 w-6' src={menu} alt='error'/></button>
      { <div className={`sidebar  flex-col gap-3 p-4 h-full flex  duration-500 ease-in-out transition-all  font-black ${open ? 'w-40 bg-yellow-400 delay-200 overflow-hidden' : 'w-0'} `}>
        <li className={` ${open ? ' duration-500 translate-x-2  overflow-hidden' : 'hidden'} `}>Home</li>
        <li className={` ${open ? ' duration-500 translate-x-2  overflow-hidden' : 'hidden'} `}>Home</li>
        <li className={` ${open ? ' duration-500 translate-x-2  overflow-hidden' : 'hidden'} `}>Home</li>
        <li className={` ${open ? ' duration-500 translate-x-2  overflow-hidden' : 'hidden'} `}>Home</li>
        <li className={` ${open ? ' duration-500 translate-x-2  overflow-hidden' : 'hidden'} `}>Home</li>
        <li className={` ${open ? ' duration-500 translate-x-2  overflow-hidden' : 'hidden'} `}>Home</li>
        <li className={` ${open ? ' duration-500 translate-x-2  overflow-hidden' : 'hidden'} `}>Home</li>
        <li className={` ${open ? ' duration-500 translate-x-2  overflow-hidden' : 'hidden'} `}>Home</li>
      </div>}
    </div>
  )
}

export default Issues
