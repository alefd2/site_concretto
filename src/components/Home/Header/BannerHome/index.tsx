import React from "react";
import styled from "styled-components";

const Banner = () => {
  return (
    <BannerContainer>
      <img src="/assets/banner/bg.png" alt="Banner" />
      <BannerText>
        <h1>
          Nós revolucionamos a forma de realizar compras e gerenciar obras.
        </h1>
        <div className="button-wrapper-a">
          <a href="#">Ver vídeo</a>
          <a href="#">Criar conta grátis</a>
        </div>
      </BannerText>
    </BannerContainer>
  );
};

const BannerContainer = styled.div`
  width: 100vw;
  height: 80vh;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top;
  }
`;

const BannerText = styled.div`
  position: absolute;
  top: 30%;
  left: 17%;
  text-align: left;
  width: 30%;

  h1 {
    font-size: 2.5rem;
    color: #fff;
    margin-bottom: 10px;
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

  a:first-child {
    background: transparent;
    border-radius: 50px;
    border: 1px solid #fff;
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

export default Banner;
