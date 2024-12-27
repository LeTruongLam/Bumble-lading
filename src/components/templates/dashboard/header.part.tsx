import LogoMain from "@/components/atoms/LogoMain";
import Link from "next/link";
import React from "react";

function HeaderDashBoard() {
  return (
    <header className="w-full mt-3  h-[3.5rem] flex items-center justify-center">
      <Link href="/">
        <LogoMain className="fill-muted-content" />
      </Link>
    </header>
  );
}

export default HeaderDashBoard;
