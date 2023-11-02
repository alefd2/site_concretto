import React from "react";
import styled from "styled-components";
import Navigation from "../../Nav/Navigation";
import Banner from "@/components/Banner";

export default function Header() {
  return (
    <HeaderContentStyled>
      <Banner
        srcImage="assets/banner/bannerhome.png"
        title="Nós revolucionamos a forma de realizar compras e gerenciar obras"
        subtitle="Ela é grátis e cabe na palma da mão. Conheça o App Concretto!"
      />
    </HeaderContentStyled>
  );
}

const HeaderContentStyled = styled.div`
  display: flex;
  align-items: center;
  width: 100vw;
  background-color: transparent;
`;
