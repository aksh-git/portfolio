import React from "react";

export default function GroupLabel({ children , tag}) {
  return (
    <div className="relative box w-full md:w-max md:max-w-[250px] border-2 border-primary rounded-xl space-y-2">
        <div className="absolute t-0 px-2 p-[2px] bg-primary/90 backdrop-blur-sm rounded-tl-lg rounded-br-lg text-xs font-semibold">
            {tag}
        </div>
      {children}
    </div>
  );
}
 