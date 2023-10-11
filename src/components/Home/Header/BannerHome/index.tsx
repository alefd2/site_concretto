import React from "react";
import styled from "styled-components";

const Banner = () => {
  return (
    <BannerContainer>
      <img src="/assets/banner/bg.png" alt="Banner" />
    </BannerContainer>
  );
};

const BannerContainer = styled.div`
  width: 100vw;
  height: 70vh;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top;
  }
`;

export default Banner;
