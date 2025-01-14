import React from "react";

export default function BackButton() {
  return (
    <button className="flex items-center text-white mb-7">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="mr-2 w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
      </svg>
      <span className="text-sm sm:text-base lg:text-lg">Kembali</span>
    </button>
  );
}
