import React from "react";
import SingleProject from "./singleProject";

export default function Projects() {
  const projects = [
    {
      title: "Academik AI 📚",
      desc: "A AI powered study tool to help students easily create study materials. 2000+ users with $150/month in revenue",
      link: "https://academikai.com",
    },
    {
      title: "Cadmus 📚",
      desc: "Worked with a team at Bluprint MIT Hackathon to develop a chrome web extension to enable dyslexic people",
      link: "https://github.com/jromerooo2/dyslexia-extension",
    },
    {
      title: "Nutrichoice 🥗",
      desc: "Over 250 participants, with high school kids from all over the nation Worked on a team of two to develop a full stack, with a focus on the API The app provided a personalized food database, and meal creations based on dietary needs",
      link: "https://github.com/Sectonic/CSYA-Hackathon-Submission",
    },
    {
      title: "HitchHikr 👍🏼",
      desc: "Worked with a partner during the Uber Global Hackathon to develop a ride sharing app that puts a twist on carpooling",
      link: "https://github.com/Sectonic/Virtual-Hackathon-Submission?tab=readme-ov-file#api-endpoints",
    },
    {
      title: "Worksheet Wiz⚡",
      desc: "Creates math worksheets based on user inputs",
      link: "https://github.com/Donald646/Worksheet-Wiz",
    },
  ];

  return (
    <div id="projects" className="flex flex-col w-full md:w-1/2 mt-10">
      <p className="text-left text-2xl font-medium">Projects</p>

      {projects.map((project, index) => (
        <SingleProject
          key={index}
          title={project.title}
          desc={project.desc}
          link={project.link}
        />
      ))}
    </div>
  );
}
