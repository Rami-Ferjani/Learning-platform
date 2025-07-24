import React from "react";
import Link from "next/link";
import Image from "next/image";
const Navbar = () => {
  return (
    <nav className="navbar">
      <Link href="/">
        <div className="flex items-center gap-2 5 cursor-pointer">
          <Image
            src="/image/logo.svg"
            alt="logo"
            width={46}
            height={44}
          ></Image>
        </div>
      </Link>{" "}
    </nav>
  );
};

export default Navbar;
