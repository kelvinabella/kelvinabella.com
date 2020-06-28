import React from "react";
import HeadLayout from "./head";
import NavBar from "./nav";
// import styled from "styled-components";
import Footer from "../components/footer";

type Props = {
  siteTitle?: string;
  children: React.ReactNode;
};

export default function Layout({ children, siteTitle }: Props) {
  return (
    <React.Fragment>
      <HeadLayout siteTitle={siteTitle} />
      <NavBar />
      {children}
      <Footer />
    </React.Fragment>
  );
}
