import React from "react";
import SingleTech from "./singleTech";

export default function TechStack() {
  return (
    <div className="flex w-full flex-col md:w-1/2 mt-10">
      <p className="text-left text-2xl font-medium">Technologies</p>
      <div className="flex flex-wrap gap-2">
        <SingleTech name="React" src="/react-2.svg" />
        <SingleTech name="Next.js" src="/nextLogo2.png" />
        <SingleTech name="Python" src="/python.svg" />
        <SingleTech name="Javascript" src="/javascriptrounded.svg" />
        <SingleTech name="HTML" src="/html.svg" />
        <SingleTech name="Tailwind" src="/tailwind.svg" />
        <SingleTech name="Node.js" src="/node.svg" />
        <SingleTech name="Flask" src="/flask.svg" />
        <SingleTech name="Django" src="/django.svg" />
      </div>
    </div>
  );
}
