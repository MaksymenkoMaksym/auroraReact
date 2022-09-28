import MenuItem from 'components/MenuItem/MenuItem';

const MenuList = ({ menu = [], subMenuHandler, priority }) =>
  menu.map(el => {
    return <MenuItem key={`${el}`} name={el} subMenuHandler={subMenuHandler} />;
  });
export default MenuList;
