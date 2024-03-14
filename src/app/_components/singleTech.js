import React from "react";
import Image from "next/image";
export default function SingleTech({ name, src }) {
  return (
    <div className="flex flex-col mt-3 p-3 border-2 items-center rounded-xl">
      <Image width={24} height={24} className="w-auto h-16" src={src} />
      <p className="text-base text-center mt-1">{name}</p>
    </div>
  );
}
