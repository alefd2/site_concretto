import React from "react";
import styled from "styled-components";

const Banner = () => {
  return (
    <BannerContainer>
      <img src="assets/banner/bannerhome.png" alt="Banner" />
      <BannerText>
        <h1>
          Nós revolucionamos a forma de realizar compras e gerenciar obras.
        </h1>
        <p>Ela é grátis e cabe na palma da mão. Conheça o App Concretto!</p>
        <div className="button-wrapper-a">
          <a href="#baixar">Saiba mais</a>
        </div>
      </BannerText>
    </BannerContainer>
  );
};

const BannerContainer = styled.div`
  width: 100vw;
  height: 90vh;
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

  /* a:first-child {
    background: transparent;
    border-radius: 50px;
    border: 1px solid #fff;
    padding: 10px 20px;

    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  } */

  a:hover {
    background: #b43030;
    transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);
  }
  a:first-child:hover {
    border: 1px solid #dbdbdb;
    background: #ffffff1c;
    transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);
  }

  @media (max-width: 425px) {
    width: 100vw;
    top: 30%;
    left: 8%;
    text-align: left;

    h1 {
      width: 80%;
      font-size: 25px;
    }

    p {
      width: 80%;
      font-size: 25px;
    }
  }
`;

export default Banner;
