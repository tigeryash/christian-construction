import Nav from "./nav";
import HeaderContainer from "./header-container";
import Logo from "../logo";

const Header = () => {
  return (
    <HeaderContainer>
      <Logo />
      <Nav />
    </HeaderContainer>
  );
};

export default Header;
