import React from "react";
import SingleProject from "./singleProject";

export default function Projects() {
  return (
    <div id="projects" className="flex flex-col w-full md:w-1/2 mt-10">
      <p className="text-left text-2xl font-medium">Projects</p>

      <SingleProject
        title="Worksheet Wiz⚡"
        desc="Creates math worksheets based on user inputs"
        link="https://worksheetwiz.netlify.app/"
      />
      <SingleProject
        title="Cadmus 📚"
        desc="Worked with a team at Bluprint MIT Hackathon to develop a chrome web extension to enable dyslexic people"
        link="https://github.com/jromerooo2/dyslexia-extension"
      />
      <SingleProject
        title="Nutrichoice 🥗"
        desc="Worked with a partner during the CSYA Virtual Hackathon to develop a app that makes personalized meals plans based on dietary needs"
        link="https://github.com/Sectonic/CSYA-Hackathon-Submission"
      />
      <SingleProject
        title="HitchHikr 👍🏼"
        desc="Worked with a partner during the Uber Global Hackathon to develop a ride sharing app that puts a twist on carpooling"
        link="https://github.com/Sectonic/Virtual-Hackathon-Submission?tab=readme-ov-file#api-endpoints"
      />
    </div>
  );
}
