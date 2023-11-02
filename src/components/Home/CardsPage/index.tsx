import Image from "next/image";
import { HTMLAttributes } from "react";
import styled from "styled-components";

import empresa from "../../../../public/assets/icons/home/empresa.svg";
import list from "../../../../public/assets/icons/home/list.svg";
import obra from "../../../../public/assets/icons/home/obra.svg";
import person from "../../../../public/assets/icons/home/person.svg";
import { CardsCuston } from "@/components/Cards";

export default function ContentPage() {
  return (
    <AboutUsStyled>
      <h2>
        O App Concretto foi feito para todos que constroem e querem mais
        previsibilidades e economia, não importa o tamanho da sua obra.
      </h2>

      <div className="wrappper-cards">
        <CardsCuston
          style={{ background: "#FF3334" }}
          srcImg={person}
          title="Para quem vai gerenciar sozinho"
          text="Solução para aqueles que vão cuidar sozinhos da sua obra, sem
        a administração de um profissional."
        />
        <CardsCuston
          style={{ background: "#fff", color: "#484646" }}
          srcImg={obra}
          title="Para profissionais"
          text="O App Concretto chegou para facilitar
        e aprimorar a gestão de obras
        dos profissionais da construção civil."
        />
        <CardsCuston
          style={{ background: "#FF3334" }}
          srcImg={list}
          title="Para quem quer acompanhar
          todos os passos"
          text="Para quem conta com o acompanhamento
          de profissionais, mas não abre mão
          de estar informado sobre cada etapa."
        />
        <CardsCuston
          style={{ background: "#fff", color: "#484646" }}
          srcImg={empresa}
          title="Para empresas"
          text="Construtoras e incorporadoras podem
        contar com um App que traz praticidade
        e mobilidade para gerir todas as obras."
        />
      </div>
    </AboutUsStyled>
  );
}

const AboutUsStyled = styled.div`
  height: auto;
  padding: 100px 20px;
  background: #484646;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 80px;

  h2 {
    color: #fff;
    text-align: center;
    font-family: Poppins;
    font-size: 36px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%;
    max-width: 1000px;
  }

  .wrappper-cards {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    max-width: 1200px;
    gap: 30px;
  }

  @media (max-width: 425px) {
    h2 {
      color: #fff;
      font-size: 20px;
    }
  }
`;
