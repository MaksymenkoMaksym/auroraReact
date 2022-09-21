import MenuList from 'components/MenuList/MenuList';
import { DivContainer, MenuContainer } from './Menu.styled';
import Logo from 'components/Logo/Logo';
const menu = [
  "what's new",
  'women',
  'accessories',
  'kids',
  'beauty',
  'outlet',
  'stories',
];

const Menu = () => (
  <DivContainer>
    <MenuContainer>
      <Logo />
      <MenuList menu={menu} />
    </MenuContainer>
  </DivContainer>
);

export default Menu;
