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

export default function AdvantagesPage() {
  return (
    <AdvantagesStyled>
      <section id="functions">
        <div className="container">
          <h2>COMO A CONCRETTO VAI FAZER A DIFERENÇA EM SUA OBRA?</h2>
          <div className="all-card">
            <div className="item_" data-aos="fade-up" data-aos-delay="100">
              <FaClock className="ph-2x" style={{ color: "#F24041" }} />
              <p>
                Confeccione orçamentos <br /> com agilidade.
              </p>
            </div>
            <div className="item_" data-aos="fade-up" data-aos-delay="100">
              <FaExchangeAlt className="ph-2x" style={{ color: "#F24041" }} />
              <p>Orce com múltiplos fornecedores.</p>
            </div>
            <div className="item_" data-aos="fade-up" data-aos-delay="100">
              <FaBuilding className="ph-2x" style={{ color: "#F24041" }} />
              <p>Negocie de forma dinâmica e automatizada.</p>
            </div>
            <div className="item_" data-aos="fade-up" data-aos-delay="100">
              <FaUsers className="ph-2x" style={{ color: "#F24041" }} />
              <p>Compare preços de fornecedores.</p>
            </div>
            <div className="item_" data-aos="fade-up" data-aos-delay="100">
              <FaWallet className="ph-2x" style={{ color: "#F24041" }} />
              <p>Decida pelo melhor custo-benefício.</p>
            </div>
            <div className="item_" data-aos="fade-up" data-aos-delay="100">
              <FaCog className="ph-2x" style={{ color: "#F24041" }} />
              <p>Gerencie os custos da obra.</p>
            </div>
            <div className="item_" data-aos="fade-up" data-aos-delay="100">
              <FaFileDownload className="ph-2x" style={{ color: "#F24041" }} />
              <p>Salve notas fiscais com segurança.</p>
            </div>
            <div className="item_" data-aos="fade-up" data-aos-delay="100">
              <FaCreditCard className="ph-2x" style={{ color: "#F24041" }} />
              <p>Agende pagamentos futuros ou parcelados.</p>
            </div>
            <div className="item_" data-aos="fade-up" data-aos-delay="100">
              <FaArrowRight className="ph-2x" style={{ color: "#F24041" }} />
              <p>Crie e acompanhe ações.</p>
            </div>
            <div className="item_" data-aos="fade-up" data-aos-delay="100">
              <FaComment className="ph-2x" style={{ color: "#F24041" }} />
              <p>Centralize a comunicação com envolvidos na obra.</p>
            </div>
            <div className="item_" data-aos="fade-up" data-aos-delay="100">
              <FaBell className="ph-2x" style={{ color: "#F24041" }} />
              <p>Receba notificações do andamento da obra.</p>
            </div>
            <div className="item_" data-aos="fade-up" data-aos-delay="100">
              <FaWhatsapp className="ph-2x" style={{ color: "#F24041" }} />
              <p>Integre a gestão com automação via Whatsapp.</p>
            </div>
          </div>
        </div>
      </section>
    </AdvantagesStyled>
  );
}

export const AdvantagesStyled = styled.div`
  height: 295px;
  background: #e4e4e4;

  display: flex;
  align-items: center;
  justify-content: center;

  #functions {
    padding: 100px 0;
    width: 100vw;
    height: auto;
    background: #262626;

    .container {
      max-width: 1300px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin: 0 auto;
      padding: 0px 40px;
    }
  }

  #functions h2 {
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin-bottom: 40px;
    color: #f1f1f1;
  }

  #functions .all-card {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    justify-content: center;
    justify-items: stretch;

    align-items: center;
    color: #f1f1f1;
    gap: 40px;
  }

  #functions .item_ {
    align-items: center;
    color: #f1f1f1;
    gap: 10px;
    display: flex;
    align-items: center;

    svg {
      height: 40px;
      width: auto;
    }
  }

  #functions .icons-content p {
    color: #f1f1f1;
    text-transform: uppercase;
    font-size: 12px !important;
  }

  @media (max-width: 767px) {
    #functions .all-card {
      grid-template-columns: repeat(3, 1fr);
      font-size: 10px !important;
    }
  }

  @media (max-width: 320px) {
    #functions .all-card {
      grid-template-columns: repeat(2, 1fr);
      font-size: 10px !important;
    }
  }
`;
