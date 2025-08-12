import React from "react";
import Image from "next/image";

const Logo = () => {
  return (
    <a href="/" className="inline-block">
      <Image
        src="/images/logo.png"  
        alt="Logo"
        width={120}             // o'zingizga mos kattalik
        height={40}
        priority               // sahifa tez yuklanishi uchun
      />
    </a>
  );
};

export default Logo;
