import Image from "next/image";
import Link from "next/link";
import { FooterStyled } from "./FooterStyled";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import play from "@/assets/images/advantages/play.png";
import apple from "@/assets/images/advantages/apple.png";

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
        </div>

        <div className="group-column">
          <div style={{ width: "60%" }} className="footer-group">
            <h6>Endereço</h6>
            <p>Rua Vereador Benno Josão Kist - 206 Sala 03</p>
            <p>Santa Cruz do Sul/RS</p>
            <p>Rua Vereador Benno Josão Kist</p>
            <div className="social-icons">
              <a href="https://www.instagram.com/concretto.tech/">
                <BsInstagram />
              </a>
              <a href="https://www.facebook.com/concretto.tech">
                <BsFacebook />
              </a>
            </div>
          </div>
          <div style={{ width: "20%" }} className="footer-group">
            <Link href={"/"}>Home</Link>
            <Link href={"/purpose"}>Nosso Propósito</Link>
            <Link href={"/appdonwload"}>Baixe o App</Link>
            <Link href={"/policy"}>Politica de privacidade</Link>
          </div>
          <div style={{ width: "20%" }} className="footer-group">
            <div className="wrapperAction">
              <Link href={"/"}>
                <Image src={apple} alt="apple" />
              </Link>
              <Link
                href={
                  "https://play.google.com/store/apps/details?id=br.com.concrettotech.mobileconcretto"
                }
              >
                <Image src={play} alt="play" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </FooterStyled>
  );
}
