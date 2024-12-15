import React from 'react';

const Info = () => {
  const handleResumeClick = () => {
    window.open('https://drive.google.com/file/d/1LYuFXnX-Cl1CP7vF_qxvJX8m2LFqip_3/view?usp=sharing', '_blank');
  };

  // Determine the starting animation delay based on screen size
  const isMobile = window.innerWidth < 768; // Typical breakpoint for mobile devices
  const baseDelay = isMobile ? 800 : 1600; // 800ms for mobile, 1600ms otherwise
  const delayIncrement = 200; // Increment for each element

  return (
    <div className="md:ml-[18%] ml-6 md:mt-10 mt-5">
      <p
        className="text-[#64ffda] md:mb-8 mb-5 ml-1 opacity-0 animate-fade-slide-in translate-y-5"
        style={{
          animationDelay: `${baseDelay}ms`,
          animationFillMode: 'both',
          color: '#64ffda',
        }}
      >
        Hi, my name is
      </p>
      <h1
        className="text-[#ccd6f6] md:text-7xl text-4xl font-sans font-bold mb-3 opacity-0 animate-fade-slide-in translate-y-5"
        style={{
          animationDelay: `${baseDelay + delayIncrement}ms`,
          animationFillMode: 'both',
          color: '#ccd6f6',
        }}
      >
        Shivendu Prasad Dubey.
      </h1>
      <h1
        className="text-[#8892b0] md:text-7xl text-4xl font-sans font-bold mb-10 opacity-0 animate-fade-slide-in translate-y-5"
        style={{
          animationDelay: `${baseDelay + delayIncrement * 2}ms`,
          animationFillMode: 'both',
          color: '#8892b0',
        }}
      >
        I build things for the web.
      </h1>
      <div
        className="md:mb-10 mb-8 opacity-0 animate-fade-slide-in translate-y-5"
        style={{
          animationDelay: `${baseDelay + delayIncrement * 3}ms`,
          animationFillMode: 'both',
          color: '#8892b0',
        }}
      >
        <p className="text-[#8892b0] text-sm md:text-base md:w-[42%] w-96">
          I am a software engineer specializing in building and designing websites for everyone to
          use and enjoy. I am always looking for ideas that will guide me to develop a great
          website with exceptional digital experience.
        </p>
      </div>
      <button
        onClick={handleResumeClick}
        className="flex md:py-5 items-center justify-center p-4 md:text-base text-sm md:px-6 text-[#64ffda] opacity-0 animate-fade-slide-in translate-y-5 border border-[#64ffda] rounded-md transition-all duration-300 ease-in-out"
        style={{
          animationDelay: `${baseDelay + delayIncrement * 4}ms`,
          animationFillMode: 'both',
          color: '#64ffda',
        }}
      >
        Check out my Resume!
      </button>
    </div>
  );
};

export default Info;
