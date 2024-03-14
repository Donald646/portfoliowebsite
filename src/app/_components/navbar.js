import React from "react";

const navItems = ["About", "Experience", "Projects"];

export default function Navbar() {
  return (
    <div className="nav w-1/2 sm:w-full sm:fixed top-0 z-10 font-lg text-white flex flex-col md:flex-row justify-between p-4">
      <div className="flex flex-row md:space-x-3 md:text-lg">
        {navItems.map((item) => {
          return (
            <a
              href={`#${item.toLowerCase()}`}
              className="hover:border-2 h-auto rounded-xl p-2"
              key={item}
            >
              {item}
            </a>
          );
        })}
      </div>
      <div className="flex flex-row mt-3 md:mt-0 md:ml-auto">
        <a href="https://github.com/Donald646">
          <img src="/githubicon.png" className="h-8 md:h-auto" alt="GitHub" />
        </a>
        <a href="https://www.linkedin.com/in/donald-chu-036527263/">
          <img src="linkedin.svg" className="h-8 md:h-auto" alt="Linkedin" />
        </a>
        <a href="/contact">
          <img src="email.png" className=" h-8 md:h-auto" alt="email" />
        </a>
      </div>
    </div>
  );
}
