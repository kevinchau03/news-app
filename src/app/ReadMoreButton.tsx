"use client";
import React from 'react'
import { useRouter } from 'next/navigation';

type Props = {
  article: DataEntry;
}

function ReadMoreButton({ article }: Props) {
  const router = useRouter();

  const handleClick = () => {
    const queryString = Object.entries(article).map(([key, value]) => `${key}=${value}`).join('&');
    const url = `/article?${queryString}`;
    router.push(url);
  }

  return (
    <button 
    className="hidden md:inline bg-slate-900 text-white text-sm px-2 lg:px-4 py-1 lg:py-2 rounded-full dark:bg-slate-800"
    onClick={handleClick}
    >
        Read More
    </button>
  )
}

export default ReadMoreButton;
