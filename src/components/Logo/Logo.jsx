import { LogoMenu, LogoLink } from './Logo.syled';
import icons from '../../img/icons.svg';
const Logo = () => (
  <LogoLink href="#logo">
    <LogoMenu width="104" height="20">
      <use href={`${icons}#icon-logo`}></use>
    </LogoMenu>
  </LogoLink>
);

export default Logo;
