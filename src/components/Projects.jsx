import React from "react";
import fastApi from "../assets/portfolio/FastApi.jpeg";
import mern from "../assets/portfolio/mern.jpeg";
import mernTS from "../assets/portfolio/mernTS.png";
import reactDjango from "../assets/portfolio/reactDjango.png";

const Projects = () => {
  const projects = [
    { id: 1, src: mernTS, code: "https://github.com/Daniel-olaO/MRG-Todo" },
    {
      id: 2,
      src: mern,
      code: "https://github.com/Daniel-olaO/StudentAPI-nodeJs",
    },
    { id: 3, src: fastApi, code: "https://github.com/Daniel-olaO/stripe2qbo" },
    {
      id: 4,
      src: reactDjango,
      code: "https://github.com/Daniel-olaO/nasa-APOD",
    },
  ];
  return (
    <div
      name="projects"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen pt-[40%] pb-[50%]"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Projects
          </p>
          <p className="py-6">Take a look at some of Daniel's projects</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {projects.map(({ id, src, code }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md m-auto duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button
                  onClick={() => window.open(code, "_blank")}
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                >
                  code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
