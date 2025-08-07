import React from "react";

const LogoSvg = () => {
  return (
    <div className="flex items-center space-x-2 select-none">
      <div className="w-3 h-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full animate-pulse" />
      <h1 className="text-2xl font-extrabold tracking-tight text-gray-900 dark:text-zinc-100">
        Naseems <span className="text-indigo-600 dark:text-purple-400">Travel</span>
      </h1>
    </div>
  );
};

export default LogoSvg;
