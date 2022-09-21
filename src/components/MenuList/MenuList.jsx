import MenuItem from 'components/MenuItem/MenuItem';

const MenuList = ({ menu = [], subMenuHandler }) =>
  menu.map(el => (
    <MenuItem key={`${el}`} name={el} subMenuHandler={subMenuHandler} />
  ));
export default MenuList;
