import Image from "next/image";
import styled from "styled-components";

export default function AboutUs() {
  return (
    <AboutUsStyled>
      <div>
        <Image
          src="/assets/icons/icon.png"
          height={100}
          width={100}
          alt="logo"
        />
      </div>
      <h6>O que é a concretto ?</h6>
      <p>
        A Concretto é um aplicativo criado para tornar a sua obra mais simples e
        eficiente. Com a Concretto, você pode gerenciar todos os aspectos do seu
        projeto de construção de forma fácil e conveniente.
      </p>
    </AboutUsStyled>
  );
}
export const AboutUsStyled = styled.div`
  height: 600px;
  background: #e4e4e4;

  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 100px 0;

  background-image: url("/assets/images/background.png");
  background-repeat: no-repeat;
  background-size: cover;

  gap: 30px;

  h6 {
    color: #2b2828;
    text-align: center;
    font-size: 31px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 4px;
  }

  p {
    color: #000;
    text-align: center;
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 2.2px;
    max-width: 1300px;
  }
`;
