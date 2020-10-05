import styled from 'styled-components';

export const Container = styled.div`
  width: 500px;
  background-color: ${(props) => props.theme.darkgray};
  border-right: 1px solid ${(props) => props.theme.red};
`;

export const Loading = styled.p`
  color: ${(props) => props.theme.white};
`;
export const Error = styled.p`
  color: ${(props) => props.theme.white};
`;
