import * as React from "react";
import CustomHead from "components/CustomHead";
import Navbar from "components/Navbar";
import Footer from "components/Footer";

type Props = {
  siteTitle?: string;
  children: React.ReactNode;
}

export default function Layout({ children, siteTitle }: Props) {
  return (
    <React.Fragment>
      <CustomHead siteTitle={siteTitle} />
      <div className="-z-10 fixed h-screen w-screen bg-gradient-to-br from-indigo-100 via-white to-cyan-100"></div>
      <Navbar />
      {children}
      <Footer />
    </React.Fragment>
  );
}
