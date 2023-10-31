import Head from "next/head";
import Image from "next/image";
import { Content, Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import styled from "styled-components";
import Header from "@/components/Home/Header/BannerHome";
import AboutUs from "@/components/Home/AboutUs";
import ContentPage from "@/components/Home/ImageContent";
import ActionPage from "@/components/Home/Action";
import AdvantagesPage from "@/components/Home/AdvantagesPage";
import CarrouselResponsible from "@/components/BackgroundSlider/CarrouselResponsible";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const dataCarrousel = [
    {
      link: "#planos1",
      alt: "First slide",
      title: "A revolução na gestão <br /> de obras chegou.",
      subtitle:
        "Ela é grátis e cabe na palma da mão. <br /> Conheça o App Concretto!",
      buttonText: "Saiba Mais",
      url: "meuplano/",
      imgWeb: "assets/banner/bannerhome.png",
      imgUrlmobile: "assets/banner/bannerhome.png",
      isVideo: false,
      // eslint-disable-next-line no-undef
    },
  ];
  return (
    <>
      <Head>
        <title>Concretto</title>
        <meta name="description" content="Concretto tecnologia" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomeStyled>
        {/* <CarrouselResponsible data={dataCarrousel} /> */}

        <Header />
        <AboutUs />
        <ContentPage />
        <ActionPage />
        <AdvantagesPage />
      </HomeStyled>
    </>
  );
}

export const HomeStyled = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
