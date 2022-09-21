import { Li } from './MenuItem.styled';
const MenuItem = ({ name, subMenuHandler }) => {
  return (
    <Li
      onClick={() => {
        subMenuHandler(name);
      }}
    >
      {name}
    </Li>
  );
};
export default MenuItem;
