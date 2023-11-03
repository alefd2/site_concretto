import Head from "next/head";
import Image from "next/image";
import { Content, Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import styled from "styled-components";
import VideoPage from "@/components/Home/VideoPage";
import AdvantagesPage from "@/components/Home/AdvantagesPage";
import Header from "@/components/Home/Header";
import YouWant from "@/components/Home/YouWant";
import ContentPage from "@/components/Home/CardsPage";

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
      <PageWrapperStyled>
        <Header />
        <YouWant />
        <VideoPage />
        <ContentPage />
        <AdvantagesPage />
      </PageWrapperStyled>
    </>
  );
}

export const PageWrapperStyled = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
