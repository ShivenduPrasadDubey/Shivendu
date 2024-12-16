import React, { useState } from "react";
import Observer from "../hooks/Observer";

const Projects = () => {
  const projectData = [
    {
      id: 1,
      title: "CognifyIQ",
      duration: "ReactJS | Nodejs | ExpressJS | Tailwind CSS | MongoDB | Auth0",
      content: [
        "Made a responsive website that enables the users to test their cognitive ability.",
        "There are 4 types of games which the users can use and improve upon their skills",
        "This can be very useful in the placement season",
        "Auth0 is used for authentication of the users and they can view their past scores and also the leaderboard",
      ],
      github: "https://github.com/ShivenduPrasadDubey/CognifyIQ",
      liveSite: "https://cognify-iq.vercel.app/",
    },
    {
      id: 2,
      title: "Hostel Share Hub",
      duration: "NextJS | JavaScript | Tailwind | MongoDB | Mongoose | NextAuth",
      content: [
        "Made a website for hostel dwellers to share and request utilities with each other after intime of hostel ",
        "Integrated NextAuth for user authentication, providing secure and user-friendly login and registration functionalities ",
        "Integrated MongoDB with mongoose for database operations, ensuring data persistence",
      ],
      github: "https://github.com/ShivenduPrasadDubey/HostelShareHub",
      liveSite: "https://hostel-share-hub.vercel.app/",
    },
    {
      id: 3,
      title: "Ez-KYC",
      duration: "ReactJS | NodeJS | ExpressJS | TailwindCSS",
      content: [
        "Developed an interactive chatbot application called ez-KYC using the MERN stack during a 48-hour hackathon",
        "Implemented features allowing users to complete their KYC (Know Your Customer) process online, supporting multiple regional Indian languages for user interaction",
        "Incorporated functionalities such as capturing user’s photo, collecting name, date of birth, and Aadhaar number in an interactive conversational manner",
        "Integrated third-party APIs to verify user details, including sending OTP to the mobile number linked with Aadhaar and fetching Aadhaar card details upon successful verification, enabling seamless KYC completion",
      ],
      github: "https://github.com/ShivenduPrasadDubey/Ez-KYC-beta",
      liveSite: "https://www.youtube.com/watch?v=XGyAsfO2bdo",
    },
  ];
  const [ref, isVisible] = Observer({
    threshold: 0.3, // Trigger when 10% of the component is visible
  });

  const [activeProject, setActiveProject] = useState(projectData[0]);

  return (
    <div ref={ref} id="projects" className={`relative flex flex-col items-center justify-center min-h-screen md:ml-0 ml-2 mt-32 transition-opacity duration-1000 ${
      isVisible ? 'opacity-100' : 'opacity-0'
    }`}>
      <div className="md:w-full flex items-center justify-center w-[90%]">
        <div className="w-full max-w-4xl flex items-center">
          <h1 className="text-[#ccd6f6] flex items-center text-xl md:text-2xl font-bold mr-4">
            <span className="text-[#64ffda] text-base md:text-xl mr-2">02. </span>Projects
          </h1>
          <div className="md:w-[630px] w-[90%] h-[0.5px] bg-[#ccd6f6]"></div>
        </div>
      </div>

      <div className="md:flex gap-12 w-[90%] max-w-4xl mt-12">
        <div className="flex md:flex-col flex-shrink-0">
          {projectData.map((project) => (
            <button
              key={project.id}
              onClick={() => setActiveProject(project)}
              className={`text-left text-sm md:text-base py-2 px-4 border-t-2 md:border-t-0 md:border-l-2 ${
                activeProject.id === project.id
                  ? "border-[#64ffda] text-[#64ffda] bg-transparent"
                  : "border-transparent text-[#8892b0] hover:text-[#64ffda]"
              }`}
            >
              {project.title}
            </button>
          ))}
        </div>
        <div className="text-[#ccd6f6] flex-1">
          <h1 className="text-xl md:mt-0 mt-5 md:text-2xl">{activeProject.title}</h1>
          <p className="md:mt-2 mt-5 text-sm text-[#8892b0]">{activeProject.duration}</p>
          <ul className="md:mt-4 mt-8 w-[90%] md:w-full list-disc ml-5">
            {activeProject.content.map((item, index) => (
              <li key={index} className="mb-2 text-[#8892b0] text-sm md:text-base">
                {item}
              </li>
            ))}
          </ul>
          <div className="flex gap-3 ml-5 mt-5">
            <svg
              className="w-6 h-6 cursor-pointer text-[#8892b0] hover:text-[#64ffda]"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              onClick={() => window.open(activeProject.github, "_blank")}
            >
              <path
                fillRule="evenodd"
                d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z"
                clipRule="evenodd"
              />
            </svg>
            <svg
              className="w-6 h-6 cursor-pointer text-[#8892b0] hover:text-[#64ffda]"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              onClick={() => window.open(activeProject.liveSite, "_blank")}
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M18 14v4.833A1.166 1.166 0 0 1 16.833 20H5.167A1.167 1.167 0 0 1 4 18.833V7.167A1.166 1.166 0 0 1 5.167 6h4.618m4.447-2H20v5.768m-7.889 2.121 7.778-7.778"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
