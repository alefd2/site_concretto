import { styled } from "styled-components";

export const FooterStyled = styled.footer`
  height: auto;
  width: 100%;
  background: #282727;

  display: flex;
  align-items: flex-start;
  flex-direction: column;
  color: white;
  padding: 2.5% 10%;

  .wrapper {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 1300px;
    margin: 0 auto;
    gap: 30px;
  }

  img {
    width: 300px;
    height: auto;
  }

  a {
    color: white;
    text-decoration: none;
    display: block;

    &:hover {
      text-decoration: underline;
    }
  }

  .group-column-header {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    flex-direction: row;

    .social-icons {
      display: flex;
      gap: 20px;
      a {
        svg {
          height: 30px;
          width: auto;
        }
      }
    }
  }

  .group-column {
    display: flex;
    width: 100%;
    justify-content: start;
    flex-direction: row;
  }

  .group-column div {
    font-size: 16px;
    width: max-content;
    margin-bottom: 1.275rem;
    justify-content: flex-start;
    margin-right: 10%;
  }

  .footer-group {
    display: flex;
    width: 100%;
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
    color: #f0f0f0;
    font-size: 16px;
    font-weight: 700;
    margin-bottom: 9px;
  }

  @media (max-width: 1300px) {
    img {
      height: auto;
      width: 200px;
    }
  }

  @media (max-width: 1150px) {
    gap: 2%;
  }

  @media (max-width: 1020px) {
    img {
      height: auto;
      width: 180px;
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
      width: 140px;
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

    .social-icons {
      a {
        svg {
          height: 10px;
          width: auto;
        }
      }
    }

    .group-column {
      width: 100%;
      justify-content: space-between;
    }

    .group-column .footer-group:nth-child(1) {
      width: 100%;
    }

    img {
      height: auto;
      width: 100px;
    }
    flex-direction: column;
    height: max-content;
    gap: 1rem;
  }
`;
