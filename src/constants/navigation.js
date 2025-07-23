// src/constants/navigationLinks.js və ya src/data/navigationLinks.js kimi yerləşdirə bilərsən

import { FaHome, FaEnvelope, FaInfoCircle } from "react-icons/fa";

export const navigationLinks = [
  {
    id: 0,
    title: "Home",
    href: "/",
    icon: FaHome  },
  {
    id: 1,
    title: "About",
    href: "/About_Page",
    icon:FaInfoCircle,
  },
  {
    id: 2,
    title: "Contact",
    href: "/Contact_Page",
    icon: FaEnvelope,
  },
];
