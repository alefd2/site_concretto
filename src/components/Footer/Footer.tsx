import Image from "next/image";
import Link from "next/link";
import { FooterStyled } from "./FooterStyled";
import { BsFacebook, BsInstagram } from "react-icons/bs";

export default function Footer() {
  return (
    <FooterStyled>
      <div className="wrapper">
        <div className="group-column-header">
          <img
            src="/assets/icons/logoWhite.png"
            alt="Logotipo concretto"
            id="footer-logo"
          />

          <div className="social-icons">
            <a href="https://www.instagram.com/concretto.tech/">
              <BsInstagram />
            </a>
            <a href="https://www.facebook.com/concretto.tech">
              <BsFacebook />
            </a>
          </div>
        </div>

        <div className="group-column">
          <div className="footer-group">
            <h6>Endereço</h6>
            <p>Rua Vereador Benno Josão Kist - 206 Sala 03</p>
            <p>Santa Cruz do Sul/RS</p>
            <p>Rua Vereador Benno Josão Kist</p>
          </div>
          <div className="footer-group">
            <h6>Telefone</h6>
            <p>31 2007-9848</p>
          </div>
          <div className="footer-group">
            <h6>
              <a href="#">Sobre a concretto</a>
            </h6>
            <h6>
              <a href="#">Política de privacidade</a>
            </h6>
          </div>
        </div>
      </div>
    </FooterStyled>
  );
}
