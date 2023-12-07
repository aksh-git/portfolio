"use client";

import React from 'react';
import { useRouter } from 'next/navigation';

function ListItem({ children, action, text }) {

  const router = useRouter();

  let actionFN = () => { };
  if (action?.type === "push") {
    actionFN = router.push
  }
  else if (action?.type === "hyperlink") {
    actionFN = router.push
  }
  return (
    <li onClick={() => actionFN(action?.payload, undefined, { shallow: true })} className='flex items-center gap-4 p-2 w-full cursor-pointer hover:-translate-y-1 transition-all duration-200'>
      {children}
      <span className='text-sm hidden md:flex'>{text}</span>
    </li>
  )
}

export default ListItem;