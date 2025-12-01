import Typography from "@/components/common/typography";
import Link from "next/link";
import React, { HTMLAttributeAnchorTarget, ReactNode } from "react";

interface IFooterColumnLinks {
  label: ReactNode;
  path: string;
  target?: HTMLAttributeAnchorTarget;
}

export interface FooterColumnProps {
  header: string;
  links: IFooterColumnLinks[];
}

const FooterColumn = ({ header, links = [] }: FooterColumnProps) => {
  return (
    <div className="flex-1">
      <Typography variant="heading-5" className="font-bold mb-3">
        {header}
      </Typography>
      <div className="flex flex-col gap-5">
        {links.map((item, index) => (
          <Link
            key={index}
            className="w-max font-medium"
            target=""
            href={item.path}
          >
            <Typography as="div">{item.label}</Typography>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FooterColumn;
