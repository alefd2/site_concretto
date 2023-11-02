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
    <NavContainer>
      <NavContentStyled>
        <div className="branding">
          {isMobile && (
            <MobileMenuButton onClick={toggleMenu}>
              <span>☰</span>
            </MobileMenuButton>
          )}
          <LogoContainer>
            <Image src={logo} alt="Logo" />
          </LogoContainer>
        </div>
        {isMobile && menuOpen && (
          <MobileMenu>
            {isMobile && (
              <div className="wrapper_menu_mobile">
                <MobileMenuButton onClick={toggleMenu}>
                  <span>x</span>
                </MobileMenuButton>
                <p>Menu</p>
              </div>
            )}
            <ItensNav toggleMenu={toggleMenu} link="/" routeName="Home" />
            <ItensNav
              toggleMenu={toggleMenu}
              link="/#us"
              routeName="Nosso Propósito"
            />
            <li onClick={toggleMenu} className="action">
              <Link href="/#baixar">Baixe o App</Link>
            </li>
          </MobileMenu>
        )}
        {!isMobile && (
          <DesktopMenu>
            <ItensNav toggleMenu={toggleMenu} link="/" routeName="Home" />
            <ItensNav
              toggleMenu={toggleMenu}
              link="/#us"
              routeName="Nosso Propósito"
            />
            <li onClick={toggleMenu} className="action">
              <Link href="/#baixar">Baixe o App</Link>
            </li>
          </DesktopMenu>
        )}
      </NavContentStyled>
    </NavContainer>
  );
};

const NavContainer = styled.div`
  background: #fff;
`;

const NavContentStyled = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  max-width: 1400px;
  margin: 0 auto;

  .wrapper_menu_mobile {
    width: 100%;
    color: transparent;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  @media (max-width: 768px) {
    .branding {
      width: 100%;
      display: flex;
      flex-direction: row-reverse;
      justify-content: space-between;
    }
  }
`;

const MobileMenuButton = styled.button`
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;

  span {
    display: block;
    color: #000;
  }
`;

const LogoContainer = styled.div``;

const MobileMenu = styled.div`
  position: fixed;
  width: 80%;
  top: 0px;
  right: 0;
  height: 100%;
  background: rgb(255, 255, 255);
  z-index: 1000;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border-radius: 20px 0 0 20px;

  display: flex;
  gap: 10px;

  box-shadow: -15px -1px 32px 6px rgba(0, 0, 0, 0.26);
  -webkit-box-shadow: -15px -1px 32px 6px rgba(0, 0, 0, 0.26);
  -moz-box-shadow: -15px -1px 32px 6px rgba(0, 0, 0, 0.26);

  li {
    list-style: none;
    color: #000;
    padding: 10px 5px;
    font-weight: 700;
    border-radius: 8px;
    width: 100%;
    background-color: #dddddd4e;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.6s cubic-bezier(0.075, 0.82, 0.165, 1);
  }

  li:active,
  li:hover {
    background-color: #7c0e0e4e;
    cursor: pointer;
  }

  li:last-child {
    border: none;
    background-color: transparent;
  }

  li.action a {
    color: #fff;
    display: flex;
    width: 100%;
    padding: 10px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    font-weight: 600;
    border-radius: 8px;
    background: #ff3334;
    border: none;
    transition: 0.6s cubic-bezier(0.075, 0.82, 0.165, 1);
  }

  li.action a:hover {
    color: #fff;
    background: #911a1a;
  }

  @media (min-width: 769px) {
    display: none;
  }
`;

const DesktopMenu = styled.div`
  display: flex;
  gap: 40px;
  align-items: center;

  li {
    color: #000;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-decoration: none;
    list-style: none;
    transition: 0.6s cubic-bezier(0.075, 0.82, 0.165, 1);
  }

  li:hover {
    color: #ff3334;
  }

  li.action a {
    color: #fff;
    display: flex;
    width: 186px;
    padding: 10px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 20px;
    background: #ff3334;
    transition: 0.6s cubic-bezier(0.075, 0.82, 0.165, 1);
  }

  li.action a:hover {
    color: #fff;
    background: #911a1a;
  }
`;

export default Navigation;
