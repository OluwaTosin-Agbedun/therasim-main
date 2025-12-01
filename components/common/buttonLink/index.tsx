import React, { ReactNode } from "react";
import Link, { LinkProps } from "next/link";
import cs from "classnames";
import { BtnRadiusType, BtnSizeType, BtnVariantType } from "../button";

interface Props extends LinkProps {
  variant?: BtnVariantType;
  loading?: boolean;
  label: string;
  disabled?: boolean;
  fullWidth?: boolean;
  radius?: BtnRadiusType;
  size?: BtnSizeType;
  className?: string;
  icon?: ReactNode;
  iconRight?: ReactNode;
  ariaLabel?: string;
  dataCy?: string;
}

const ButtonLink = ({
  className,
  fullWidth,
  disabled,
  loading,
  variant = "primary",
  size = "normal",
  label,
  radius = "full",
  icon,
  iconRight,
  ariaLabel,
  dataCy,
  ...props
}: Props) => {
  return (
    <Link
      data-cy={dataCy}
      className={cs(
        "flex items-center gap-2 overflow-hidden relative group justify-center font-semibold hover:bg-opacity-[90%] text-center duration-150",
        {
          [`${className}`]: className,
          "bg-primary text-white border shadow-md shadow-primary/60 border-primary focus:outline-[2px] focus:outline-offset-[1px] focus:outline-primary/60":
            variant === "primary",
          "bg-neutral-black text-white border shadow-md shadow-neutral-black/60 border-neutral-black focus:outline-[2px] focus:outline-offset-[1px] focus:outline-neutral-black/60":
            variant === "dark",
          "py-[14px] px-[30px] text-[18px]": size === "large",
          "py-[10px] px-[25px]": size === "normal",
          "py-[8px] px-[20px] text-[14px]": size === "small",
          "py-[5px] px-[16px] text-[12px]": size === "x-small",
          "w-full block": fullWidth,
          "opacity-[70%] cursor-not-allowed": disabled || loading,
          "rounded-lg": radius === "normal",
          "rounded-full": radius === "full",
          "rounded-br-3xl": radius === "bottom-right",
        }
      )}
      {...props}
    >
      {/* <div
        className={cs({
          "absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_left,#FFFFFF,#26BAC5)] opacity-0 group-hover:opacity-100 duration-500":
            variant === "primary-gradient",
        })}
      />
      <div
        className={cs({
          "absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,#FFFFFF,#26BAC5)] group-hover:opacity-0 duration-500":
            variant === "primary-gradient",
        })}
      /> */}
      <div className="relative">
        {icon}
        {loading && "Loading..."}
        {ariaLabel && <span className="sr-only">{ariaLabel}</span>}
        {!loading && label}
        {iconRight}
      </div>
    </Link>
  );
};

export default ButtonLink;
