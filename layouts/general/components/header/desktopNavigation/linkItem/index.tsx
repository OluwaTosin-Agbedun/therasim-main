import Typography from "@/components/common/typography";
import Link, { LinkProps } from "next/link";
import React from "react";

export interface LinkItemProps extends LinkProps {
  label: string;
}

const LinkItem = ({ label, ...linkProps }: LinkItemProps) => {
  return (
    <Link
      {...linkProps}
      className="group relative hover:text-primary-dark duration-200"
    >
      <Typography className="font-semibold">{label}</Typography>
      <span className="absolute bottom-0 left-0 w-0 duration-200 group-hover:w-[60%] h-[2px] bg-primary-dark block" />
    </Link>
  );
};

export default LinkItem;
