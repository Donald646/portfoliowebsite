import React from "react";

export default function About() {
  return (
    <div
      id="about"
      className="flex flex-col w-full md:w-1/2 space-y-2 mt-10 md:px-0"
    >
      <p className="text-left text-2xl font-medium">About</p>
      <p className="w-full  text-base font-light">
        I am a 11th grader passionate about software development and building
        new things
      </p>
      <p className="w-full text-base font-light">
        Ever since I picked up web development two years ago I have been
        fascinated with the endless possibilities it offers and the power behind
        code
      </p>
    </div>
  );
}
