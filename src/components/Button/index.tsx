import Link from "next/link";
import { AnchorHTMLAttributes } from "react";
import styled from "styled-components";

type IPropsButon = AnchorHTMLAttributes<HTMLAnchorElement> & {
  title: string;
  srcLink: string;
};

export const ButtonCuston = ({ title, srcLink, ...props }: IPropsButon) => {
  return (
    <ButtonWrapper>
      <Link href={srcLink} {...props}>
        {title}
      </Link>
    </ButtonWrapper>
  );
};

const ButtonWrapper = styled.div`
  width: 100%;
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
`;
