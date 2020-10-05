import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled(motion.div)`
  width: 100%;
  background-color: ${(props) => props.theme.darkgray};
  color: ${(props) => props.theme.white};
  padding: 1rem;
  border-bottom: 1px solid ${(props) => props.theme.red};
`;

export const AutorContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, min-content);
  align-items: center;
  column-gap: 1rem;
`;

export const Author = styled.h3`
  margin: 0;
  padding: 0;
  line-height: 1;
  color: ${(props) => props.theme.white};
  white-space: nowrap;
`;

export const Created = styled.h5`
  margin: 1rem 0;
  color: ${(props) => props.theme.white}60;
  white-space: nowrap;
`;

export const ImageContainer = styled.div`
  display: grid;
  grid-template-columns: 100px 1fr;
  align-items: center;
  column-gap: 1rem;
  margin-top: 1rem;
`;

export const Image = styled.img`
  width: 100px;
  height: 100px;
`;

export const Title = styled.p`
  margin: 0;
  padding: 0;
  line-height: 1;
  color: ${(props) => props.theme.white};
`;

export const DismissContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, min-content);
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
`;

export const DismissButton = styled.button`
  display: grid;
  grid-template-columns: repeat(2, min-content);
  white-space: nowrap;
  color: ${(props) => props.theme.red};
  border: 1px solid ${(props) => props.theme.red};
  cursor: pointer;
`;

export const Comments = styled.span`
  white-space: nowrap;
`;
