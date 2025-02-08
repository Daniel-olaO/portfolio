import React from "react";
import Css from "../assets/css.png";
import Html from "../assets/html.png";
import Django from "../assets/django.jpeg";
import Docker from "../assets/docker.png";
import GitHub from "../assets/github.png";
import JavaScript from "../assets/javascript.png";
import Linux from "../assets/linux.jpeg";
import Node from "../assets/node.png";
import Python from "../assets/python.jpeg";
import ReactIcon from "../assets/react.png";
import Tailwind from "../assets/tailwind.png";

const Skills = () => {
  const technologies = [
    {
      id: 1,
      src: Css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 2,
      src: Html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 3,
      src: Django,
      title: "Django",
      style: "shadow-green-500",
    },
    {
      id: 4,
      src: Docker,
      title: "Docker",
      style: "shadow-sky-500",
    },
    {
      id: 5,
      src: GitHub,
      title: "GitHub",
      style: "shadow-gray-400",
    },
    {
      id: 6,
      src: JavaScript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 7,
      src: Linux,
      title: "Linux",
      style: "shadow-white",
    },
    {
      id: 8,
      src: Node,
      title: "Node",
      style: "shadow-green-500",
    },
    {
      id: 9,
      src: Python,
      title: "Python",
      style: "shadow-blue-500",
    },
    {
      id: 10,
      src: ReactIcon,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 11,
      src: Tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
  ];
  return (
    <div
      name="skills"
      className="bg-gradient-to-b from-gray-800 to-black w-full h-screen pt-[50%] pb-[40%]"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Skills
          </p>
          <p className="py-6">These are technologies I've work with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {technologies.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
