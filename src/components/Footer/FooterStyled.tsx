import { styled } from "styled-components";

export const FooterStyled = styled.footer`
  height: auto;
  width: 100%;
  background: #222b56;

  display: flex;
  align-items: flex-start;
  justify-content: start;
  color: white;
  padding: 2.5% 10%;
  gap: 8%;

  a {
    color: white;
    text-decoration: none;
    display: block;

    &:hover {
      text-decoration: underline;
    }
  }

  .group-column {
    width: fit-content;
    display: flex;
    flex-direction: row;
  }

  .group-column div {
    font-size: 16px;
    width: max-content;
    margin-bottom: 1.275rem;
    justify-content: flex-start;
    margin-right: 36px;
  }

  .group-column .space:nth-child(-n + 2) {
    gap: 10px;
  }

  .footer-group {
    display: flex;
    flex-direction: column;
    max-width: 252px;
    height: 100%;
    width: max-content;
  }

  a {
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 0em;
    text-align: left;
  }

  h6 {
    color: #edf901;
    font-size: 16px;
    font-weight: 700;
    margin-bottom: 9px;
  }

  @media (max-width: 1300px) {
    img {
      height: auto;
      width: 100px;
    }
  }

  @media (max-width: 1150px) {
    gap: 2%;
  }

  @media (max-width: 1020px) {
    img {
      height: auto;
      width: 100px;
    }

    .group-column div a {
      margin-bottom: 0.875rem;
    }

    .group-column:nth-child(3) {
      flex-direction: column;
    }
  }

  @media (max-width: 882px) {
    img {
      height: auto;
      width: 100px;
    }

    .group-column div a {
      margin-bottom: 0.875rem;
    }

    .group-column {
      flex-direction: column;
    }
  }

  @media (max-width: 694px) {
    padding: 5% 10%;
    font-size: 12px;
    justify-content: space-between;

    .group-column {
      flex-direction: row;

      width: 100%;
      justify-content: space-between;
    }

    .group-column:nth-child(3) {
      flex-direction: row;
    }

    .group-column .footer-group:nth-child(1) {
      width: 60%;
    }

    img {
      height: auto;
      width: 60px;
    }
    flex-direction: column;
    height: max-content;
    gap: 1rem;
  }
`;
