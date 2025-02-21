import React, { useEffect, useState } from "react";
import {useRef } from "react";
import { arrow } from '../assets/icons'
import { soundoff, soundon } from '../assets/icons'
import angry_birds from '../assets/icons/angry_birds.mp3'

const Home = () => {
  const audioRef = useRef(new Audio(angry_birds));
  audioRef.current.volume = 0.4;
  audioRef.current.loop = true;

  const [isPlayingMusic, setIsPlayingMusic] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    if (isPlayingMusic) {
      audioRef.current.play(angry_birds).catch(err => console.error("Error playing audio:", err));
    } else {
      audioRef.current.pause();
      audioRef.current.currentTime = 0; // Reset audio
    }
  }, [isPlayingMusic]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true); // Trigger the visibility after delay
    }, 300); // Delay to make the animation smooth
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="sm:text-xl mt-10 w-120 h-35 sm:leading-snug rounded-3xl ml-130 mr-125 mt-1 bg-red-900 text-center py-4 px-6 text-white mx-5">
       <p className={`transition-transform duration-1000 transform `}>
        Hi, I am <span className="font-bold text-3xl"> Kajal </span> 🖐️ <br />
        A Software Engineer from JHARKHAND
      </p>
      
      <div>
      <a
        href="/about"
        className="justify-center w-full bg-white text-blue-500 h-10 font-semibold px-6 py-2 rounded-2xl 
                   hover:bg-yellow-600 hover:text-white hover:scale-90 transition-all 
                   duration-300 ease-in-out transform flex items-center gap-2"
      >
        Learn more
        <img src={arrow} alt="arrow" className="w-4 h-4 object-contain " />
    
      </a>
    </div>
    <div className="absolute mt-110  ml-4 left-2">
        <img
          src={isPlayingMusic ? soundon : soundoff}
          alt="jukebox"
          onClick={() => setIsPlayingMusic(!isPlayingMusic)}
          className="w-12 h-12 cursor-pointer object-contain" 
        />
      </div>
    </div>
 
  )
}

export default Home