import React from "react";
import {Typewriter} from "react-simple-typewriter";


const TypewriterAnimation = () => {
  const phrases = [
    "Web Developer",
    "Frontend Developer",
    "MERN Stack Developer",
    "Backend Developer",
  ];

  return (
    <div className="text-center">
      <span className="text-4xl text-white md:text-6xl sm:text-6xl">
      I'm a{" "}
        <Typewriter
          loop
          cursor
          cursorStyle="|"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
          words={phrases}
        />
      </span>
    </div>
  );
};

export default TypewriterAnimation;
