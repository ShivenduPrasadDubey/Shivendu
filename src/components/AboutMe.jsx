import React from 'react';
import Observer from '../hooks/Observer';

const AboutMe = () => {
  const [ref, isVisible] = Observer({
    threshold: 0.1, // Trigger when 10% of the component is visible
  });

  return (
    <div
      id="about-me" // Added id for smooth scrolling
      ref={ref}
      className={`md:flex justify-center mt-56 gap-12 ml-8 transition-opacity duration-1000 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className='md:ml-0'>
        <div className="flex items-center">
          <h1 className="text-[#ccd6f6] flex font-bold items-center text-xl md:text-2xl mr-4">
            <span className="text-[#64ffda] mr-2 text-base md:text-xl">01. </span>Background
          </h1>
          <div className="md:w-[300px] w-[200px] h-[0.5px] bg-[#ccd6f6]"></div>
        </div>
        <p className="text-[#8892b0] md:w-[500px] mt-8 text-sm w-[390px] md:text-base">
          Hello! I am Shivendu, a 4th-year student at SRM Chennai, pursuing a degree in Computer Science and Engineering. Fueled by a deep enthusiasm for technology and innovation, I have cultivated a strong expertise in web development and software engineering.
          <br />
          <br />
          My journey encompasses diverse projects that have honed my ability to craft intuitive, dynamic, and user-centric applications.
          <br />
          <br />
          I recently, in June 2024, participated and <span className="text-[#64ffDa]">won</span> the{' '}
          <span className="text-[#64ffDa]">JP Morgan Code for Good Hackathon</span> which involved great communication, peer programming, and time management skills. Me and my team worked as a unit and overcame this hurdle.
          <br />
          <br />
          My solid foundation in <span className="text-[#64ffDa]">data structures and algorithms</span> empowers me to approach problems strategically, enabling the creation of resilient and efficient applications.
        </p>
      </div>
      <div className="relative md:mt-16 mt-12 md:ml-5 ml-10 group">
        {/* Outline */}
        <div className="absolute w-60 h-72 rounded-lg border-2 border-[#64ffda] translate-x-4 translate-y-4 transition-transform duration-300 md:group-hover:translate-x-6 md:group-hover:translate-y-6"></div>
        {/* Image */}
        <img
          src="../../2 shiv.jpg"
          className="md:grayscale md:hover:grayscale-0 md:transition md:ease-in-out md:duration-300 w-60 h-72 rounded-lg relative z-10 transform md:group-hover:-translate-x-2 md:group-hover:-translate-y-2"
          alt="Your Image"
        />
      </div>
    </div>
  );
};

export default AboutMe;
