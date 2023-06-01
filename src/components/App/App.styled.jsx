import styled from 'styled-components';

export const AppContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  margin-top: 40px;
  padding: 0 10px;

  & > h1 {
    margin-bottom: 20px;
    text-transform: uppercase;
  }

  & > h2 {
    margin-bottom: 20px;
    text-transform: capitalize;
  }
`;
