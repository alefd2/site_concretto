import Image from "next/image";
import styled from "styled-components";

export default function ContentPage() {
  return (
    <AboutUsStyled>
      <h6>Gestão, rapidez, economia e comunicação para Obras.</h6>
      <div>
        <Image
          src="/assets/images/rapaz.png"
          height={100}
          width={100}
          alt="rapaz"
        />
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

  background-repeat: no-repeat;
  background-size: cover;

  background: linear-gradient(
    90deg,
    rgba(201, 38, 38, 0.94) -1.84%,
    #f65c5c 104.71%
  );

  gap: 30px;

  img {
    height: 350px;
    width: auto;
  }
`;
