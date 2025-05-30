import React from 'react'
import vid1 from '../assets/vid1.mp4'
import printer from '../assets/printer.png'
import arrow from '../assets/send.png'
import arrowG from '../assets/arrow-embedded.png'
import buttonG from '../assets/button-green.png'
import branchG from '../assets/branch-green.png'
import str from '../assets/str.png'
import img1 from '../assets/img1.jpg'
import setting from '../assets/setting.png'
import book from '../assets/book.png'
import building from '../assets/building.png'
import git from '../assets/github-logo.png'
import option from '../assets/option.png'
import { useState } from 'react'

const breakpoint = 710;
 const arr2=[
    {
      id:1,
      img: <img className='h-4 w-4 mr-2 rounded-full' src={img1} alt="" />,
      text:'Ashutosh-programing/Freshers-card'
    },
        {
      id:2,
      img: <img className='h-4 w-4 mr-2 rounded-full' src={img1} alt="" />,
      text:'Ashutosh-programing/zomato_clone'
    },
        {
      id:3,
      img: <img className='h-4 w-4 mr-2 rounded-full' src={img1} alt="" />,
      text:'Ashutosh-programing/netflix_clone'
    },
        {
      id:4,
      img: <img className='h-4 w-4 mr-2 rounded-full' src={img1} alt="" />,
      text:'Tapadyuti/UtkarshParivar'
    },
        {
      id:5,
      img: <img className='h-4 w-4 mr-2 rounded-full' src={img1} alt="" />,
      text:'Tapadyuti/UtkarshParivar'
    },
    //     {
    //   id:6,
    //   img: <img className='h-4 w-4 mr-2 rounded-full' src={img1} alt="" />,
    //   text:'Your gits'
    // },
    //     {
    //   id:7,
    //   img: <img className='h-4 w-4 mr-2 rounded-full' src={img1} alt="" />,
    //   text:'Your organizations'
    // },
    //     {
    //   id:8,
    //   img: <img className='h-4 w-4 mr-2 rounded-full' src={img1} alt="" />,
    //   text:'Your enterprises'
    // },
    //     {
    //   id:9,
    //   img: <img className='h-4 w-4 mr-2 rounded-full' src={img1} alt="" />,
    //   text:'Your sponsors'
    // },
  ]
  const arr3=[
    {
      id:1,
      txt1:"Introduction to GitHub",
      txt2:"Get started using GitHub in less than an hour.",
    },
        {
      id:2,
      txt1:"GitHub Pages",
      txt2:"Create a site or blog from your GitHub repositories with GitHub Pages.",
    },
        {
      id:3,
      txt1:"Code with Copilot",
      txt2:"Develop with AI-powered code suggestions using GitHub Copilot, Codespaces, and VS Code.",
    },
        {
      id:4,
      txt1:"Hello GitHub Actions",
      txt2:"Create a GitHub Action and use it in a workflow.",
    },
  ]
  const arr4=[
        {
      id:1,
      txt1:"2 days ago",
      txt2:"Sunset of automatic watching of repositories and teams",
    },
        {
      id:2,
      txt1:"3 days ago",
      txt2:"Anthropic Claude Sonnet 4 and Claude Opus 4 are now in public preview in GitHub Copilot",
    },
        {
      id:3,
      txt1:" 4 days ago",
      txt2:"Deprecation of bulk conversion of issues to discussions via labels",
    },
        {
      id:4,
      txt1:"5 days ago",
      txt2:"Create a GitHub Action and use it in a workflow.",
    },
  ]
