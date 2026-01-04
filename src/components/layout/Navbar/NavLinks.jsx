"use client";

import { navLinks } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavLinks = () => {
  const pathName = usePathname();

  const isActive = (path) => pathName.startsWith(path);
  return navLinks.map((item) => (
    <li
      key={item.label}
      className={`${isActive(item.href) ? "text-primary" : "text-black"} font-medium text-sm`}
    >
      <Link href={item.href}>{item.label}</Link>
    </li>
  ));
};

export default NavLinks;
