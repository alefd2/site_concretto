import Image from "next/image";
import styled from "styled-components";

export default function ActionPage() {
  return (
    <ActionStyled id="baixar">
      <h6>Baixe grátis</h6>
      <p>
        Crie a sua conta gratuitamente agora e começe a descomplicar a sua obra!
      </p>
      <div className="wrapper-row">
        <div className="image-wrapper">
          <img src="/assets/images/celular.png" alt="" />
        </div>
        <div className="column-1">
          <div className="playstore">
            <a
              target="_blank"
              href="https://play.google.com/store/apps/details?id=br.com.concrettotech.mobileconcretto&hl=pt_BR&gl=US"
            >
              <img src="/assets/icons/playstore.png" alt="" />
            </a>
          </div>
          <h3>A solução certa para a sua obra</h3>
          <p>
            Não importa se você é um construtor experiente ou alguém que está
            apenas começando no mundo da construção, a Concretto está aqui para
            ajudar a tornar sua obra mais fácil e bem-sucedida.
          </p>
        </div>
      </div>
      <section id="video">
        <div className="container">
          <div className="video-container">
            <iframe
              width="1236"
              height="695"
              src="https://www.youtube.com/embed/PnW3o3GjvP8"
              title="Concretto - Sistema de Gestão para Obras"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>
    </ActionStyled>
  );
}
export const ActionStyled = styled.div`
  height: auto;
  width: 100%;
  background: #ffffff;
  text-align: center;

  align-items: center;
  justify-content: center;
  padding: 100px 0;

  p {
    margin: 10px 0;
    color: #464646;
  }

  .playstore img {
    width: 150px;
    height: auto;
    border: 0.5px solid #2b282881;
    border-radius: 10px;
    padding: 10px;
  }

  .wrapper-row {
    display: flex;
    max-width: 1300px;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    margin-top: 80px;
    gap: 30px;

    .image-wrapper img {
      width: auto;
      height: 400px;
    }

    .column-1 {
      display: flex;
      flex-direction: column;
      align-items: start;
      gap: 20px;

      p {
        text-align: left;
      }
    }
  }

  h3 {
    color: #f24041;
  }

  h6 {
    color: #2b2828;
    text-align: center;
    font-size: 46px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  .column-1 p {
    max-width: 600px;
    color: #000;
    text-align: center;
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 2.2px;
  }

  #video {
    margin-top: 180px;
    display: flex;
    justify-content: center;
    width: 100%;

    iframe {
      width: 900px;
      height: 500px;
      box-shadow: rgba(0, 0, 0, 0.1) 0px 14px 28px,
        rgba(0, 0, 0, 0.1) 0px 10px 10px;
      border-radius: 26px;
    }
  }

  .video-container {
    align-items: center;
    justify-content: center;
    display: flex;
  }

  @media (max-width: 320px) {
    iframe {
      width: auto;
      height: auto;
      box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
        rgba(0, 0, 0, 0.22) 0px 10px 10px;
      border-radius: 8px;
    }
  }
`;
