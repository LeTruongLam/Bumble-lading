import Image from "next/image";
import React from "react";
import Logo from "@/assets/images/Bumble-Logo-New.png";
import Link from "next/link";
import { headerLinks } from "@/constants";

function Header() {
  return (
    <header className="w-full h-[4.5rem]">
      <div className="container flex items-center justify-between h-full">
        <Link href="/">
          <Image src={Logo} alt="logo" width={175} />
        </Link>
        <nav>
          <ul className="flex items-center gap-6 text-sm font-bumble-medium text-primary-content">
            {headerLinks.map((link) => (
              <li key={link.label}>
                <Link className="hover:underline" href={link.href}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
