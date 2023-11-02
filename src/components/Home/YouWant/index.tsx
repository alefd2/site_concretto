import { ButtonCuston } from "@/components/Button";
import Image from "next/image";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import styled from "styled-components";

export default function YouWant() {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  return (
    <WrapperContainer src={"assets/images/home/phones.jpg"} isMobile={isMobile}>
      <h1>
        Tudo que você precisa para gerenciar sua obra, em um só lugar.
        <br />
        <span>De graça e fácil de usar.</span>
      </h1>
      <SectionContent src={"assets/images/home/phones.jpg"}>
        <div className="sectionContent">
          <p>
            Economize tempo e dinheiro, gerencie custos, materiais e o time que
            está trabalhando.
            <br />
            <span>Seja o dono do cronograma da sua obra.</span>
          </p>
          <ButtonCuston
            target="_blank"
            srcLink="https://play.google.com/store/apps/details?id=br.com.concrettotech.mobileconcretto&hl=pt_BR&gl=US"
            key={"asdfasd"}
            title="Baixe Agora"
          />
        </div>
        <div className="sectionImage" />
      </SectionContent>
    </WrapperContainer>
  );
}

interface Props {
  src?: string;
  isMobile?: boolean;
}
const WrapperContainer = styled.section<Props>`
  height: 100%;
  width: 100%;
  margin: 100px 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: baseline;

  h1 {
    color: #000;
    max-width: 800px;
    text-align: center;
    font-size: 35px;
    font-style: normal;
    font-family: Poppins;
    font-weight: 900;
    line-height: 150%;
    text-transform: uppercase;
    span {
      color: #ff3334;
    }
    margin-bottom: 80px;
  }

  @media (max-width: 768px) {
    h1 {
      padding: 0 10px;
      font-size: 20px;
    }
  }
`;

const SectionContent = styled.aside<Props>`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  max-width: 1400px;
  .sectionContent {
    width: 50%;
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-items: center;
    padding: 0px 20px;

    gap: 40px;
    p {
      font-family: Poppins;
      font-size: 20px;
      font-style: normal;
      font-weight: 400;
      line-height: 150%;
      color: #000;

      span {
        color: #000;
        font-family: Poppins;
        font-weight: 700;
      }
    }

    @media (max-width: 425px) {
      background-image: linear-gradient(
          to left,
          rgba(221, 221, 221, 0.836),
          rgba(221, 221, 221, 0.836)
        ),
        url(${(props) => props.src});
      background-size: 500px;
      background-repeat: no-repeat;
      background-position: 20%;

      padding: 40px 20px;
    }
  }

  .sectionImage {
    width: 100%;
    height: 355px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0px 20px;
    background-image: url(${(props) => props.src});
    background-size: 500px;
    background-repeat: no-repeat;
    background-position: 40%;
  }

  @media (max-width: 425px) {
    .sectionImage {
      display: none;
    }
  }
`;
