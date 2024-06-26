import { links } from "@/lib/data";
import React from "react";
import NavLink from "../header/nav-link";
import H3 from "../H3";

const QuickLinks = () => {
  return (
    <div>
      <H3>Quick Links</H3>
      <ul className="space-y-4">
        {links.map((link, index) => (
          <li key={index}>
            <NavLink href={link.href} label={link.label}>
              {link.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuickLinks;
