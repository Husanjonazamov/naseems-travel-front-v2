import React from "react";
import Image from "next/image";

const LogoShar = () => {
  return (
    <a href="/" className="inline-block overflow-hidden">
      <Image
        src="/images/logo3.png"
        alt="Logo"
        width={200}
        height={80}
        priority
        className="w-32 h-auto sm:w-40 md:w-48 lg:w-52 
                   object-cover
                   sm:object-contain
                   sm:object-center
                   object-[ -100px_0] sm:object-[center]" 
      />
    </a>
  );
};

export default LogoShar;
