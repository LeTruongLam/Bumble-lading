import { footerMainLinks, footerSecondaryLinks } from "@/constants";
import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <footer className="container py-[96px] px-[108px] flex  w-full items-end justify-between border-t">
      <nav className="flex flex-col items-start ">
        <ul className="text-lg flex gap-6 font-semibold">
          {footerMainLinks.map((link) => (
            <li key={link.href}>
              <Link className="hover:underline" href={link.href}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <ul className="text-sm flex flex-wrap gap-x-4 gap-y-2 mt-6 font-semibold">
          {footerSecondaryLinks.map((link) => (
            <li key={link.href}>
              <Link className="hover:underline" href={link.href}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="w-full  flex flex-col items-end justify-end">
        <div className="text-xs mt-4">
          Copyright © 2006 – present. Bumble. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
export default Footer;
