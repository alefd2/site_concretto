import { StaticImageData } from "next/image";
import React, { HTMLAttributes } from "react";
import styled from "styled-components";

type Props = HTMLAttributes<HTMLDivElement> & {
  srcImage: string;
  title?: string;
  subtitle?: string;
  isCenter?: boolean;
  hasRemmoveButton?: boolean;
};

const Banner = ({
  srcImage,
  title,
  subtitle,
  isCenter = false,
  hasRemmoveButton = false,
  ...props
}: Props) => {
  return (
    <BannerContainer src={srcImage} {...props}>
      <div className="wrapper">
        <BannerText isCenter={isCenter}>
          <h1>{title}</h1>
          <p> {subtitle}</p>

          {!hasRemmoveButton && (
            <div className="button-wrapper-a">
              <a href="#baixar">Saiba mais</a>
            </div>
          )}
        </BannerText>
      </div>
    </BannerContainer>
  );
};

interface ImageProps {
  src: string;
  isCenter?: boolean;
}

interface TextProps {
  isCenter?: boolean;
}

const BannerContainer = styled.div<ImageProps>`
  width: 100vw;
  height: 90vh;
  background-image: linear-gradient(to left, transparent, rgba(0, 0, 0, 0.2)),
    url(${(props) => props.src});
  background-size: cover;
  background-position: 40%;
  background-repeat: no-repeat;

  div.wrapper {
    display: flex;
    height: 100%;
    width: 100%;

    max-width: 1400px;
    padding: 0 20px;
    margin: 0 auto;
  }

  @media (max-width: 425px) {
    height: 560px;
  }
`;

const BannerText = styled.div<TextProps>`
  display: flex;
  height: 100%;
  width: ${(props) => (props.isCenter ? "100%" : "45%")};

  flex-direction: column;
  align-items: ${(props) => (props.isCenter ? "center" : "baseline")};
  justify-content: center;
  h1 {
    color: #fff;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    font-family: Poppins;
    font-size: 36px;
    font-style: normal;
    font-weight: 900;
    line-height: 150%;
    text-transform: uppercase;
    margin-bottom: 15px;
  }

  p {
    color: #fff;
    font-family: Poppins;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    margin-bottom: 15px;
  }
  .button-wrapper-a {
    display: flex;
    gap: 20px;
  }
  a {
    background: #f24041;
    border-radius: 50px;
    padding: 10px 20px;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  a:hover {
    background: #b43030;
    transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);
  }
  a:first-child:hover {
    border: 1px solid #dbdbdb;
    background: #ffffff1c;
    transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);
  }

  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;

    h1 {
      font-size: 30px;
    }

    p {
      width: 80%;
      font-size: 18px;
    }
  }

  @media (max-width: 425px) {
    h1 {
      font-size: 22px;
    }

    p {
      font-size: 14px;
    }

    a {
      background: #f24041;
      border-radius: 6px;
      padding: 6px 10px;
      font-size: 14px;
    }
  }
`;

export default Banner;
