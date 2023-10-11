import React from "react";
import styled from "styled-components";
import Navigation from "../../Nav/Navigation";
import Banner from "./BannerHome";

export default function Header() {
  return (
    <HeaderContentStyled>
      <Navigation />
      <Banner /> {/* Adicione o componente de banner aqui */}
    </HeaderContentStyled>
  );
}

const HeaderContentStyled = styled.div`
  display: flex;
  align-items: center;
  width: 100vw;
  height: 50vh;
  background-color: transparent;
`;
