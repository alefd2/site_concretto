import Image from "next/image";
import styled from "styled-components";
import {
  FaClock,
  FaExchangeAlt,
  FaBuilding,
  FaUsers,
  FaWallet,
  FaCog,
  FaFileDownload,
  FaCreditCard,
  FaArrowRight,
  FaComment,
  FaBell,
  FaWhatsapp,
} from "react-icons/fa";

import alarm from "../../../../public/assets/icons/advantages/alarm.svg";
import check from "../../../../public/assets/icons/advantages/check.svg";
import credentials from "../../../../public/assets/icons/advantages/credentials.svg";
import currency_exchange from "../../../../public/assets/icons/advantages/currency_exchange.svg";
import date from "../../../../public/assets/icons/advantages/date.svg";
import economy from "../../../../public/assets/icons/advantages/economy.svg";
import house from "../../../../public/assets/icons/advantages/house.svg";
import image from "../../../../public/assets/icons/advantages/image.svg";
import late from "../../../../public/assets/icons/advantages/late.svg";
import market from "../../../../public/assets/icons/advantages/market.svg";
import money from "../../../../public/assets/icons/advantages/money.svg";
import person from "../../../../public/assets/icons/advantages/person.svg";
import doc from "../../../../public/assets/icons/advantages/doc.svg";
import read from "../../../../public/assets/icons/advantages/read.svg";
import tag from "../../../../public/assets/icons/advantages/tag.svg";
import taskChek from "../../../../public/assets/icons/advantages/taskChek.svg";
import apple from "../../../../public/assets/images/advantages/apple.png";
import play from "../../../../public/assets/images/advantages/play.png";
import Link from "next/link";

export default function AdvantagesPage() {
  return (
    <AdvantagesStyled id="functions">
      <div className="container">
        <h2>Pare de estourar o orçamento e perder os prazos em sua obra.</h2>
        <p>Conheça as principais soluções.</p>
        <div className="all-card">
          <div className="item_">
            <Image src={tag} alt="icon" />
            <p>Orce materiais com múltiplos fornecedores.</p>
          </div>
          <div className="item_">
            <Image src={read} alt="read" />
            <p>Crie seu diário de Obra.</p>
          </div>
          <div className="item_">
            <Image src={late} alt="late" />
            <p>Agende pagamentos futuros ou parcelados.</p>
          </div>
          <div className="item_">
            <Image src={money} alt="money" />
            <p>Realize seu orçamento da obra.</p>
          </div>
          <div className="item_">
            <Image src={market} alt="market" />
            <p>Compare preços de fornecedores.</p>
          </div>
          <div className="item_">
            <Image src={taskChek} alt="taskChek" />
            <p>Realize inspeções na obra.</p>
          </div>
          <div className="item_">
            <Image src={economy} alt="economy" />
            <p>Gerencie os custos da obra.</p>
          </div>
          <div className="item_">
            <Image src={currency_exchange} alt="currency_exchange" />
            <p>Acompanhe O QUE FOI orçado x realizado.</p>
          </div>
          <div className="item_">
            <Image src={house} alt="house" />
            <p>Gerencie as etapas da obra.</p>
          </div>
          <div className="item_">
            <Image src={image} alt="image" />
            <p>Anexe fotos e arquivos.</p>
          </div>
          <div className="item_">
            <Image src={doc} alt="doc" />
            <p>Arquive NFs e Comprovantes.</p>
          </div>
          <div className="item_">
            <Image src={date} alt="date" />
            <p>Acompanhe o cronograma da obra.</p>
          </div>

          <div className="item_">
            <Image src={credentials} alt="credentials" />
            <p>Gerencie as tarefas da sua equipe.</p>
          </div>
          <div className="item_">
            <Image src={check} alt="check" />
            <p>Acompanhe entregas de materiais.</p>
          </div>
          <div className="item_">
            <Image src={person} alt="person" />
            <p>Centralize a comunicação dos envolvidos na obra.</p>
          </div>
          <div className="item_">
            <Image src={alarm} alt="alarm" />
            <p>Receba notificações do andamento da obra.</p>
          </div>
        </div>

        <div className="wrapperAction">
          <Link href={"/"}>
            <Image src={apple} alt="apple" />
          </Link>
          <Link href={"/"}>
            <Image src={play} alt="play" />
          </Link>
        </div>
      </div>
    </AdvantagesStyled>
  );
}

const AdvantagesStyled = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 100px 0;
  width: 100vw;
  height: auto;

  .container {
    max-width: 1300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    padding: 0px 40px;
  }

  h2 {
    max-width: 800px;
    color: var(--black, #000);
    text-align: center;
    font-family: Poppins;
    font-size: 36px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%;
    text-transform: uppercase;
  }
  p {
    color: #000;
    text-align: center;
    font-family: Poppins;
    font-size: 26px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    margin-bottom: 100px;
  }

  .all-card {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    justify-content: center;
    align-items: center;
    color: #f1f1f1;
    gap: 40px;

    margin-bottom: 60px;
  }

  .all-card p {
    color: var(--black, #000);
    font-family: Poppins;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 108.023%;
    text-transform: uppercase;
    text-align: left;
    margin: 0 !important;
  }

  .item_ {
    height: 50px;
    align-items: center;
    color: #f1f1f1;
    gap: 10px;
    display: flex;
    align-items: center;
    padding: 20px;

    border-radius: 10px;

    transition: 1.2s cubic-bezier(0.075, 0.82, 0.165, 1);

    svg {
      height: 50px;
      width: auto;
    }
  }

  .item_:hover {
    box-shadow: 2px 4px 45px -4px rgba(204, 204, 204, 0.6);
    -webkit-box-shadow: 2px 4px 45px -4px rgba(204, 204, 204, 0.6);
    -moz-box-shadow: 2px 4px 45px -4px rgba(204, 204, 204, 0.6);
  }

  @media (max-width: 1047px) {
    .all-card {
      grid-template-columns: repeat(3, 1fr);
      font-size: 10px !important;
    }
  }

  @media (max-width: 807px) {
    .all-card {
      grid-template-columns: repeat(2, 1fr);
      font-size: 10px !important;
    }
  }

  @media (max-width: 425px) {
    h2 {
      font-size: 20px;
    }
    p {
      font-size: 14px;
    }
    .all-card {
      grid-template-columns: repeat(2, 1fr);
      padding: 4px;
      p {
        font-size: 12px;
      }
    }

    .item_ {
      padding: 2px;
    }
  }

  @media (max-width: 320px) {
    .all-card {
      grid-template-columns: repeat(2, 1fr);
    }
  }
`;
