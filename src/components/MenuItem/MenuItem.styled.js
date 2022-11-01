import styled from 'styled-components';
import chevronright from '../../img/icons/chevronright.svg';

export const Li = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 17px 16px 14px;
  font-weight: 600;
  font-size: 11px;
  line-height: 16px;
  letter-spacing: 1.2px;
  text-transform: uppercase;
  border-bottom: 1px solid #f7f7f7;

  &::after {
    content: '';
    display: block;
    height: 13px;
    width: 8px;
    background-image: url(${chevronright});
    background-position: center;
  }
`;