const Home = () => {
  const[size,setSize] = useState(window.innerWidth);

  return (
    <div>
      <div className="home-container-wrappper h-screen w-screen border-t border-b border-gray-700">
        <div className="home-container flex h-screen w-full ">

          <div className="home-container-1 border-r border-gray-700 bg-bg-custom-gray p-5 pt-11 max-[1199px]:w-1/3 max-[712px]:hidden w-1/5">
            <div className="container-1-first flex flex-wrap items-center justify-between">
              <div className="first text-gray-custom-2 text-sm">Top repositories</div>
              <div className="second w-16 p-1 flex   items-center justify-center rounded-md cursor-pointer bg-green-600 text-sm">
                <img className='h-3 w-3 mr-2' src={printer} alt="error" />
                <p className='text-white'>New</p>
                </div>
            </div>

            <div className="container-1-second p-2">
              <input className='w-full outline text-gray-700 border-gray-700 bg-transparent text-sm pt-1 pb-1 pl-2 pr-2 rounded-md' type="text" placeholder='Find a repository...'/>
            </div>
                      <div className="container-1-third">
          {
            arr2.map((e)=>{
              return(
                <div className='flex items-center w-full hover:underline text-white pb-1 pt-1 cursor-pointer text-sm' key={e.id}>
                  <div className="img-container">{e.img}</div>
                  <div className="text text-white">{e.text}</div>
                </div>
              )
            })
          }
          </div>
          </div>

          <div className="home-container-2 flex flex-wrap bg-black w-4/5 p-7 max-[1199px]:w-2/3 max-[712px]:w-full  overflow-scroll">
          <div className="container-2-first max-[1200px]:w-full  min-[1200px]:flex-nowrap w-3/4 h-full p-4">
            <div className="heading-text text-2xl text-white my-3">Home</div>
            <div className="input relative">
              <input className='w-full outline text-gray-700 border-gray-700 bg-transparent text-sm pt-3 pb-3 pl-3 pr-3 rounded-lg' type="text" placeholder='Ask copilot'/>
              <img className='h-4 w-4 absolute right-4 top-4' src={arrow} alt="" />
            </div>
            <div className="module-1 flex flex-wrap min-[1200px]:flex-nowrap items-center gap-3 my-5">
              <div className="module-1-second flex w-auto p-3 items-center justify-center border border-gray-800 rounded-3xl"><img className='h-4 w-4 mr-2' src={buttonG} alt="" /> <p className='text-white text-sm'>Create an issue for an bug</p></div>
              <div className="module-1-third flex w-auto p-3 items-center justify-center border border-gray-800 rounded-3xl"><img className='h-4 w-4 mr-2' src={branchG} alt="" /><p className='text-white text-sm'>My open pull request</p></div>
              <div className="module-1-first flex w-auto p-3 items-center justify-center border border-gray-800 rounded-3xl"><img className='h-4 w-4 mr-2' src={arrowG} alt="" /> <p className='text-white text-sm'>Get code feedback</p></div>
            </div>


            {size < breakpoint?  <div className="conditional-contianer border rounded-md border-gray-700 bg-bg-custom-gray p-3 h-auto w-full">
            <div className="container-1-first flex flex-wrap items-center justify-between">
              <div className="first text-gray-custom-2 text-sm">Top repositories</div>
              <div className="second w-16 p-1 flex   items-center justify-center rounded-md cursor-pointer bg-green-600 text-sm">
                <img className='h-3 w-3 mr-2' src={printer} alt="error" />
                <p className='text-white'>New</p>
                </div>
            </div>

            <div className="container-1-second p-2">
              <input className='w-full outline text-gray-700 border-gray-700 bg-transparent text-sm pt-1 pb-1 pl-2 pr-2 rounded-md' type="text" placeholder='Find a repository...'/>
            </div>
                      <div className="container-1-third">
          {
            arr2.map((e)=>{
              return(
                <div className='flex items-center w-full hover:underline text-white pb-1 pt-1 cursor-pointer text-sm' key={e.id}>
                  <div className="img-container">{e.img}</div>
                  <div className="text text-white">{e.text}</div>
                </div>
              )
            })
          }
          </div>
          </div>: ''}


            <div className="module-2 flex flex-col h-auto p-1 w-auto flex-wrap my-10">
              <div className="module-2-first flex items-center justify-between">
                <div className="module-2-1 flex   items-center">
              <div className="img-cont rounded-full p-2 bg-gray-900 mr-2">
              <img className='rounded-full w-4 h-4' src={str} alt="" />
              </div>
              <div className="heading-text text-sm text-gray-custom">Learn with a tutorial project</div>
              </div>
              <div className="img-cont"><img className='h-5 w-5' src={option} alt="" /></div>
              </div>
              <div className="module-2-second w-full flex flex-wrap gap-2 my-3">
                {arr3.map((e)=>{
                  // max-[1200px]:w-80
                  return(
                    <div className='box-container bg-bg-custom-gray border border-gray-700 max-[1400px]:w-80 max-[1200px]:w-80 max-[1640px]:w-96 max-[1116px]:w-full max-[922px]:w-full  rounded-md p-3 w-custom-29 h-24' key={e.id}>
                      <p className='text-sm text-blue-custom'>{e.txt1}</p>
                      <p className='text-sm text-gray-custom'>{e.txt2}</p>
                    </div>
                  )
                })}
              </div>
              <div className="bottom-txt text-sm text-blue-custom">See more tutorial projects</div>
            </div>
            <div className="module-3 w-auto my-10">
              <div className="module-3-first flex   items-center justify-between">
                <div className="module-3-1 flex   items-center">
              <div className="img-cont rounded-full p-2 bg-gray-900 mr-2">
              <img className='rounded-full w-4 h-4' src={arrowG} alt="" />
              </div>
              <div className="heading-text text-sm text-gray-custom">Start writing code</div>
              </div>
              <div className="img-cont"><img className='h-5 w-5' src={option} alt="" /></div>
              </div>
              <div className="module-3-second w-auto h-auto flex flex-wrap min-[1200px]:flex-nowrap  gap-2 my-3">

                    <div className='box-container-1 text-wrap bg-bg-custom-gray border border-gray-700 rounded-md p-4 w-custom-29 h-96 max-[1199px]:w-full max-[440px]:h-auto'>
                      <p className='text-sm text-blue-custom mb-3'>Start a new repository for Ashutosh-programing</p>
                      <p className='text-sm text-gray-custom mb-3'>A repository contains all of your project's files, revision history, and collaborator discussion.</p>
                      <div className="heading-txt text-white">Repository name *</div>
                      <input className='text-gray-custom p-2 mb-3 text-sm border border-gray-700 bg-transparent w-full rounded-md' type="text" placeholder='name your new repository...' />
                      <div className="radio flex   items-center flex-col w-full gap-4">
                      <div className="first-btn flex   flex-col w-full">
                        <div className="first-btn-1 flex   gap-3">
                       <input className='' type="radio" name='same' />
                       <div className="txt-holder pt-3 flex   flex-col">
                        <div className="main-txt text-white text-sm">Public</div>
                        <div className="first-btn-2 text-xs text-gray-custom">Anyone on the internet can see this repository</div>
                        </div>
                        </div>
                      </div>
                      <div className="second-btn flex flex-wrap  flex-col w-full">
                        <div className="second-btn-1 flex   gap-3">
                       <input className='' type="radio" name='same' />
                       <div className="txt-holder pt-3 flex flex-col">
                        <div className="main-txt text-white text-sm">Private</div>
                        <div className="second-btn-2 text-xs text-gray-custom">You choose who can see and commit to this repository</div>
                        </div>
                        </div>
                      </div>
                      </div>
                      <div className="new-btn-1 w-44 my-9 text-sm rounded-md flex items-center justify-center p-2 text-white bg-green-600 max-[380px]:hidden">
                        <div className="txt">Create a new repository</div>
                      </div>
                    </div>
                      <div className='box-container-2 bg-bg-custom-gray border border-gray-700 rounded-md p-3 w-custom-29 h-96 max-[1199px]:w-full max-[440px]:h-auto'>
                      <p className='text-sm text-blue-custom mb-3'>Introduce yourself with a profile README</p>
                      <p className='text-sm text-gray-custom mb-3'>Share information about yourself by creating a profile README, which appears at the top of your profile page.</p>
                      <div className="container-content-1 w-full border h-64 text-wrap border-gray-700 text-sm rounded-md ">
                        <div className="first flex   items-center justify-between rounded-md bg-black w-full p-2">
                          <div className="first-1 text-white">Ashutosh-programing/README.md</div>
                          <div className="first-2 text-white bg-green-600 p-1 rounded-md w-16 flex items-center justify-center max-[380px]:hidden">create</div>
                        </div>
                        <div className="separator border-b border-gray-700 w-full"></div>
                        <div className="second flex flex-wrap flex-col w-full">
                          <ol className='list-decimal flex flex-wrap flex-col p-2 pl-8 text-white overflow-hidden '>
                            <li>-👋 Hi, I’m @Ashutosh-programing</li>
                            <li className='overflow-ellipsis'>-👀 I’m interested in ...</li>
                            <li className='overflow-hidden'>- 🌱 I’m currently learning ...</li>
                            <li className='overflow-hidden'>- 💞️ I’m looking to collaborate on ...</li>
                            <li className='max-[380px]:hidden'>- 📫 How to reach me ...</li>
                            <li className=' overflow-hidden '>😄 Pronouns: ...</li>
                            <li className='overflow-hidden '>- ⚡ Fun fact: ...</li>
                            <li className='overflow-hidden'></li>
                          </ol>
                          </div>
                      </div>
                    </div> 
              </div>
            </div>
            <div className="module-4  w-auto my-10">
              <div className="module-2-first flex   items-center justify-between">
                <div className="module-2-1 flex   items-center">
              <div className="img-cont rounded-full p-2 bg-gray-900 mr-2">
              <img className='rounded-full w-4 h-4' src={setting} alt="" />
              </div>
              <div className="heading-text text-sm text-gray-custom">Use tools of the trade</div>
              </div>
              <div className="img-cont"><img className='h-5 w-5' src={option} alt="" /></div>
              </div>
              <div className="module-2-second flex flex-wrap flex-flex-50-percent gap-2 my-3 max-[1199px]:w-full min-[1200px]:flex-nowrap">

                    <div className='box-container-1 bg-bg-custom-gray border border-gray-700 rounded-md p-3 w-custom-29 h-36 max-[1199px]:w-full'>
                      <p className='text-sm text-blue-custom'>Manage projects for developers</p>
                      <div className="first flex gap-2 justify-between my-3 ">
                        <div className="img h-full p-1 w-11 "><img className='h-5 w-5' src={book} alt="" /></div>
                        <div className="txt text-white p-1  text-sm">Start using project tables  to create issues, break them into tasks, track relationships, and add custom fields.</div>
                      </div>
                    </div>
                       <div className='box-container-2 bg-bg-custom-gray border border-gray-700 rounded-md p-3 w-custom-29 h-36 max-[1199px]:w-full min-[1200px]:flex-nowrap'>
                      <p className='text-sm text-blue-custom'>Write code in your web browser</p>
                      <div className="first flex gap-2 justify-between my-3 ">
                        <div className="img h-full p-1 w-11"><img className='h-5 w-5' src={building} alt="" /></div>
                        <div className="txt text-white p-1  text-sm">Use <u className=' text-blue-custom'>the github.dev web-based editor </u>from your repository or pull request to create and commit changes.</div>
                      </div>
                    </div>
              </div>
            </div>
              <div className="module-5 min-[1200px]:flex-nowrap w-auto my-10 ">
              <div className="module-2-first flex   items-center justify-between">
                <div className="module-2-1 flex   items-center">
              <div className="img-cont rounded-full p-2 bg-gray-900 mr-2">
              <img className='rounded-full w-4 h-4' src={setting} alt="" />
              </div>
              <div className="heading-text text-sm text-gray-custom">Use tools of the trade</div>
              </div>
              <div className="img-cont"><img className='h-5 w-5' src={option} alt="" /></div>
              </div>
              <div className="module-2-second flex flex-wrap flex-flex-50-percent gap-2 my-3 min-[1200px]:flex-nowrap">

                    <div className='box-container-1 bg-bg-custom-gray border border-gray-700 rounded-md w-custom-29 h-56 max-[1199px]:w-full '>
                      <div className="video-tag box-border h-full w-full">
                        <video className='box-border w-full h-full' controls >
                          <source className='box-border' src={vid1} type="video/mp4"></source>
                        </video>
                      </div>
                    </div>
                       <div className='box-container-2 bg-bg-custom-gray border border-gray-700 rounded-md p-3 w-custom-29 max-[1199px]:w-full h-56'>
                      <p className='text-sm text-blue-custom'>Write code in your web browser</p>
                      <div className="first flex gap-2 justify-between my-3 ">
                        <div className="img h-full p-1 w-11"><img className='h-5 w-5' src={building} alt="" /></div>
                        <div className="txt text-white p-1  text-sm">Use <u className=' text-blue-custom'>the github.dev web-based editor </u>from your repository or pull request to create and commit changes.</div>
                      </div>
                    </div>
              </div>
            </div>
            <div className="container-2-footer w-full mt-4 mb-5 h-28 ">
              <div className="footer-wrapper text-gray-custom text-xs items-center justify-center flex flex-wrap gap-3 list-none mx-auto">
                <img className='h-4 w-4' src={git} alt="" />
                <li>&copy; 2025 GitHub, Inc.</li>
                <li>Terms</li>
                <li>Privacy</li> 
                <li>Security</li>
                <li>Status</li>
                <li>Docs</li>
                <li>Contact</li>
                <li>Manage cookies</li>
                <li>Do not share my personal information</li>
              </div>
            </div>
          </div>
          <div className="container-2-second max-[1200px]:hidden w-1/4 h-full bg-black">
          <div className="border-b border-gray-700 h-full">
          <div className="container-2-first border rounded-md border-gray-700 h-80 bg-black max-[1337px]:h-auto p-3">
            <div className="first-wrapper">
              <div className="heading-txt text-white text-sm">Latest changes</div>
              <div className="changes-box w-full h-full my-4">

                  {arr4.map((e)=>{
                    return(
                      <div key={e.id} className="content-box flex flex-col w-full text-sm pl-2">
                        <ul className=' list-disc'>
                      <li className="days text-gray-custom">{e.txt1}</li>
                      <div className="changes text-white">{e.txt2}</div>
                      </ul>
                      </div>
                    )
                  })}

              </div>
            </div>
          </div>

            <div className="container-2-second border mt-5 rounded-md border-gray-700 h-80 bg-black max-[1337px]:h-auto p-3">
            <div className="first-wrapper">
              <div className="heading-txt text-white text-sm">Latest changes</div>
              <div className="changes-box w-full h-full my-4">

                  {arr4.map((e)=>{
                    return(
                      <div key={e.id} className="content-box flex flex-col w-full text-sm pl-2">
                        <ul className=' list-disc'>
                      <li className="days text-gray-custom">{e.txt1}</li>
                      <div className="changes text-white">{e.txt2}</div>
                      </ul>
                      </div>
                    )
                  })}

              </div>
            </div>
          </div>
          </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
