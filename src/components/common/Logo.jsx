import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link href="/" className="flex gap-2 items-center">
      <Image src="/assets/logo.png" alt="Hero kidz" width={50} height={40} />
      <h2 className="font-poppins text-xl font-bold">
        Hero <span className="text-primary">Kidz</span>
      </h2>
    </Link>
  );
};

export default Logo;
