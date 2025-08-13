import React from "react";
import Image from "next/image";

const Logo = () => {
  return (
    <a href="/" className="inline-block">
      <Image
        src="/images/logo3.png"  
        alt="Logo"
        width={200}             // o'zingizga mos kattalik
        height={80}
        priority               // sahifa tez yuklanishi uchun
      />
    </a>
  );
};

export default Logo;
