import React, { useState, useEffect } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import Hexagon from 'react-hexagon';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  // Disable scrolling when the navbar is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'; // Disable scrolling
    } else {
      document.body.style.overflow = 'auto'; // Enable scrolling
    }
    return () => {
      document.body.style.overflow = 'auto'; // Clean up the effect
    };
  }, [isOpen]);

  // Smooth scrolling function
  const handleSmoothScroll = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false); // Close the navbar after clicking (for mobile view)
  };

  return (
    <div className="relative">
      {/* Navbar */}
      <div className="flex justify-between items-center px-6 md:px-14 py-10">
        {/* Hexagon */}
        <div
          className="opacity-0 translate-y-5 animate-fade-slide-in"
          style={{
            animationDelay: '0ms',
            animationFillMode: 'both',
            position: 'relative',
          }}
        >
          <Hexagon
            style={{
              stroke: '#64ffda',
              strokeWidth: 28,
            }}
            className="size-12"
          />
          <p
            style={{
              position: 'absolute',
              top: '48%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              margin: 0,
              fontSize: '22px',
              fontWeight: '500',
              color: '#64ffda',
            }}
          >
            S
          </p>
        </div>

        {/* Hamburger Menu Icon */}
        <HiMenu
          size={30}
          className="opacity-0 translate-y-5 animate-fade-slide-in text-[#64ffda] md:hidden cursor-pointer"
          style={{
            animationDelay: '200ms',
            animationFillMode: 'both',
            position: 'relative',
          }}
          onClick={toggleNavbar}
        />

        {/* Navbar Links (for larger screens) */}
        <div className="hidden md:flex gap-10 items-center">
          <button
            className="text-[#ccd6f6] opacity-0 translate-y-5 animate-fade-slide-in"
            style={{ animationDelay: '200ms', animationFillMode: 'both' }}
            onClick={() => handleSmoothScroll('about-me')}
          >
            <span style={{ color: '#64ffda' }}>01. </span>Background
          </button>
          <button
            className="text-[#ccd6f6] opacity-0 translate-y-5 animate-fade-slide-in"
            style={{ animationDelay: '400ms', animationFillMode: 'both' }}
            onClick={() => handleSmoothScroll('projects')}
          >
            <span style={{ color: '#64ffda' }}>02. </span>Projects
          </button>
          <button
            className="text-[#ccd6f6] opacity-0 translate-y-5 animate-fade-slide-in"
            style={{ animationDelay: '600ms', animationFillMode: 'both' }}
            onClick={() => handleSmoothScroll('work-exp')}
          >
            <span style={{ color: '#64ffda' }}>03. </span>Work Experience
          </button>
          <button
            className="text-[#ccd6f6] opacity-0 translate-y-5 animate-fade-slide-in"
            style={{ animationDelay: '800ms', animationFillMode: 'both' }}
            onClick={() => handleSmoothScroll('skills')}
          >
            <span style={{ color: '#64ffda' }}>04. </span>Skills
          </button>
          <button
            className="text-[#ccd6f6] opacity-0 translate-y-5 animate-fade-slide-in"
            style={{ animationDelay: '1000ms', animationFillMode: 'both' }}
            onClick={() => handleSmoothScroll('contact')}
          >
            <span style={{ color: '#64ffda' }}>05. </span>Contact Me
          </button>
        </div>
      </div>

      {/* Mobile Navbar with Sliding Overlay */}
      {isOpen && (
        <>
          {/* Sliding Overlay */}
          <div
            className="fixed inset-0 bg-black bg-opacity-75 z-40 backdrop-blur-sm"
            onClick={toggleNavbar}
          ></div>

          {/* Mobile Navbar */}
          <div className="fixed top-0 right-0 h-full w-2/3 bg-[#0a192f] z-50 flex flex-col items-start px-6 pt-10 space-y-6 transition-transform duration-500 ease-in-out">
            <HiX
              size={30}
              className="text-[#64ffda] cursor-pointer self-end mb-6 mr-8"
              onClick={toggleNavbar}
            />
            <button
              className="text-[#ccd6f6] text-lg"
              onClick={() => handleSmoothScroll('about-me')}
            >
              <span style={{ color: '#64ffda' }}>01. </span>Background
            </button>
            <button
              className="text-[#ccd6f6] text-lg"
              onClick={() => handleSmoothScroll('projects')}
            >
              <span style={{ color: '#64ffda' }}>02. </span>Projects
            </button>
            <button
              className="text-[#ccd6f6] text-lg"
              onClick={() => handleSmoothScroll('work-experience')}
            >
              <span style={{ color: '#64ffda' }}>03. </span>Work Experience
            </button>
            <button
              className="text-[#ccd6f6] text-lg"
              onClick={() => handleSmoothScroll('skills')}
            >
              <span style={{ color: '#64ffda' }}>04. </span>Skills
            </button>
            <button
              className="text-[#ccd6f6] text-lg"
              onClick={() => handleSmoothScroll('about-me')}
            >
              <span style={{ color: '#64ffda' }}>05. </span>Contact Me
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Navbar;
