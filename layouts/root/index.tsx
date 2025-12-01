import React, { ReactNode } from "react";
import { toastConfig } from "react-simple-toasts";
import GeneralLayout from "../general";

import "react-simple-toasts/dist/style.css";
import "react-simple-toasts/dist/theme/dark.css";
import "react-simple-toasts/dist/theme/failure.css";
import "react-simple-toasts/dist/theme/success.css";

interface Props {
  children?: ReactNode;
}

toastConfig({
  theme: "dark",
});

const RootLayoutInner = ({ children }: Props) => {
  return <GeneralLayout>{children}</GeneralLayout>;
};

export default RootLayoutInner;
