import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
  position: fixed;
  top: 0;
  width: calc(100% - 500px);
  height: 100%;
  margin-left: 500px;
`;

export const Title = styled.h3`
  margin: 1rem;
  padding: 0;
  line-height: 1;
  text-align: center;
  color: ${(props) => props.theme.darkgray};
`;

export const Image = styled.img`
  display: block;
  margin: 0 auto;
`;
