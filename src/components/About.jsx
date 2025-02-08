import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800
    to-black text-white pt-[40%]"
    >
      <div
        className="max-w-screen-lg p-4 mx-auto flex flex-col
      justify-center w-full h-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-5">
          I'm a highly motivated web developer with technical skills in Linux,
          Docker, CI/CD, and GitHub Actions, and a track record of personal web
          projects. As an Entry-Level Full-Stack Web Developer, I'm committed to
          delivering high-quality work and overcoming challenges to ensure the
          success of the company. With computer science education and a Python
          certificate, I bring a strong foundation in programming and
          development. I'm currently a Software Developer Fellow at
          SharpestMinds, where I collaborate on pair-to-pair programming
          projects, including developing a NASA APOD Server API using Django,
          Postgres, and React, and a full-stack Schedule Builder application
          using MongoDB, Express, Node, and React. Please reach out if you're
          seeking a dedicated and skilled web developer to join your team.
        </p>

        <br />

        {/* <p className="text-xl">
          I'm a highly motivated web developer with technical skills in Linux,
          Docker, CI/CD, and GitHub Actions, and a track record of personal web
          projects. As an Entry-Level Full-Stack Web Developer, I'm committed to
          delivering high-quality work and overcoming challenges to ensure the
          success of the company. With computer science education and a Python
          certificate, I bring a strong foundation in programming and
          development. I'm currently a Software Developer Fellow at
          SharpestMinds, where I collaborate on pair-to-pair programming
          projects, including developing a NASA APOD Server API using Django,
          Postgres, and React, and a full-stack Schedule Builder application
          using MongoDB, Express, Node, and React. Please reach out if you're
          seeking a dedicated and skilled web developer to join your team.
        </p> */}
      </div>
    </div>
  );
};

export default About;
