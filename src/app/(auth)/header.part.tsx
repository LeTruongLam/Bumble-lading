import LogoMain from "@/components/atoms/LogoMain";
import Link from "next/link";
import React from "react";

function Header() {
  return (
    <header className="w-full h-[6rem] flex items-center justify-center">
      <Link href="/">
        <LogoMain className="fill-muted-content " />
      </Link>
    </header>
  );
}

export default Header;
