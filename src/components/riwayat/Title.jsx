import React from "react";

export default function Title({ text }) {
  return (
    <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-6">
      {text}
    </h1>
  );
}
