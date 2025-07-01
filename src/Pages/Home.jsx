import React, { useEffect, useState, useRef } from "react";
import { arrow, soundon, soundoff } from "../assets/icons";
import angry_birds from "../assets/icons/angry_birds.mp3";

const Home = () => {
  const audioRef = useRef(new Audio(angry_birds));
  audioRef.current.volume = 0.4;
  audioRef.current.loop = true;

  const [isPlayingMusic, setIsPlayingMusic] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isPlayingMusic) {
      audioRef.current.play().catch((err) =>
        console.error("Error playing audio:", err)
      );
    } else {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  }, [isPlayingMusic]);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative flex flex-col items-center justify-center text-center px-4 sm:px-2 md:px-10 py-0 sm:py-10 rounded-3xl max-w-4xl mx-auto mt-10 text-white">
      <p
        className={`transition-opacity duration-1000 ${
          isVisible ? "opacity-100" : "opacity-0"
        } text-lg sm:text-xl md:text-xl leading-relaxed`}
      >
        Hi, I am{" "}
        <span className="font-bold text-2xl sm:text-3xl md:text-4xl text-yellow-300">
          Kajal
        </span>{" "}
        🖐️
        <br />
        A Software Engineer from JHARKHAND
      </p>

      {/* CTA Button */}
      <div className="mt-1 sm:mt-8">
        <a
          href="/about"
          className="flex items-center justify-center gap-2 px-6 py-2 bg-white blue text-blue-800 font-semibold rounded-2xl
          hover:bg-yellow-600 hover:text-white hover:scale-95 transition-all duration-300 ease-in-out"
        >
          Learn more
          <img src={arrow} alt="arrow" className="w-4 h-3 object-contain" />
        </a>
      </div>

      {/* Music Toggle */}
      <div className="fixed bottom-9 left-4 sm:left-6">
        <img
          src={isPlayingMusic ? soundon : soundoff}
          alt="jukebox"
          onClick={() => setIsPlayingMusic(!isPlayingMusic)}
          className="w-10 sm:w-12 h-10 sm:h-10 cursor-pointer object-contain transition-transform hover:scale-110"
        />
      </div>
    </div>
  );
};

export default Home;
