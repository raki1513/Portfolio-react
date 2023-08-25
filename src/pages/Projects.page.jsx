import React from 'react'
import BaseHOC from '../layouts/BaseHOC'
import bms from '../assets/bms.png'
import zomato from '../assets/zomato.png'
import figma from '../assets/figma.png'
import Github from '../assets/github.png'
import { motion } from 'framer-motion'
const Projectspage = () => {
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
        {
          "id":6,
          "name": "Portifolio Using HTML & CSS",
          "image":Github,
          "Path" : "https://github.com/raki1513/Rakesh",
          "desc":"This is a basic Portifolio containing all my social media profiles and my contact Info"
        },
        {
          "id":7,
          "name": "Community Service Project (Front-End)",
          "image":Github,
          "Path" : "https://github.com/raki1513/csp-front-end",
          "desc":"This is the Front-End part of Community Service Project which is a part of our Circullum "
        },
        {

        
          "id":8,
          "name": "Portfolio using ReactJS",
          "image":Github,
          "Path" : "https://github.com/raki1513/Portfolio-react",
          "desc":"This is the Portfolio that you are looking at right now which is built on ReactJS",
        },
          ]
  return (
    <div className="flex px-2 h-auto mb-4 mt-4  font-semibold font-[Montserrat]">
    <div className=" w-auto lg:w-[100%]">
      <div className='flex flex-col'>
      <h1 className='text-xl mb-6'>
        I am a college student who is passionate about web development. I am always looking for ways to improve my skills and knowledge in this field. I have been taking online courses, reading books, and practicing my coding skills. I am also a member of a web development community where I can learn from other developers and get feedback on my work. I am excited about the future of web development and I am confident that I can make a difference in this field.
        </h1>
      <div  className="grid grid-cols-2 lg:grid-cols-3 font-[Montserrat] lg:mx-4 lg:gap-4">
      {profiles.map((profile) => (
        <>
        <a href={profile.Path}>
        <motion.div whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.8 }} className="shadow-xl hover:shadow-2xl w-[35vh] hover:bg-blue-300 transition ease-in-out hover:shadow-cyan-400/50 h-[40vh] px-2 pt-1 rounded-lg">
        <img src={profile.image} alt="" className="w-[10vh] h-auto flex my-3 rounded-[200px]"/>
        <div>
        <h1 className="font-bold text-[3.2vh] text-black">{profile.name}</h1>
        <h1 className="text-[1.6vh] text-black"><span className="font-bold text-[1.8vh] underline">Description :</span> {profile.desc}</h1>
        </div>

        </motion.div>
        </a>
        </>

          ))}
          </div>
      </div>

          </div>
          </div>
  )
}

export default BaseHOC(Projectspage)
