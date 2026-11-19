export interface NavLink {
  name: string;
  href: string;
  external?: boolean;
}

export const NAV_LINKS: NavLink[] = [
  { name: "Homepage", href: "/" },
  { name: "About Me", href: "/about-me" },
  { name: "Keynote Talks", href: "/keynote-talks" },
  {
    name: "Future of Work",
    href: "https://www.bath.ac.uk/research-centres/future-of-work-fow-research-centre/",
    external: true,
  },
  { name: "Publications", href: "/publications" },
  { name: "Opinions", href: "/opinions" },
  { name: "Contact", href: "/contact" },
];
