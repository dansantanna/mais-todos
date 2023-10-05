import * as S from "./Navbar.styleds";

export interface NavbarProps {
  currentRoute?: string;
  items: {
    text: string;
    route: string;
  }[];
}

const Navbar = ({ items, currentRoute }: NavbarProps) => {
  const currentBrowserRoute = window.location.pathname;
  const current = currentRoute ?? currentBrowserRoute;

  return (
    <S.Wrapper>
      <S.LogoMobile />
      <S.LogoDesktop />
      <S.List>
        {items.map((item) => (
          <S.Item
            aria-label={item.text}
            data-active={current === item.route}
            key={item.route}
          >
            <a href={item.route}>{item.text}</a>
          </S.Item>
        ))}
      </S.List>
    </S.Wrapper>
  );
};

export default Navbar;
