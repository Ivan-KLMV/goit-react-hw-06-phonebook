import styled from 'styled-components';

export const ContactListStyled = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;

  list-style: inside;
  font-weight: 500;
  font-size: 18px;
  letter-spacing: 0.04em;

  & > li {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;

    &::before {
      content: '';
      display: block;
      align-self: center;
      width: 6px;
      height: 6px;
      background: black;
      border-radius: 50%;
    }
  }

  & > li > button {
    width: fit-content;
    padding: 2px 6px;
    padding-bottom: 0;

    background-color: white;
    border: 1px solid darkgray;
    border-radius: 4px;
    box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.1215686275),
      0px 1px 2px 0px rgba(0, 0, 0, 0.0784313725);
    text-transform: capitalize;
    font-family: inherit;
    letter-spacing: normal;

    font-weight: 500;

    &:hover {
      cursor: pointer;
    }
    &:active {
      box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.0384313725);
      background-color: whitesmoke;
    }
  }

  & > li > span {
    /* margin-left: 5px;
    margin-right: 15px; */
  }
`;
