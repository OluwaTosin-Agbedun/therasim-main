import { Path } from "@/navigations/routes";
import { SideNavLinkProps } from "../components/header/mobileNavigation/sideNavLink";

export const navLinks: SideNavLinkProps[] = [
  {
    label: "Home",
    link: Path.Home,
  },
  {
    label: "About",
    link: Path.About,
  },
  {
    label: "Solutions",
    link: Path.Solutions,
  },
  {
    label: "Our Partners",
    link: "#",
  },
  {
    label: "Research Studies",
    link: "#",
  },
  {
    label: "Help/FAQ",
    link: "#",
  },
  {
     label: "Who We Serve",
     link: Path.WhoWeServe
  },
  {
    label: "Contact Us",
    link: Path.ContactUs,
  },
];
