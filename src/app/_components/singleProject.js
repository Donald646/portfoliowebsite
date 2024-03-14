import React from "react";

export default function SingleProject({ title, desc, link }) {
  return (
    <a href={link}>
      <div className="flex mt-3 border-2 flex-col group hover:bg-slate-200 hover:text-black rounded-2xl p-2">
        <p className="text-xl group-hover:text-black">{title}</p>
        <p className="text-sm font-light text-slate-300 group-hover:text-black">
          {desc}
        </p>
      </div>
    </a>
  );
}
