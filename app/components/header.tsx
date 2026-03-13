import Link from "next/link";
import MobileMenu from "./mobileMenu";
import NavLink from "./navLink";

export type MenuLink = { name: string; link: string };

const menuLinks: MenuLink[] = [
  {
    name: "About",
    link: "/about",
  },
  {
    name: "Contact",
    link: "/contact",
  },
];

const Header = () => {
  return (
    <header className="shadow">
      <div className="container flex justify-between px-4 py-6">
        <h3>
          <Link href="/">The Embodiment Playground</Link>
        </h3>
        <nav className="hidden md:block">
          <ul className="flex items-center gap-6">
            {menuLinks.map(({ name, link }: MenuLink) => (
              <NavLink key={name} name={name} link={link} />
            ))}
          </ul>
        </nav>
        <MobileMenu menuLinks={menuLinks} />
      </div>
    </header>
  );
};

export default Header;
