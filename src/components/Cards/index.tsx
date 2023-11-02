import styled from "styled-components";
import { HTMLAttributes } from "react";
import Image from "next/image";

type ImageProps = HTMLAttributes<HTMLDivElement> & {
  srcImg: string;
  title: string;
  text: string;
};

export const CardsCuston = ({ srcImg, title, text, ...props }: ImageProps) => {
  return (
    <CardWrapper {...props}>
      <ImageWrapper>
        <Image src={srcImg} alt="icons" />
      </ImageWrapper>
      <ContentWrapper>
        <strong>{title}</strong>
        <p>{text}</p>
      </ContentWrapper>
    </CardWrapper>
  );
};

const CardWrapper = styled.div`
  display: flex;
  height: 200px;
  padding: 30px;
  border-radius: 25px;
  align-items: center;
  gap: 28px;
  margin-bottom: 30px;
  flex-basis: 100%;
  max-width: 500px;

  transition: 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);

  &:hover {
    box-shadow: 2px 4px 45px -4px rgba(255, 144, 144, 0.75);
    -webkit-box-shadow: 2px 4px 45px -4px rgba(255, 144, 144, 0.75);
    -moz-box-shadow: 2px 4px 45px -4px rgba(255, 144, 144, 0.75);
  }

  @media (max-width: 425px) {
    strong {
      color: #fff;
      font-size: 16px;
    }
  }
`;

const ImageWrapper = styled.div`
  @media (max-width: 425px) {
    img {
      width: 40px;
      font-size: 16px;
    }
  }
`;

const ContentWrapper = styled.aside`
  width: auto;
`;
