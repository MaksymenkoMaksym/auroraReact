import { useState } from 'react';
import MenuList from 'components/MenuList/MenuList';
import { DivContainer, MenuContainer } from './Menu.styled';
import Logo from 'components/Logo/Logo';

const catalog = {
  mainMenu: [
    "what's new",
    'women',
    'accessories',
    'kids',
    'beauty',
    'outlet',
    'stories',
  ],
  women: ['clothing', 'collections', 'collabs', 'brands'],
  clothing: [
    'T-shirts',
    'Sweatshirts',
    'Knitwear',
    'Jeans',
    'Jumpsuits',
    'Skirts',
    'Dresses',
  ],
};

const Menu = () => {
  const [value, setValue] = useState(catalog.mainMenu);
  const [priority] = useState([]);

  const subMenuHandler = value => {
    setValue((value = catalog[value]));
    return 555;
  };
  return (
    <DivContainer>
      <MenuContainer>
        <Logo />
        <MenuList
          menu={value}
          subMenuHandler={subMenuHandler}
          priority={priority}
        />
      </MenuContainer>
    </DivContainer>
  );
};

export default Menu;
