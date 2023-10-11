import Image from "next/image";
import Link from "next/link";
import { FooterStyled } from "./FooterStyled";

export default function Footer() {
  return (
    <FooterStyled>
      <Image
        src="/assets/logo2.png"
        width={199}
        height={141}
        alt="Logotipo Via Clube de Vantagens"
        id="footer-logo"
      />
      <div className="group-column">
        <div className="footer-group space">
          <Link href="/quemSomos">Quem somos</Link>
          <Link href="/lgpd">Política de Privacidade</Link>
          <Link href="/faq">Perguntas Frequentes</Link>
        </div>
        <div className="footer-group space">
          <Link href="/regulamento">Regulamento</Link>
          <Link href="/contato">Contato</Link>
          <Link href="/login">Cadastro</Link>
        </div>
      </div>

      <div className="group-column">
        <div className="footer-group">
          <h6>Endereço</h6>
          <p>
            Av. Carlos Gomes 222, conj. 1001 Boa Vista - Porto Alegre (RS) CEP:
            90480-000
          </p>
        </div>
        <div className="footer-group">
          <h6>SAC</h6>
          <p>0800 740 7819</p>
        </div>
      </div>
    </FooterStyled>
  );
}
