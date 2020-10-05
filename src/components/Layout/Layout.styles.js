import styled from 'styled-components';

export const Main = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
`;

export const PostsContainer = styled.div`
  width: 500px;
  background-color: ${(props) => props.theme.darkgray};
  border-right: 1px solid ${(props) => props.theme.red};
`;

export const ActivePost = styled.div`
  flex: 1;
`;
