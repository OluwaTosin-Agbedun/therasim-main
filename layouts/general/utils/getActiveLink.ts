import { Path } from "@/navigations/routes";

export const getActiveLink = (
  link: string | undefined,
  pathname: string | undefined | null
) => {
  if (!link || !pathname) return false;
  if (link === Path.Home) return link === pathname;

  return pathname.includes(link);
};
