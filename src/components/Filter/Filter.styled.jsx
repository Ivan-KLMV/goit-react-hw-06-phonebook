import styled from 'styled-components';

export const FilterStyled = styled.label`
  display: flex;
  width: fit-content;
  flex-direction: column;
  margin-bottom: 30px;

  font-size: 18px;
  font-weight: 500;

  & > input {
    padding: 4px;
    margin-top: 5px;
    border: 1px solid darkgray;
    border-radius: 2px;
  }
`;
