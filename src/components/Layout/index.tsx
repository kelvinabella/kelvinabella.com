import MainHead from "../Head";
import Navbar from "../Navbar";
import Footer from "../Footer";

type Props = {
  siteTitle?: string;
  children: React.ReactNode;
};

export default function Layout({ children, siteTitle }: Props) {
  return (
    <>
      <MainHead siteTitle={siteTitle} />
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
