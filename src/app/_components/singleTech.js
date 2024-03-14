import React from "react";
import Image from "next/image";
export default function SingleTech({ name, src }) {
  return (
    <div className="flex flex-col mt-3 p-3 border-2 items-center rounded-xl">
      <img className="w-auto h-8 md:h-16" src={src} />
      <p className="text-base text-center mt-1">{name}</p>
    </div>
  );
}
