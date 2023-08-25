import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
const Navbarcomponent = () => {

  return (
    <>
    <div className="bg-[#121212] h-[8vh] lg:h-[10vh] font-[Montserrat] flex items-center justify-center  text-white">
        <ul className="font-[Montserrat]  font-semibold text-white flex space-x-4 items-center justify-center">
        <motion.li whileHover={{scale:1.2}}>
                <Link to={'/'}>Home</Link>
            </motion.li>
            <motion.li whileHover={{scale:1.2}}>
                <Link to={'/About'}>About Me</Link>
            </motion.li>
            <motion.li whileHover={{scale:1.2}}>
                <Link to={'/Project'}>Projects</Link>
            </motion.li>
            <motion.li whileHover={{scale:1.2}}>
                <Link to={'/Certificates'}>Certifications</Link>
            </motion.li>
        </ul>
    </div>
    </>
  )
};

export default Navbarcomponent;
