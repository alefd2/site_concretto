import Head from "next/head";
import Image from "next/image";
import { Content, Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import styled from "styled-components";
import Header from "@/components/Home/Header/BannerHome";
import AboutUs from "@/components/Home/AboutUs";
import ContentPage from "@/components/Home/ImageContent";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Concretto</title>
        <meta name="description" content="Concretto tecnologia" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomeStyled>
        <Header />
        <AboutUs />
        <ContentPage />
      </HomeStyled>
    </>
  );
}

export const HomeStyled = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
