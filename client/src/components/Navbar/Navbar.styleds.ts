import { css, styled } from "styled-components";

export const LogoDesktop = styled.img.attrs({
  src: `${process.env.PUBLIC_URL}/images/logo.png`,
})`
  width: 120px;
  @media (max-width: 600px) {
    display: none;
  }
`;

export const LogoMobile = styled.img.attrs({
  src: `${process.env.PUBLIC_URL}/images/favicon.webp`,
})`
  height: 50px;
  padding: 0;
  display: none;
  @media (max-width: 600px) {
    display: block;
  }
  @media (max-width: 400px) {
    display: none;
  }
`;

export const Wrapper = styled.nav`
  z-index: 1;
  width: 100%;
  height: 92px;
  box-shadow: 0px 0px 24px 0px rgba(0, 0, 0, 0.15);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: sticky;
  top: 0;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const List = styled.ul`
  display: inline-flex;
  height: 100%;
  align-items: center;
  gap: 8px;
`;

const isActive = css`
  color: ${({ theme }) => theme.colors.main};
  border-bottom: 3px solid ${({ theme }) => theme.colors.main};
  padding-bottom: 0px;
`;

export const Item = styled.li<{ "data-active": boolean }>`
  color: #54595f;
  font-size: 14px;
  font-weight: 400;
  font-family: "Poppins", Sans-serif;
  line-height: 20px;
  list-style: none;
  height: 100%;
  padding-bottom: 3px;
  padding: 0 20px;

  ${(props) => props["data-active"] && isActive}
  &:hover {
    ${isActive}
  }
  a {
    padding: 0;
    color: inherit;
    text-decoration: none;
    font-family: inherit;
    height: 100%;
    display: inline-flex;
    align-items: center;
  }
`;
