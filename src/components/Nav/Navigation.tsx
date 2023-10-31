import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";

import logo from "../../../public/assets/logo-marca.png";
import { ItensNav } from "./ItensNav";

const Navigation = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <NavContentStyled>
      <ul>
        <div className="branding">
          {isMobile && (
            <li>
              <button onClick={toggleMenu} className="mobile-menu-button">
                icone
              </button>
            </li>
          )}
          <li>
            <Image src={logo} alt="a" />
          </li>
        </div>
        <div className={`nav ${isMobile && menuOpen ? "open" : ""}`}>
          {/* <li>
            <Link href="/#funcionalidades">Funcionalidades</Link>
          </li>
          <li>
            <Link href="/#contato">Contato</Link>
          </li> */}

          {<ItensNav link="/" routeName="Home" />}
          {<ItensNav link="/#us" routeName="Nosso Propósito" />}
          <li>
            <ActionItem href="/#baixar" className="action">
              <Link href="/#baixar">Baixe o App</Link>
            </ActionItem>
          </li>
        </div>
      </ul>
    </NavContentStyled>
  );
};

const NavContentStyled = styled.nav`
  width: 100vw;
  ul {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    height: 100px;
    text-decoration: none;
    list-style-type: none;
    max-width: 1300px;
    border-bottom: 0.4 solid #1f1f1f;
    background-color: transparent;
  }

  .nav {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: end;
    gap: 23px;

    li a {
      width: auto;
      color: #000;
      font-size: 16px;
      font-weight: 700;
      line-height: normal;
    }

    li a:hover {
      width: auto;
      color: #ff3334;
      transition: 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
    }
  }

  li {
    color: #460606;
  }

  a {
    text-decoration: none;
    color: #750707;
  }

  .mobile-menu-button {
    background: none;
    border: none;
    font-size: 24px;
    color: #fff;
  }

  .nav.open {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 100px;
    left: 0;
    background: #333;
    width: 100%;
  }

  .nav.open li {
    padding: 10px;
  }

  .nav.open a {
    color: #fff;
  }
`;

const ActionItem = styled.a`
  display: flex;
  width: 100%;
  padding: 12px 22px;
  justify-content: flex-end;
  background: var(--main-700, #f24041);
  border-radius: 24px;
  align-items: center;
  gap: 10px;
  cursor: pointer;

  a {
    color: #fff !important;
    font-size: 16px;
    font-weight: 700;
    line-height: normal;
    text-decoration: none;
  }

  &:hover {
    color: #e43333 !important;
    background-color: #af0e0e;
    transition: 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
  }
`;

export default Navigation;
