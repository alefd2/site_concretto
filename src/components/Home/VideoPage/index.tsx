import Image from "next/image";
import styled from "styled-components";

export default function VideoPage() {
  return (
    <ActionStyled id="baixar">
      <div className="video-container">
        <iframe
          width="958"
          height="532"
          src="https://www.youtube.com/embed/PnW3o3GjvP8"
          title="Concretto - Sistema de Gestão para Obras"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </ActionStyled>
  );
}
export const ActionStyled = styled.div`
  width: 100%;
  height: 100%;
  background: #ffffff;
  text-align: center;

  margin: 20px 0 100px;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;

  iframe {
    aspect-ratio: 16/9;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 14px 28px,
      rgba(0, 0, 0, 0.1) 0px 10px 10px;
    border-radius: 26px;
  }

  .video-container {
    align-items: center;
    justify-content: center;
    display: flex;
  }

  @media (max-width: 1058px) {
    iframe {
      width: 600px;
      height: auto;
      border-radius: 20px;
    }
  }

  @media (max-width: 768px) {
    iframe {
      width: 480px;
      height: auto;
      border-radius: 20px;
    }
  }

  @media (max-width: 546px) {
    iframe {
      width: 380px;
      height: auto;
      border-radius: 20px;
    }
  }

  @media (max-width: 425px) {
    iframe {
      width: 320px;
      height: auto;
    }
  }

  @media (max-width: 320px) {
    iframe {
      width: 300px;
      height: auto;
      border-radius: 8px;
    }
  }
`;
