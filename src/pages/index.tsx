import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import styled from "styled-components";
import Header from "@/components/Home/Header/BannerHome";

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
      </HomeStyled>
    </>
  );
}

export const HomeStyled = styled.div`
  width: 100%;
  display: flex;
`;
