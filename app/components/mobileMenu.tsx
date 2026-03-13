"use client";

import { useEffect, useState, startTransition } from "react";
import { usePathname } from "next/navigation";
import { Bars3Icon } from "@heroicons/react/24/solid";

import { MenuLink } from "./header";
import NavLink from "./navLink";

type MobileMenuProps = {
  menuLinks: MenuLink[];
};

const MobileMenu = ({ menuLinks }: MobileMenuProps) => {
  const [isOpen, setIsOpen] = useState(true);
  const pathname = usePathname();
  const handleMenuClick = () => {
    console.log("menu Clicked");
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    startTransition(() => {
      setIsOpen(false);
    });
  }, [pathname]);

  return (
    <div className="md:hidden relative">
      <button
        className="btn btn-secondary text-accent"
        onClick={handleMenuClick}
      >
        <span className="sr-only">Open main menu</span>
        <Bars3Icon className="w-8 h-8" />
      </button>
      <nav
        className={`z-40 card w-40 h-auto absolute right-4 bg-primary shadow-lg p-4 ${isOpen ? "block" : "hidden"}`}
      >
        <ul>
          {menuLinks.map(({ name, link }) => (
            <NavLink key={name} name={name} link={link} />
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default MobileMenu;
