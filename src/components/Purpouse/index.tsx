import styled from "styled-components";
import Banner from "@/components/Banner";
import { HTMLAttributes } from "react";
import Image from "next/image";

type Props = HTMLAttributes<HTMLDivElement> & {
  srcImage: string;
  title?: string;
};

export const Purpose = ({ srcImage, title }: Props) => {
  return (
    <WrapperPageStyled>
      <Banner
        style={{ height: "400px" }}
        srcImage="assets/banner/purpose/banner.png"
        hasRemmoveButton
        isCenter={true}
        title="NOSSO PROPÓSITO"
      />
      <div className="wrapper-content">
        <div className="wrapper-title">
          <h1>Existimos para transformar</h1>
          <h1 className="secondh1">a experiência de quem constrói</h1>
        </div>
        <BackgroundWithImage
          isLeft={false}
          src={"assets/images/purpose/imag1.png"}
        >
          <div className="wrapper-text">
            <p>
              <span>
                Acreditamos que uma obra é a realização de um sonho, a
                concretização de um projeto.
              </span>
            </p>
          </div>
        </BackgroundWithImage>
        <BackgroundWithImage
          isLeft
          style={{ height: "700px", backgroundColor: "#fff" }}
          src={"assets/images/purpose/imag2.png"}
        >
          <div className="wrapper-text">
            <p>
              Existimos para
              <b> transformar a experiência de quem constrói</b>, somos
              obstinados por
              <b> produtividade, simplicidade e economia</b> e acreditamos que
              estes elementos não podem faltar em uma<b> obra</b>.
            </p>
          </div>
        </BackgroundWithImage>

        <div className="wrapperB">
          <div className="wrapper2">
            <div className="um">
              <p>
                Fazemos isto através do desenvolvimento de tecnologia de ponta
                para <b> quem vive o dia a dia da construção civil.</b>
              </p>
            </div>
            <div className="dois">
              <img alt="a" src={"assets/images/purpose/imag3.png"} />
            </div>
          </div>
        </div>
      </div>
    </WrapperPageStyled>
  );
};

const WrapperPageStyled = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;

  .wrapper-content {
    width: 100vw;
    .wrapper-title {
      margin: 70px 0;
      h1 {
        max-width: 800px;
        margin: 0 auto;
        color: var(--black, #000);
        text-align: center;
        font-family: Poppins;
        font-size: 26px;
        font-style: normal;
        font-weight: 900;
        line-height: 150%;
        text-transform: uppercase;
      }

      h1.secondh1 {
        color: #ff3334;
      }
    }

    .wrapperB {
      display: flex;
      flex-direction: row;
      height: 400px;
      width: 100%;
      background-color: #484646;
      padding: 0 20px;
      justify-content: center;
    }

    .wrapper2 {
      display: flex;
      flex-direction: row;
      max-width: 1400px;
      height: 400px;

      .um {
        width: 50%;
        display: flex;
        align-items: center;

        p {
          color: #fff;
          font-family: Poppins;
          font-size: 26px;
          font-style: normal;
          font-weight: 400;
          line-height: 150%;
        }
      }
      .dois {
        display: flex;
        align-items: flex-end;
        justify-content: center;
        width: 50%;
      }

      @media (max-width: 425px) {
        .dois img {
          width: 300px;
          margin-left: 160px;
        }
      }

      @media (max-width: 425px) {
        .dois img {
          width: 300px;
          margin-left: 260px;
        }
      }
    }
  }
`;

interface ImageProps {
  src: string;
  isLeft: boolean;
}

export const BackgroundWithImage = styled.div<ImageProps>`
  width: 100%;
  background-color: #484646;
  padding: 20px 20px;
  display: flex;
  width: 100%;
  height: 400px;
  align-items: center;
  justify-content: left;

  background-image: url(${(props) => props.src});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  .wrapper-text {
    display: flex;
    width: 100vw;
    max-width: 1400px;
    margin: 0 auto;
    align-items: end;
    justify-content: ${(props) => (props.isLeft ? "flex-end" : "flex-start")};

    p {
      max-width: 400px;
      color: ${(props) => (props.isLeft ? "#000" : "#fff")};
      text-align: ${(props) => (props.isLeft ? "right" : "left")};
      font-family: Poppins;
      font-size: 26px;
      font-style: normal;
      line-height: 150%;
    }
  }

  @media (max-width: 425px) {
    background-position: 50% 0;
  }
`;
