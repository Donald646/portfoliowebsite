import React from "react";

export default function Experience() {
  return (
    <div id="experience" className="flex flex-col w-full md:w-1/2 mt-10">
      <p className="text-left text-2xl font-medium">Work Experience</p>
      <div>
        <p className="text-lg font-normal mt-3 underline italic">
          Full Stack Software Engineer Intern -{" "}
          <span className="not-italic font-bold">Revision Dojo</span>
        </p>
        <p className="text-gray-400 text-base w-full font-light">
          Worked as a full stack engineer working on both serverless apis, and
          Next.js frontend. Implemented bug fixes, new features, and worked
          collaboratively to improve the app.
        </p>
        <p className="text-lg font-normal mt-3 underline italic">
          Research Intern -{" "}
          <span className="not-italic font-bold">University of Houston</span>
        </p>
        <p className="text-gray-400 text-base w-full font-light">
          Did research under Professor Tomitaka, from University of Houston on
          Machine learning-based prediction model for magnetic hyperthermia nano
          particles.
        </p>
        <p className="text-gray-400 text-base mt-2">
          Paper is in the works of being published and I am listed as an author
        </p>
      </div>
      <div>
        <p className="text-lg font-normal mt-3 underline italic">
          Director of Cirriculum and CTO -{" "}
          <span className="not-italic font-bold">Compute the Future</span>
        </p>
        <p className="text-gray-400 text-base w-full font-light">
          In charge of curriculum at Compute the Future Foundation, and
          currently developing a learning platform to teach kids how to program
        </p>
      </div>
    </div>
  );
}
