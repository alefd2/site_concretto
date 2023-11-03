import styled from "styled-components";
import Banner from "../Banner";
import Link from "next/link";
import apple from "../../../public/assets/images/advantages/apple.png";
import play from "../../../public/assets/images/advantages/play.png";
import Image from "next/image";

export const AppDownload = () => {
  return (
    <WrapperPageStyled>
      <Banner
        style={{ height: "500px" }}
        srcImage="assets/banner/download/banner.png"
        hasRemmoveButton
        isCenter={true}
        title="E ai, ESTÁ pronto para
        DESCOMPLICAR a sua obra?"
      />

      <BgImage src="assets/images/download/imge.png">
        <div className="wrapper2">
          <div className="um">
            <p>
              <b>
                Baixe o App Concreto agora e comece a economizar tempo e
                dinheiro na sua obra.
              </b>
            </p>
          </div>
        </div>
      </BgImage>

      <div className="wrapperAction">
        <Link href={"/"}>
          <Image src={apple} alt="apple" />
        </Link>
        <Link
          href={
            "https://play.google.com/store/apps/details?id=br.com.concrettotech.mobileconcretto&hl=pt_BR&gl=US"
          }
        >
          <Image src={play} alt="play" />
        </Link>
      </div>
    </WrapperPageStyled>
  );
};

const WrapperPageStyled = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;

  .wrapperAction {
    display: flex;
    justify-content: center;
    align-items: center;

    margin: 100px 0;
  }

  @media (max-width: 425px) {
    img {
      width: 140px;
      height: auto;
    }
  }
`;

interface ImageProps {
  src: string;
}

const BgImage = styled.div<ImageProps>`
  background-image: url(${(props) => props.src});
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: row;
  height: 600px;
  width: 100%;
  padding: 0 20px;
  justify-content: center;
  align-items: center;

  .wrapper2 {
    display: flex;
    flex-direction: row;
    max-width: 1400px;
    height: 400px;

    .um {
      width: 50%;
      display: flex;
      align-items: center;

      p {
        color: #fff;
        font-family: Poppins;
        font-size: 26px;
        font-style: normal;
        font-weight: 400;
        line-height: 150%;
      }
    }

    @media (max-width: 768px) {
      .um {
        width: 100%;
      }
    }
  }
`;
