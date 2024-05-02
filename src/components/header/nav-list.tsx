import { links } from "@/lib/constants";
import NavLink from "./nav-link";

const NavList = () => {
  return (
    <ul className="hidden md:flex gap-10 text-center justify-center">
      {links.map((link) => (
        <li key={link.href}>
          <NavLink href={link.href}>{link.label}</NavLink>
        </li>
      ))}
    </ul>
  );
};

export default NavList;
