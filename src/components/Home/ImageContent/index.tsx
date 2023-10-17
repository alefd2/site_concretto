import Image from "next/image";
import styled from "styled-components";

export default function ContentPage() {
  return (
    <AboutUsStyled>
      <div className="text">
        <h6>Gestão, rapidez, economia e comunicação para Obras.</h6>
      </div>
      <div className="img-size">
        <img src="/assets/images/rapaz.png" alt="rapaz" />
      </div>
    </AboutUsStyled>
  );
}

export const AboutUsStyled = styled.div`
  height: 295px;
  background: #e4e4e4;

  display: flex;
  align-items: flex-end;
  justify-content: center;

  background-size: cover;
  background: url("/assets/banner/bg_white.png") center/cover no-repeat,
    linear-gradient(90deg, rgba(201, 38, 38, 0.94) -1.84%, #f65c5c 104.71%);

  gap: 30px;

  .img-size {
    display: flex;
    height: 380px;
    width: auto;
    img {
      height: auto;
    }
  }
  .text {
    width: 30%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    h6 {
      color: #fff;
      font-size: 40px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      letter-spacing: 4px;
    }
  }
`;
