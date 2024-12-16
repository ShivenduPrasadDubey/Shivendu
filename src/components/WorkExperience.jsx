import React from 'react';
import Observer from "../hooks/Observer";

const WorkExperience = () => {
  const [ref, isVisible] = Observer({
    threshold: 0.2, // Trigger when 10% of the component is visible
  });
  return (
    <div ref={ref} id="work-exp" className={`flex flex-col items-center mt-36 gap-12  transition-opacity duration-1000 ${
      isVisible ? 'opacity-100' : 'opacity-0'
    }`}>
      {/* Section Header */}
      <div className="w-[90%] flex items-center justify-center md:ml-0 ml-4">
        <div className="w-full max-w-4xl flex items-center">
          <h1 className="text-[#ccd6f6] flex items-center text-xl md:text-2xl font-bold mr-4">
            <span className="text-[#64ffda] text-base md:text-xl mr-2">03. </span>Experience
          </h1>
          <div className="md:w-[690px] w-[210px] h-[0.5px] bg-[#ccd6f6]"></div>
        </div>
      </div>
      {/* Work Experience Content */}
      <div className="flex flex-col md:flex-row gap-8 w-[400px] md:w-full max-w-screen-lg md:pl-8">
        {/* Left Section: Title and Company Details */}
        <div className="flex flex-col items-center text-left w-full md:w-1/3">
          <h1 className="text-[#ccd6f6] text-xl mb-2">Insight Diagnostics</h1>
          <img
            src="../../diagnostics.png"
            alt="Insight Diagnostics Logo"
            className="w-20 h-20 mb-4"
          />
          <h1 className="text-[#8892b0] mb-1">January 2024 - April 2024</h1>
          <h1 className="text-[#8892b0] mb-1">Full Stack Development Intern</h1>
          <h1 className="text-[#8892b0]">Remote</h1>
        </div>

        {/* Right Section: Description */}
        <div className="flex flex-col justify-center md:ml-0 ml-8 text-[#8892b0] w-[80%] md:w-2/3 pl-0 md:pl-8">
          <p className="mb-4 text-sm md:text-base">
            Developed a fully functional MERN stack e-commerce website for Insight Diagnostics, allowing seamless online sales of diagnostic kits, enhancing the company's online presence and customer engagement.
          </p>
          <p className="mb-4 text-sm md:text-base">
            Gained extensive hands-on industrial experience working with modern frontend technologies like React, TailwindCSS, and Redux, while also utilizing NodeJS, ExpressJS, MongoDB, and Auth0 for building a secure and scalable backend.
          </p>
          <p className="mb-4 text-sm md:text-base">
            Played a key role in transforming offline business operations into a dynamic, efficient online platform, significantly improving client accessibility, expanding market reach, and driving business growth.
          </p>
        </div>
      </div>

      {/* Thin Line Between the Two Job Sections */}
      <div className="md:w-[500px] w-[300px] max-w-screen-lg md:pl-8 mb-8">
        <div className="w-full h-[0.5px] bg-[#ccd6f6]"></div>
      </div>

      {/* Second Job Experience */}
      <div className="flex flex-col md:flex-row gap-8 justify-start items-start w-[400px] md:w-full  max-w-screen-lg md:pl-8">
        {/* Left Section: Title and Company Details */}
        <div className="flex flex-col items-center text-left w-full md:w-1/3">
          <h1 className="text-[#ccd6f6] text-xl mb-2">Samsung Prism</h1>
          <img
            src="../../prism.png"
            alt="Samsung Prism Logo"
            className="w-30 h-20 mb-4"
          />
          <h1 className="text-[#8892b0] mb-1">August 2023 - February 2024</h1>
          <h1 className="text-[#8892b0] mb-1">Project Intern</h1>
          <h1 className="text-[#8892b0]">Remote</h1>
        </div>

        {/* Right Section: Description */}
        <div className="flex flex-col justify-center md:ml-0 ml-8 text-[#8892b0] w-[80%] md:w-2/3 pl-0 md:pl-8">
          <p className="mb-4 text-sm md:text-base">
            Developing a machine learning project to automatically add punctuation to unpunctuated sentences, improving readability and text structure. The project focuses on making text more understandable, with applications in content generation, language learning, and automated communication tools.
          </p>
          <p className="mb-4 text-sm md:text-base">
            The project uses machine learning libraries such as TensorFlow and Transformers to analyze sentence context and accurately predict punctuation marks. These tools help create grammatically correct text from unpunctuated input.
          </p>
          <p className="mb-4 text-sm md:text-base">
            It also integrates a tokenizer to efficiently handle longer text by breaking it down into smaller units, ensuring accurate punctuation placement even for complex or lengthy sentences.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WorkExperience;
