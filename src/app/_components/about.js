import React from "react";

export default function About() {
  return (
    <div
      id="about"
      className="flex flex-col w-full md:w-1/2 space-y-2 mt-10 md:px-0"
    >
      <p className="text-left text-2xl font-medium">About</p>
      <p className="w-full  text-base font-light">
        I am a 12th grader passionate about software development and building
        new things
      </p>
      <p className="w-full text-base font-light">
        I learned how to code about four years ago, but ever since I got a
        interest in web development two years ago I have been fascinated with
        the endless possibilities it offers and the power behind code
      </p>
    </div>
  );
}
