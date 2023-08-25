import React from 'react'
import { motion } from 'framer-motion';
import {BsGithub,BsFacebook} from 'react-icons/bs'
import {FcGoogle}from 'react-icons/fc'
import { Link } from 'react-router-dom';
const FooterComponent = () => {
  return (
    <>
    <div className='flex space-x-8 lg:space-x-[18vh]  space-y-4 bg-[#121212] text-white items-center'>
        <ul >
            <a href="https://mail.google.com/mail/u/0/?fs=1&to=rakeshratnam21@gmail.com&tf=cm">
            <li className='lg:hover:text-sky-500/100'>
                Email Me
            </li>
            </a>
            <a href="https://www.youtube.com/@rakeshratnam2143">
            <li className='lg:hover:text-sky-500/100' >
                Youtube
            </li>
            </a>
            <a href="https://twitter.com/rakeshhhh21">
            <li className='lg:hover:text-sky-500/100'>
                Twitter
            </li>
            </a>
            <a href="https://www.linkedin.com/in/rakeesshhhh/">
            <li className='lg:hover:text-sky-500/100'>
                LinkedIn
            </li>
            </a>

        </ul>
        <hr />
        <ul>
            <a href="https://bento.me/rakeshhhh">
            <li  className='lg:hover:text-sky-500/100'>
                Bento
            </li>
            </a>
            <a href="https://github.com/raki1513">
            <li  className='lg:hover:text-sky-500/100'>
                Github
            </li>
            </a>
            <Link to={'/Project'}>
            <li  className='lg:hover:text-sky-500/100'>
                Projects
            </li> 
            </Link>
            <Link to={'/About'}>
            <li className='lg:hover:text-sky-500/100'>
                About Me
            </li>
            </Link>
            <Link to={'/Certificates'}>
            <li className='lg:hover:text-sky-500/100'>
                Certificates
            </li>
            </Link>
            
        </ul>
        <hr />
        <ul>
            <a href="https://raki1513.github.io/Rakesh/">
            <li  className='lg:hover:text-sky-500/100'>
                Old Website
            </li>
            </a>
            <a href="https://zomato-clone-html-css.netlify.app">
            <li  className='lg:hover:text-sky-500/100'>
                Zomato Clone Project
            </li>
            </a>
<a href="https://bookmyshow-clone-react.netlify.app">
<li  className='lg:hover:text-sky-500/100'>
                Book My Show Clone
            </li>
</a>
        <a href="https://github.com/raki1513/csp-front-end">
        <li  className='lg:hover:text-sky-500/100'>
                CSP Project (Front-End Developer)
            </li>
        </a>

        </ul>
        <hr />
            <ul className='flex space-x-4'>
                <a href="https://github.com/raki1513">
                <motion.li whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}>
                <BsGithub size={35} color='grey'/>
            </motion.li>
                </a>
                
                <a href="https://www.facebook.com/profile.php?id=100014749175657">
                <motion.li whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}>
                <BsFacebook size={35} color='#3b5998'/>
                </motion.li>
                </a>
                
                <a href="https://mail.google.com/mail/u/0/?fs=1&to=rakeshratnam21@gmail.com&tf=cm">
                <motion.li whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}>
                <FcGoogle size={35}/>
                </motion.li>
                </a>
                
                
                
            </ul>
    </div>
</>
  )
}

export default FooterComponent;
