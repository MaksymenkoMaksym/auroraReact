import { useState } from 'react';
import Menu from './Menu/Menu';
export const App = () => {
  const [value, setValue] = useState(0);
  console.log(value);
  return (
    <div
      style={
        {
          // height: '100vh',
          // display: 'flex',
          // justifyContent: 'center',
          // alignItems: 'center',
          // fontSize: 40,
          // color: '#010101',
        }
      }
    >
      <Menu />
    </div>
  );
};
