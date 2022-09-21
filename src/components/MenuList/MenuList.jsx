import MenuItem from 'components/MenuItem/MenuItem';

const MenuList = ({ menu = [] }) =>
  menu.map(el => <MenuItem key={`${el}`} name={el} />);
export default MenuList;
