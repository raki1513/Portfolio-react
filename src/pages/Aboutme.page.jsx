import React from "react";
import BaseHOC from "../layouts/BaseHOC";
import Rakesh from "../assets/Rakesh.jpeg";
import Gaming from "../assets/gaming.png";
import Music from "../assets/sticker.png";
import Globe from "../assets/globe.png";
import Anime from "../assets/sticker (1).png";
import ContactImage from "../assets/You busy_.png";

// Logos of Socials
import Instagram from '../assets/instaLogo.png'
import Whatsapp from "../assets/whatsapp.png"
import LinkedIn from '../assets/LinkedInLogo.png'
import Email from '../assets/Gmail_Logo_512px.png'
import X from '../assets/twitter-X.png'
const Aboutme = () => {
  const Hobbies = [
    {
      name: "Gaming",
      path: Gaming,
    },
    {
      name: "Music Lover",
      path: Music,
    },
    {
      name: "Wandering Around the Earth",
      path: Globe,
    },
    {
      name: "Binge Watch Anime",
      path: Anime,
    },
  ];
  const Profiles = [
    {
      name: "Instagram",
      path: Instagram,
      "Link":"https://www.instagram.com/_.rakeshhhh._/"
    },
    {
      name: "Whatsapp",
      path: Whatsapp,
      "Link":"https://wa.me/7032057860"
    },
    {
      name: "LinkedIn",
      path: LinkedIn,
      "Link":"https://www.linkedin.com/in/rakeesshhhh/"
    },
    {
      name: "Email Me",
      path: Email,
      "Link":"https://mail.google.com/mail/u/0/?fs=1&to=rakeshratnam21@gmail.com&tf=cm"
    },
    {
      name: "X(Twitter)",
      path: X,
      "Link":"https://twitter.com/rakeshhhh21"
    },
  ];
  const AboutLG =()=>{
    return(
      <>
       <div
        id="container"
        className="flex w-full bg-[#121212] text-white font-[Montserrat] lg:font-semibold"
      >
        <div id="text" className="w-[76%] mx-2 mt-2">
          <h1>
            Hello Mate 👋, I am Rakesh Ratnam and I am Currently pursuing my
            Undergrad in CSE(Artificial Intelligence) in Narasaraopeta
            Engineering College
          </h1>
          <br />
          <h1>
            As a frontend developer, I am passionate about creating visually
            appealing and intuitive user experiences. With a keen eye for design
            and a deep understanding of ReactJS,HTML,CSS and Javascript, I bring
            websites and applications to life, ensuring seamless functionality
            across various devices and browsers. With a strong focus on
            user-centered design, I constantly stay updated on the latest web
            development trends and techniques to deliver cutting edge solutions.
            I am committed to writing clean and modular code, adhering to
            industry best practices, and ensuring accessibility for all users.
          </h1>
          <br />
          <h1>
            Also as a Designer I try to understand Real World problems and Loo
            for a Technical Solution through which the issue can be resolved and
            this journey of Designing had always been thrilling and it is a
            process of learning everyday and understanding the problems around
            me
          </h1>
        </div>
        <div
          id="imagepar"
          className="lg:w-[30%] lg:h-[50vh]  rounded-md flex items-center justify-center"
        >
            <img src={Rakesh} alt="" className="h-[50vh] mb-[10vh] rounded-md" />
        </div>
      </div>
      </>
    )
  }
  const AboutSM =()=>{
    return(
      <>
       <div
        id="container"
        className="flex w-full items-center justify-center bg-[#121212] text-white font-[Montserrat] lg:font-semibold"
      >
        <div id="text" className="w-[70%] lg:w-[76%] mx-2 mt-2">
          <h1>
            Hello Mate 👋, I am Rakesh Ratnam and I am Currently pursuing my
            Undergrad in CSE(Artificial Intelligence) in Narasaraopeta
            Engineering College
          </h1>
          <br />
          <h1>
            As a frontend developer, I am passionate about creating visually
            appealing and intuitive user experiences.
          </h1>
          <br />
          <h1>
            Also as a Designer I try to understand Real World problems and Loo
            for a Technical Solution through which the issue can be resolved
            me
          </h1>
        </div>
        <div
          id="imagepar"
          className="lg:w-[30%] lg:h-[50vh] rounded-md flex items-center justify-center"
        >
            <img src={Rakesh} alt="" className="mb-10 h-[40vh] rounded-lg" />
        </div>
      </div>
      </>
    )
  }
const HobbiesSM=()=>{
  return(
    <>
    <div
  id="hobbies"
  className="flex  w-full font-[Montserrat] font-semibold rounded-sm lg:h-[60vh]"
>
  <div id="text" className="w-[100%] mx-2 my-2">
  <h1>
            Apart from being active in my Student life my hobbies are always
            helpful for to keep my moral postive and keep myself healthy both
            Physically and Mentally
          </h1>
          <br />
    <h1>
      These are the things that keeps me active oth physically and
      mentally
    </h1>
    <br />
    <ul className="list-disc pl-3">
      <li>
        FPS games makes me feel most excited when I am Free or I dont have
        any work
      </li>
      <br />
      <li>
      Listening to upbeat music like rap, hip hop, and EDM energizes me and helps me focus on tasks.
      </li>
      <br />
      <li>
      I find traveling to be a great way to learn and grow, and I'm always looking for new challenges to overcome.
      </li>
      <br />
      <li>
      Anime can teach us about the important emotions of life, such as love, friendship, failure, and success. It can also be a source of entertainment in our free time.
      </li>
    </ul>
  </div>
  {/* Mapping a Array to Implement Cards  */}
  <div className="grid lg:grid-cols-2 gap-2 lg:grid-cols-2 font-[Montserrat] lg:mx-4 lg:gap-6">
    {Hobbies.map((profile) => (
      <>
        <div className="shadow-xl hover:shadow-2xl flex hover:bg-blue-300 mb-4 hover:text-black transition ease-in-out hover:shadow-cyan-400/50 h-[15vh] rounded-lg">
          <div id="image">
            <img src={profile.path} alt="" className="w-[15vh]" />
          </div>
          <div className="flex items-center">
            <h1 className="font-bold text-[3.2vh]">{profile.name}</h1>
          </div>
        </div>
      </>
    ))}
  </div>
</div>
</>
  )
}
  const HobbiesLG =()=>{
    return(
      <>
          <div
        id="hobbies"
        className="flex  w-full font-[Montserrat] font-semibold rounded-sm lg:h-[60vh]"
      >
        <div id="text" className="w-[100%] mx-2 my-2">
          <h1>
            Apart from being active in my Student life my hobbies are always
            helpful for to keep my moral postive and keep myself healthy both
            Physically and Mentally
          </h1>
          <br />

          <h1>
            These are the things that keeps me active oth physically and
            mentally
          </h1>
          <br />
          <ul className="list-disc pl-3">
            <li>
              FPS games makes me feel most excited when I am Free or I dont have
              any work
            </li>
            <br />
            <li>
              Listening to Music especially Rap , Hiphop and EDM makes me pumped
              and also sometimes gives that extra energy for the task I am
              trying to accomplish
            </li>
            <br />
            <li>
              Travelling and Exploring New places always Excites me , Especially
              when the Journey is filled with adventures and Challanges they
              make my journey super fun and excited
            </li>
            <br />
            <li>
              Watching anime is a thing that I do in my free time . From Anime
              we can not only entertain ourselves but we can also learn the
              important emotions of Life such as Love, Friendship , Failure,
              Success and many more
            </li>
          </ul>
        </div>
        {/* Mapping a Array to Implement Cards  */}
        <div className="grid lg:grid-cols-2 gap-2 lg:grid-cols-2 pt-4 font-[Montserrat] lg:mx-4 lg:gap-6">
          {Hobbies.map((profile) => (
            <>
              <div className="shadow-xl hover:shadow-2xl flex hover:bg-blue-300 mb-4 hover:text-black transition ease-in-out hover:shadow-cyan-400/50 h-[15vh] rounded-lg">
                <div id="image">
                  <img src={profile.path} alt="" className="w-[15vh]" />
                </div>
                <div className="flex items-center">
                  <h1 className="font-bold text-[3.2vh]">{profile.name}</h1>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
      </>
    )
  }
  const HandlesLG =()=>{
    return(
      <div
        id="contactme"
        className="font-[Montserrat] font-semibold bg-[#121212] text-white flex"
      >
        <div id="textandhandles" className="w-[80%] flex justify-center flex-col">
          <div>
          <h1>
            You can get in Touch Wth by Using the Following Social Media Handles
          </h1>
          </div>

          {/* Mapping a Array to Implement Cards  */}
        <div className="grid mx-4 mt-4 gap-x-2 w-[40vh] lg:w-[90vh] grid-cols-2 lg:grid-cols-2 lg:grid-cols-2 font-[Montserrat] text-black lg:mx-4 lg:gap-6">
          {Profiles.map((profile) => (
            <>
            <a href={profile.Link}>
              <div className="shadow-2xl hover:shadow-2xl flex bg-white hover:bg-blue-300 mb-4 hover:text-black transition ease-in-out hover:shadow-cyan-400/50 h-[8vh] lg:h-[9vh] rounded-lg">
                <div id="image" className="flex items-center justify-center mx-2 lg:mx-2">
                  <img src={profile.path} alt="" className="md:hidden w-[8vh] lg:w-[7.5vh] rounded-lg " />
                </div>
                <div className="flex items-center mx-2 lg:mx-2">
                  <h1 className="font-bold text-[3.2vh]">{profile.name}</h1>
                </div>
              </div>
              </a>
            </>
          ))}
        </div>
        </div>
        <div id="image" className="w-[40%]  flex justify-center items-center ">
          <img src={ContactImage} alt="" className=" h-[50%]" />
        </div>
      </div>
    )
  }
  const HandlesSM =()=>{
    return(
      <div
        id="contactme"
        className="font-[Montserrat] font-medium bg-[#121212] w-full text-white text-[1vh] flex"
      >
        <div id="textandhandles" className="w-[80%] text-xl flex justify-center flex-col">
          <div>
          <h1>
            You can get in Touch Wth by Using the Following Social Media Handles
          </h1>
          </div>

          {/* Mapping a Array to Implement Cards  */}
        <div className="grid mx-4 mt-4 gap-x-2 w-[40vh] grid-cols-2  font-[Montserrat] text-black">
          {Profiles.map((profile) => (
            <>
            <a href={profile.Link}>
              <div className="shadow-2xl hover:shadow-2xl flex bg-white hover:bg-blue-300 mb-4 hover:text-black transition ease-in-out hover:shadow-cyan-400/50 h-[8vh] rounded-lg">
                <div className="flex items-center mx-2">
                  <h1 className="flex justify-center text-[3.2vh]">{profile.name}</h1>
                </div>
              </div>
              </a>
            </>
          ))}
        </div>
        </div>
      </div>
    )
  }
  return (
    <>
    <div className="Main-Section">
      <div className="flex md:hidden lg:hidden">
        <AboutSM/>
      </div>
      <div className="hidden md:flex lg:flex">
        <AboutLG/>
      </div>
    </div>
      <div className="Hobbies-Section">
      <div className="flex md:hidden lg:hidden">
        <HobbiesSM/>
      </div>
      <div className="hidden md:flex lg:flex">
        <HobbiesLG/>
      </div>
    </div>
    <div className="Handles-Section">
      <div className="flex md:hidden lg:hidden">
      <HandlesSM/>
      </div>
      <div className="hidden md:flex lg:flex">
        <HandlesLG/>
      </div>
    </div>
    </>
  );
};

export default BaseHOC(Aboutme);
