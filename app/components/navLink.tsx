"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type NavLinkProps = {
  name: string;
  link: string;
};

const NavLink = ({ name, link }: NavLinkProps) => {
  const pathname = usePathname();

  return (
    <li className="md:py-0 py-4">
      <Link className={`${pathname === link ? "text-accent" : ""}`} href={link}>
        {name}
      </Link>
    </li>
  );
};

export default NavLink;
