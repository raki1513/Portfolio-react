import React from "react";
import Rakesh from '../assets/trap door.png'
import BaseHOC from "../layouts/BaseHOC";
import Typed from 'react-typed';
import Rakesh1 from '../assets/laptop wave.png'
import Rakesh2 from '../assets/equation meme.png'
import bms from '../assets/bms.png'
import zomato from '../assets/zomato.png'
import figma from '../assets/figma.png'
import Github from '../assets/github.png'
import {BsGithub,BsFacebook} from 'react-icons/bs'
import {FcGoogle}from 'react-icons/fc'
import {motion} from'framer-motion';
const Homepage = () => {
  const profiles = [
  {
    "id":1,
    "name": "Figma Profile",
    "image":figma,
    "Path" : "https://www.figma.com/@rakeshratnam",
    "desc":"This is my Figma Profile through which you can access all my design Files"
  },
  {
    "id":2,
    "name": "BookmyshowClone",
    "image":bms,
    "Path" : "https://bookmyshow-clone-react.netlify.app",
    "desc":"This is a Book My Show Clone. This project is done with the help of ReactJS as front-end and used an Open-Source movie Database that is Movie.db"
  },
  {
    "id":3,
    "name": "Zomato Clone",
    "image":zomato,
    "Path" : "https://zomato-clone-html-css.netlify.app",
    "desc":"This is a Zomato Clone I have Created a Zomato Clone that was created through HTML and CSS"
  }, 
  {
    "id":4,
    "name": "Library Managment System",
    "image":Github,
    "Path" : "https://github.com/raki1513/Library-Managment-System",
    "desc":"This is a Simple Library Management System built Using Express JS This following project is built on ExpressJS "
  },
  {
    "id":5,
    "name": "Auth Using Express JS and JWt",
    "image":Github,
    "Path" : "https://github.com/raki1513/auth-using-jwt",
    "desc":"This is a basic Express back-end Server which Authenticates the User and Registers"
  },
]
  return (
  <>
      {/* Main Section or Hero Section */}
  <div className="bg-[#121212] font-[Montserrat]  text-white">

  <div className="flex font-[Montserrat] w-full">
    <div className="flex flex-col justify-center mx-4 w-[60%]">
        <h1 className=" font-bold text-[05vh]">Hey 👋, I am Rakesh Ratnam </h1>
        <h1 className="font-bold text-[02vh] lg:mx-6">
            I am a <Typed
        strings={['Developer','Designer','Student',]}
        backSpeed={50}
        typeSpeed={50}
        loop
        /> 
        </h1>
        <div className="flex mt-6">
          <a href="https://www.facebook.com/profile.php?id=100014749175657">
          <motion.li
            className="mr-6 mb-6 rounded-full shadow-xl w-[6vh] grid place-items-center justify-center"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            id="facebook-login"
          >
            <BsFacebook size={35} color="#3b5998" />
          </motion.li>
          </a>
   
          <a href="https://mail.google.com/mail/u/0/?fs=1&to=rakeshratnam21@gmail.com&tf=cm">
          <motion.li
            className="mr-6 mb-6 rounded-full shadow-xl w-[6vh] grid place-items-center justify-center"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
          >
            <FcGoogle size={35} />
          </motion.li>
          </a>
         
          <a href="https://github.com/raki1513">
          <motion.li
            className="mr-6 mb-6 rounded-full shadow-xl w-[6vh] grid place-items-center justify-center"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
          >
            <BsGithub size={30} color="grey" />
          </motion.li>
          </a>
         
    </div>
    </div>
    <div className="flex w-[40%]">
        <img src={Rakesh} alt="RakeshPhoto" className="w-[50vh] flex flex-end"  />
    </div>
  </div>
  </div>
  {/* Introduction Secton  */}
  <div className="w-full flex">
  <div className="w-[40%] flex items-center">
    <img src={Rakesh1} alt="" className="w-[30vh] lg:w-[50vh] mx-4"/>
  </div>
  <div className="font-[Montserrat] w-[60%] lg:w-[60%] mt-4 mx-2 font-semibold text-[2.5vh] flex flex-col justify-center">
    <h1>Hey guys I am Rakesh Ratnam.I am a CS undergraduate at Narasaraopeta Engineering college who is curious about exploring new technologies. I am starter who can work with little guidance and proper path way to learn new stuff. 
      I can seamlessly work for hours and will try to ensure that I can deliver the best out of my potential.
      </h1><br />
      <h1>
      Webstack: HTML,CSS,JS,React,React Native, ExpressJS
      </h1>
      <br />
      <h1>
Looking Forwad to contact me:
Mail: rakeshratnam21@gmail.com
      </h1>
  </div>
  <div>
    <h1>

    </h1>
  </div>
  </div>
  <hr className="mx-7 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700"/>
  {/* Learning Section */}
  <div className="flex px-2 h-auto mb-4 lg:h-screen mx-2 font-semibold font-[Montserrat] lg:mb-4 lg:mt-4">
    <div className=" w-auto lg:w-[60%]">
      <h1 className="pb-4 text-xl">
        In the process of Learning something Everyday I came across many things and made me do something and all my work is down below and you can check it out too
      </h1>

      {/* Mapping a Array to Implement Cards  */}
      <div  className="grid grid-cols-2 gap-2 lg:grid-cols-3 font-[Montserrat] lg:mx-4 lg:gap-6">
      {profiles.map((profile) => (
        <>
        <a href={profile.Path}>
        <motion.div whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.8 }} className="shadow-xl hover:shadow-2xl  lg:w-[35vh] hover:bg-blue-300 transition ease-in-out hover:shadow-cyan-400/50 h-[30vh] lg:h-[40vh] lg:px-2 lg:pt-1 rounded-lg">
        <img src={profile.image} alt="" className="w-[10vh] h-auto flex my-3 rounded-[200px]"/>
        <div>
        <h1 className="font-bold lg:text-[3.2vh] text-black">{profile.name}</h1>
        <h1 className="lg:text-[1.6vh] text-[1.5vh] text-black"><span className="font-bold text-[1.8vh] underline">Description :</span> {profile.desc}</h1>
        </div>

        </motion.div>
        </a>
        </>

          ))}
          </div>
          </div>
          {/* Image Section */}
    <div className="w-[90vh] lg:w-[40%]  ml-10   flex items-center">
    <img src={Rakesh2} alt="" className="w-[50vh] mx-4 mix-blend-screen" />
    </div>
  </div>
  </>
  )

};

export default BaseHOC(Homepage);
