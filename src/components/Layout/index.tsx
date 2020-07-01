import React from "react";
import HeadLayout from "../Head";
import NavBar from "../Navbar";
// import styled from "styled-components";
import Footer from "../Footer";

type Props = {
  siteTitle?: string;
  children: React.ReactNode;
};

export default function Layout({ children, siteTitle }: Props) {
  return (
    <>
      <HeadLayout siteTitle={siteTitle} />
      <NavBar />
      {children}
      <Footer />
    </>
  );
}
