import React, { ReactNode } from "react";
import Header from "./components/header";
import Footer from "./components/footer";

interface Props {
  children?: ReactNode;
}

const GeneralLayout = ({ children }: Props) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default GeneralLayout;
