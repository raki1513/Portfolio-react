import React from 'react'
import { Link } from 'react-router-dom';
const FooterComponent = () => {
    const FooterLG = ()=>{
        return(
            <div className='flex space-x-8 w-auto lg:w-full md:w-full md:justify-center lg:space-x-[18vh]  space-y-4 bg-[#121212] text-white items-center'>
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
        </div>
        )
    }
    const FooterSM = ()=>{
        return(
            <div className='flex justify-center w-full space-x-8 w-auto space-y-4 bg-[#121212] text-white items-center'>
            <ul >
                <a href="https://mail.google.com/mail/u/0/?fs=1&to=rakeshratnam21@gmail.com&tf=cm">
                <li>
                    Email Me
                </li>
                </a>
                <a href="https://www.youtube.com/@rakeshratnam2143">
                <li >
                    Youtube
                </li>
                </a>
                <a href="https://twitter.com/rakeshhhh21">
                <li>
                    Twitter
                </li>
                </a>
                <a href="https://www.linkedin.com/in/rakeesshhhh/">
                <li>
                    LinkedIn
                </li>
                </a>
    
            </ul>
            <hr />
            <ul>
                <a href="https://bento.me/rakeshhhh">
                <li>
                    Bento
                </li>
                </a>
                <a href="https://github.com/raki1513">
                <li>
                    Github
                </li>
                </a>
                <Link to={'/Project'}>
                <li>
                    Projects
                </li> 
                </Link>
                <Link to={'/About'}>
                <li>
                    About Me
                </li>
                </Link>
                <Link to={'/Certificates'}>
                <li>
                    Certificates
                </li>
                </Link>
                
            </ul>
            <hr />
            <ul>
                <a href="https://raki1513.github.io/Rakesh/">
                <li>
                    Old Website
                </li>
                </a>
                <a href="https://zomato-clone-html-css.netlify.app">
                <li>
                    Zomato Clone Project
                </li>
                </a>
    <a href="https://bookmyshow-clone-react.netlify.app">
    <li>
                    Book My Show Clone
                </li>
    </a>
            <a href="https://github.com/raki1513/csp-front-end">
            <li>
                    CSP Project (Front-End Developer)
                </li>
            </a>
    
            </ul>
        </div>
        )
    }
  return (
    <>
    <div className="Hobbies-Section">
      <div className="flex md:hidden lg:hidden">
        <FooterSM/>
      </div>
      <div className="hidden md:flex lg:flex">
        <FooterLG/>
      </div>
    </div>
</>
  )
}

export default FooterComponent;
