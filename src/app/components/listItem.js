"use client";

import React from "react";
import Link from "next/link";

function ListItem({ children, action, text }) {
  return (
    <Link href={action?.payload}>
      <li
        className="flex items-center gap-4 p-2 w-full cursor-pointer hover:-translate-y-1 transition-all duration-200"
      >
        {children}
        <span className="text-sm hidden md:flex">{text}</span>
      </li>
    </Link>
  );
}

export default ListItem;
