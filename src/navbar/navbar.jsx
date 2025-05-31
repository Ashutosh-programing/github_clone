import React from 'react'
import menu from '../assets/menu.png'
import github from '../assets/github-logo.png'
import search from '../assets/search.png'
import downArrow from '../assets/arrow-down.png' 
import arrow from '../assets/arrow.png' 
import frog from '../assets/frog.png'
import plus from '../assets/plus.png'
import circle from '../assets/button.png'
import branch from '../assets/branch.png'
import img1 from '../assets/img1.jpg'
import cross from '../assets/cross.png'
import home from '../assets/home.png'
import discuss from '../assets/discussion.png'
import project from '../assets/project.png'
import telescope from '../assets/telescope.png'
import gift from '../assets/gift.png'
import download from '../assets/download.png'
import setting from '../assets/settings.png'
import focuse from '../assets/focus.png'
import book from '../assets/book.png'
import building from '../assets/building.png'
import globe from '../assets/globe.png'
import heart from '../assets/heart.png'
import logout from '../assets/logout.png'
import terminal from '../assets/terminal.png'
import user from '../assets/user.png'
import star from '../assets/star.png'
import { useState } from 'react'
import {NavLink} from 'react-router-dom'

const Navbar = () => {
  const[count,setCount] = useState(0);
  const[open,setOpen] = useState(0);

  const[count2,setCount2] = useState(0)
  const[open2,setOpen2] = useState(0);

  const[mouseEvent,setMouseEvent] = useState(0);
  const[open3,setOpen3] = useState(0);

  const[mouseEvent2,setMouseEvent2] = useState(0);
  const[open4,setOpen4] = useState(0);

  const[count3,setCount3] = useState(0);
  const[open5,setOpen5] = useState(0);

  const[side,setSide] = useState(false);

  const openConditional=async ()=>{
    setCount(count + 1);
    setOpen(open + 1);
  }
    const openConditional2=async ()=>{
    setCount2(count2 + 1);
    setOpen2(open2 + 1);
  }
  const openMouseEvent=()=>{
    setMouseEvent(1);
    setOpen3(1);
  }
  const openMouseEvent2=()=>{
    setMouseEvent2(1);
    setOpen4(1);
  }
    const openConditional3=async ()=>{
    setCount3(1);
    setOpen5(1);
  }
  
  const closeConditional = ()=>{
    setCount(0);
    setOpen(0);
  }
    const closeConditional2 = ()=>{
    setCount2(0);
    setOpen2(0);
  }
  const closeMouseEvent=()=>{
    setMouseEvent(0);
    setOpen3(0);
  }
    const closeMouseEvent2=()=>{
    setMouseEvent2(0);
    setOpen4(0);
  }
    const closeConditional3 = ()=>{
    setCount3(0);
    setOpen5(0);
  }

  const isOpen = count2;
  
  const arr1=[
    {
      id:1,
      img: <img className='h-4 w-4 mr-2' src={user} alt="" />,
      text:'Your profile'
    },
        {
      id:2,
      img: <img className='h-4 w-4 mr-2' src={book} alt="" />,
      text:'Your repositories'
    },
        {
      id:3,
      img: <img className='h-4 w-4 mr-2' src={frog} alt="" />,
      text:'Your copilot'
    },
        {
      id:4,
      img: <img className='h-4 w-4 mr-2' src={book} alt="" />,
      text:'Your projects'
    },
        {
      id:5,
      img: <img className='h-4 w-4 mr-2' src={star} alt="" />,
      text:'Your stars'
    },
        {
      id:6,
      img: <img className='h-4 w-4 mr-2' src={arrow} alt="" />,
      text:'Your gits'
    },
        {
      id:7,
      img: <img className='h-4 w-4 mr-2' src={building} alt="" />,
      text:'Your organizations'
    },
        {
      id:8,
      img: <img className='h-4 w-4 mr-2' src={globe} alt="" />,
      text:'Your enterprises'
    },
        {
      id:9,
      img: <img className='h-4 w-4 mr-2' src={heart} alt="" />,
      text:'Your sponsors'
    },
  ]

  return (
    <div>
      <div className="Navbar-container-wrapper h-16 bg-black text-white flex max-w-full p-2">
        <div className="navbar-container flex items-center justify-between w-full">

            {/* This is navbar 1 */}
            <div className="navbar-1 flex items-center w-full">
                <div onClick={openConditional2} className="navbar-menu ml-2 p-2 border rounded-md border-gray-custom"><img className=' cursor-pointer h-4 w-4' src={menu} alt="menu" /></div>
                <div className="navbar-icon ml-4"><img className='h-7 w-7' src={github} alt="github" /></div>
                <div className="navbar-name ml-4 text-sm overflow-ellipsis font-bold">Dashboard</div>
            </div>
            {<div className={` contidional-dashboard duration-200 delay-75 overflow-hidden ${count2 ==1? " w-80  border-r border-gray-custom rounded-r-lg h-screen px-4 bg-gray-custom-dashboard text-gray-custom" : ' w-0'}  absolute z-10 left-0 top-0 `}>
              <div className={`dashboard-container-wrapper ${count2 ==1 ? 'block': 'hidden'}`}>
                      <div className="dashboard-container-1 flex justify-between items-center h-16 p-1 ">
                        <img className=' h-8 w-8' src={github} alt="GitHub"/>
                        <div onClick={closeConditional2} className=' text-gray-custom cursor-pointer p-2 hover:bg-slate-700 border-0 rounded-md'><img className=' h-5 w-5' src={cross} alt="" /></div>
                      </div>
                      <div className="dashboard-container-2 flex flex-col mt-4">
                        <div className="menu-1 w-full flex items-center text-sm text-white mr-2 rounded-md p-2  hover:transition  hover:duration-500 hover:ease-in-out hover:bg-slate-700 ">
                        <img className='h-4 w-4 mr-2' src={home} alt="" /> 
                        <NavLink to='/'>Home</NavLink>
                        </div>
                        <div className="menu-1 w-full flex items-center text-sm text-white mr-2 rounded-md p-2 hover:transition hover:duration-500 hover:ease-in-out hover:bg-slate-700">
                        <img className='h-4 w-4 mr-2' src={circle} alt="" /> 
                        <NavLink to='/issues'>Issues</NavLink>
                        </div>
                        <div className="menu-1 w-full flex items-center text-sm text-white mr-2 rounded-md p-2 hover:transition  hover:duration-500 hover:ease-in-out hover:bg-slate-700">
                        <img className='h-4 w-4 mr-2' src={branch} alt="" /> 
                        <NavLink>Pull requests</NavLink>
                        </div>
                        <div className="menu-1 w-full flex items-center text-sm text-white mr-2 rounded-md p-2 hover:transition  hover:duration-500 hover:ease-in-out hover:bg-slate-700">
                        <img className='h-4 w-4 mr-2' src={project} alt="" /> 
                        <NavLink>Projects</NavLink>
                        </div>
                        <div className="menu-1 w-full flex items-center text-sm text-white mr-2 rounded-md p-2 hover:transition  hover:duration-500 hover:ease-in-out hover:bg-slate-700">
                        <img className='h-4 w-4 mr-2' src={discuss} alt="" /> 
                        <NavLink>Discussion</NavLink>
                        </div>
                        <div className="menu-1 w-full flex items-center text-sm text-white mr-2 rounded-md p-2 hover:transition  hover:duration-500 hover:ease-in-out hover:bg-slate-700">
                        <img className='h-4 w-4 mr-2' src={discuss} alt="" /> 
                        <NavLink>Codespaces</NavLink>
                        </div>
                        <div className="menu-1 w-full flex items-center text-sm text-white mr-2 rounded-md p-2 hover:transition  hover:duration-500 hover:ease-in-out hover:bg-slate-700">
                        <img className='h-4 w-4 mr-2' src={frog} alt="" /> 
                        <NavLink>Copilot</NavLink>
                        </div>
                        <div className="separator w-full border-b border-gray-700 ">
                        </div>
                      </div>
                      <div className="dashboard-container-3 py-2">
                        <div className="menu-1 w-full flex items-center text-sm text-white mr-2 rounded-md p-2 hover:transition  hover:duration-500 hover:ease-in-out hover:bg-slate-700">
                        <img className='h-4 w-4 mr-2' src={telescope} alt="" /> 
                        <NavLink>Explore</NavLink>
                        </div>
                        <div className="menu-1 w-full flex items-center text-sm text-white mr-2 rounded-md p-2 hover:transition  hover:duration-500 hover:ease-in-out hover:bg-slate-700">
                        <img className='h-4 w-4 mr-2' src={gift} alt="" /> 
                        <NavLink>Marketplace</NavLink>
                        </div>
                        <div className="separator w-full border-b border-gray-700"></div>
                      </div>
                      <div className="dashboard-container-4 flex flex-col p-2">
                        <div className="first flex items-center justify-between">
                        <div className="title text-xs">Repositories</div>
                        <img className='h-3 w-3 ' src={search} alt="" />
                        </div>
                        <div className="menu-1 w-full flex items-center text-sm text-white mr-2 rounded-md p-2 hover:transition  hover:duration-500 hover:ease-in-out hover:bg-slate-700">
                        <img className='h-4 w-4 mr-2 rounded-full border' src={img1} alt="" /> 
                        <NavLink>Ashutosh-programming/Netflix</NavLink>
                        </div>
                      </div>
                      <div className="dashboard-container-5 flex flex-col p-3">
                        <div className="first text-xs p-1">
                        &copy; 2025 GitHub, Inc.
                        </div>
                        <div className="second flex flex-col text-blue-custom text-xs p-2">
                          <div>About Blog Terms Privacy Security Status</div>
                          <div>Do not share my personal information</div>
                          <div>Manage cookies</div>
                        </div>
                      </div>
                    </div>
              </div>}
              {open2==1 && 
                <div onClick={closeConditional2} className="backdrop w-screen h-screen bg-gray-custom-dashboard opacity-25 absolute left-0 top-0"></div>
                }

            {/* This is navbar 2 */}
            <div className="navbar-2 flex items-center justify-between">
                <div onClick={openConditional} className="navbar-input max-[800px]:p-2 max-[800px]:w-11 w-72 flex items-center border border-gray-custom p-1 rounded-md text-sm mr-4">
                  <img className='h-4 w-4  mr-3' src={search} alt="search" />
                  <div className="input-txt max-[800px]:hidden text-gray-custom">Type / to search</div>
                  </div>
                  
                  {count ==1 && <div className="conditional-keyboard absolute w-3/4 h-2/3 z-10 bg-black p-2 border-2 left-24 border-gray-custom shadow-2xl shadow-black rounded-2xl top-1 max-[530px]:left-10 max-[530px]:h-28">
                    <div className="conditional-keyboard-container w-full flex items-center border-2 border-blue-custom rounded-lg p-1">
                    <img src={search} alt="search" className='h-4 2-4 mr-3'/>
                    <div className="conditional-input w-full"><input type="text" className=' outline-none border-none w-full bg-inherit' name="" id="" /></div>
                    </div>
                    </div>}
                  {open == 1 && <div className='conditional-keyboard-opened'>
                      <div onClick={closeConditional} className="backdrop w-screen h-screen bg-transparent opacity-25 absolute left-0 top-0"></div>
                    </div>}

                <div onClick={openMouseEvent} className="navbar-icon1 max-[600px]:hidden max-[700px]:w-auto flex relative items-center border rounded-md mr-4 justify-between border-gray-custom">
                    <div className="icon1-1 max-[800px]:p-2 max-[800px]:w-9 p-2 flex items-center justify-center hover:bg-gray-800 cursor-pointer"><img className='h-4 w-4' src={frog} alt="" /></div>
                    <div className="icon1-seperator h-8  border-r border-gray-custom"></div>
                    <div className="icon1-2 max-[800px]:p-2 max-[800px]:w-9 p-2 felx items-center justify-center hover:bg-gray-800 cursor-pointer"><img className='h-4 w-4' src={downArrow} alt="" /></div>
                </div>
                {mouseEvent == 1 && <div className='mouse-drop-down-wrapper absolute border rounded-lg z-10 right-64 text-sm border-gray-custom h-44 top-14 text-gray-custom bg-gray-custom-dashboard w-60'>
                  <div className="mouse-event-container">
                    <div className="mouse-event-first p-2">
                      <div className='px-2'>New conversation in </div>
                      <div className='flex items-center p-1 hover:bg-slate-700 rounded-md'>
                        <img className='h-4 w-4 mr-2' src={discuss} alt="" />
                        <div className="txt text-white">Assistive</div>
                        </div>
                        <div className='flex items-center p-1 hover:bg-slate-700 rounded-md'>
                        <img className='h-4 w-4 mr-2' src={focuse} alt="" />
                        <div className="txt text-white">Immersive</div>
                        </div>
                    </div>
                    <div className="seperator w-full border-b border-gray-700"></div>
                    <div className="mouse-event-second p-2">
                        <div className='flex items-center p-1 hover:bg-slate-700 rounded-md'>
                        <img className='h-4 w-4 mr-2' src={download} alt="" />
                        <div className="txt text-white">Download for</div>
                        </div>
                        <div className='flex items-center p-1 hover:bg-slate-700 rounded-md'>
                        <img className='h-4 w-4 mr-2' src={setting} alt="" />
                        <div className="txt text-white">Settings</div>
                        </div>
                    </div>
                  </div>
                  </div>} 
                {open3 == 1 && <div onClick={closeMouseEvent} className='close-mouse-event w-screen h-screen bg-transparent opacity-25 absolute left-0 top-0'>
                  </div>}  
                <div className="navbar-seperator max-[600px]:hidden border-r h-4 border-gray-custom mr-4"></div>
                <div onClick={openMouseEvent2} className="navbar-icon2 max-[600px]:hidden border border-gray-custom rounded-md p-2 w-20 flex items-center justify-between mr-4 hover:bg-gray-800 cursor-pointer">
                  <div className="icon2-1"><img className='h-4 w-4 mr-2' src={plus} alt="" /> </div>
                  <div className="icon2-2"><img className='h-3 w-3' src={downArrow} alt="" /></div>
                </div>
                {mouseEvent2 == 1 && <div className='mouse-drop-down-wrapper-2 absolute border rounded-lg z-10 right-12 text-sm border-gray-custom h-56 top-14 text-gray-custom bg-gray-custom-dashboard w-44'>
                  <div className="mouse-event-container">
                    <div className="mouse-event-first p-2">
                      <div className='flex items-center p-1 hover:bg-slate-700 rounded-md'>
                        <img className='h-4 w-4 mr-2' src={discuss} alt="" />
                        <div className="txt text-white">New repository</div>
                        </div>
                        <div className='flex items-center p-1 hover:bg-slate-700 rounded-md'>
                        <img className='h-4 w-4 mr-2' src={focuse} alt="" />
                        <div className="txt text-white">Import repository</div>
                        </div>
                    </div>
                    <div className="seperator w-full border-b border-gray-700"></div>
                    <div className="mouse-event-second p-2">
                        <div className='flex items-center p-1 hover:bg-slate-700 rounded-md'>
                        <img className='h-4 w-4 mr-2' src={download} alt="" />
                        <div className="txt text-white">New codespace</div>
                        </div>
                        <div className='flex items-center p-1 hover:bg-slate-700 rounded-md'>
                        <img className='h-4 w-4 mr-2' src={setting} alt="" />
                        <div className="txt text-white">New git</div>
                        </div>
                    </div>
                    <div className="seperator w-full border-b border-gray-700"></div>
                      <div className="mouse-event-third p-2">
                      <div className='flex items-center p-1 hover:bg-slate-700 rounded-md'>
                        <img className='h-4 w-4 mr-2' src={discuss} alt="" />
                        <div className="txt text-white">New Organization</div>
                        </div>
                        <div className='flex items-center p-1 hover:bg-slate-700 rounded-md'>
                        <img className='h-4 w-4 mr-2' src={focuse} alt="" />
                        <div className="txt text-white">New project</div>
                        </div>
                    </div>
                  </div>
                  </div>} 
                  {open4 == 1 && <div onClick={closeMouseEvent2} className='close-mouse-event w-screen h-screen bg-transparent opacity-25 absolute left-0 top-0'>
                  </div>} 
                <div className="navbar-icon3 max-[800px]:p-2 max-[800px]:w-8 max-[600px]:hidden border border-gray-custom rounded-md p-2 mr-4 hover:bg-gray-800 cursor-pointer"><img className='h-3 w-3' src={circle} alt="" /></div>
                <div className="navbar-icon4 max-[800px]:p-2 max-[800px]:w-8 max-[600px]:hidden border border-gray-custom rounded-md p-2 mr-4 hover:bg-gray-800 cursor-pointer"><img className='h-4 w-4' src={branch} alt="" /></div>
                <div onClick={openConditional3} className="navbar-profile-icon border border-gray-custom rounded-full w-10 h-9 cursor-pointer"><img className=' object-cover rounded-full object-center w-10 h-9' src={img1} alt="" />
                </div>
            </div>
            {<div className={`contidional-dashboardm  duration-300 overflow-hidden ${count3 ==1? " w-80 delay-75 border-r border-gray-custom rounded-r-lg h-screen px-4 bg-gray-custom-dashboard text-gray-custom" : ' w-0'}  absolute z-10 right-0 top-0`}>
              <div className={`dashboard-container-wrapper ${count3 == 1? 'block':'hidden'}`}>
                      <div className="dashboard-container-1 flex justify-between items-center h-16 p-1 ">
                        <div className='flex items-center'><img className=' rounded-full h-8 w-8 mr-2' src={img1} alt="GitHub"/>
                        <div className="txt text-gray-custom">Ashutosh-programming</div>
                        </div>
                        <div onClick={closeConditional3} className=' text-gray-custom cursor-pointer p-2 hover:transition  hover:duration-500 hover:ease-in-out hover:bg-slate-700 border-0 rounded-md'><img className=' h-5 w-5' src={cross} alt="" /></div>
                      </div>
                      <div className="dashboard-container-2 flex flex-col mt-4">
                        {arr1.map((e)=>{
                          return(
                         <div key={e.id} className="menu-1 w-full flex items-center text-sm text-white mr-2 rounded-md p-2 hover:transition  hover:duration-500 hover:ease-in-out hover:bg-slate-700">
                        {e.img}
                        <NavLink to='/'>{e.text}</NavLink>
                        </div>
                          )
                          
                        })}
                        <div className="separator w-full border-b border-gray-700 ">
                        </div>
                      </div>
                      <div className="dashboard-container-3 py-2">
                        <div className="menu-1 w-full flex items-center text-sm text-white mr-2 rounded-md p-2 hover:transition  hover:duration-500 hover:ease-in-out hover:bg-slate-700">
                        <img className='h-4 w-4 mr-2' src={telescope} alt="" /> 
                        <NavLink>Explore</NavLink>
                        </div>
                        <div className="menu-1 w-full flex items-center text-sm text-white mr-2 rounded-md p-2 hover:transition  hover:duration-500 hover:ease-in-out hover:bg-slate-700">
                        <img className='h-4 w-4 mr-2' src={gift} alt="" /> 
                        <NavLink>Marketplace</NavLink>
                        </div>
                        <div className="separator w-full border-b border-gray-700"></div>
                      </div>
                      <div className="dashboard-container-4 flex flex-col p-2">
                        <div className="first flex items-center justify-between">
                        <div className="title text-xs">Repositories</div>
                        <img className='h-3 w-3 ' src={search} alt="" />
                        </div>
                        <div className="menu-1 w-full flex items-center text-sm text-white mr-2 rounded-md p-2 hover:bg-slate-700">
                        <img className='h-4 w-4 mr-2 rounded-full border' src={img1} alt="" /> 
                        <NavLink>Sign out</NavLink>
                        </div>
                      </div>
                    </div>
              </div>}
              {open5==1 && 
                <div onClick={closeConditional3} className="backdrop w-screen h-screen bg-bg-custom-gray opacity-25 absolute left-0 top-0"></div>
                }
        </div>
      </div>
    </div>
  )
}

export default Navbar
