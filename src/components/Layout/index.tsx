import { ReactNode, useEffect, useState } from "react";
import Head from "next/head";

import { useRouter } from "next/router";
import Footer from "../Footer/Footer";
import Header from "../Home/Header";
import Navigation from "../Nav/Navigation";

function Layout({ children }: { children: ReactNode }) {
  const [isMobile, setIsMobile] = useState(false);

  const router = useRouter();

  //   useEffect(() => {
  //     const handleResize = () => {
  //       setIsMobile(window.innerWidth <= 1024);
  //     };

  //     handleResize();
  //     window.addEventListener("resize", handleResize);

  //     return () => window.removeEventListener("resize", handleResize);
  //   }, []);

  const currentURL = router.asPath;

  const isNotMobbileCartFooter = () => {
    if (currentURL == "/carrinho" && isMobile == true) {
      return true;
    }
    return false;
  };

  return (
    <>
      <Head>
        <link rel="icon" href="/assets/logo1.png" />
        <title>Concretto Tecnologia</title>
      </Head>
      <Navigation />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default Layout;
