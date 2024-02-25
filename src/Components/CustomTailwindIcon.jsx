// CustomTailwindIcon.js
import React from 'react';

const CustomTailwindIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-8 w-8 text-blue-500" // Adicione a classe de cor diretamente ao SVG
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 7l3-3 3 3M3 13l3 3 3-3M6 10h12M11 21h2M4 18h16" />
    </svg>
  );
};

export default CustomTailwindIcon;
