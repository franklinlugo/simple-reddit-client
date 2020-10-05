import React from 'react';
import { string, number, shape, arrayOf, func } from 'prop-types';
import {
  Container,
  AutorContainer,
  Author,
  Created,
  ImageContainer,
  Image,
  Title,
  DismissContainer,
  DismissButton,
  Comments,
} from './Post.styles';

function Post({ author, title, created, preview, comments, onDismissPost }) {
  const imageSrc = preview?.images[0].resolutions[0].url;
  return (
    <Container initial={{ opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: '-100%', opacity: 0 }}>
      <AutorContainer>
        <Author>{author.name}</Author>
        <Created>{new Date(created * 1000).toLocaleString()}</Created>
      </AutorContainer>
      <ImageContainer>
        <Image src={imageSrc} />
        <Title>{title}</Title>
      </ImageContainer>
      <DismissContainer>
        <DismissButton onClick={onDismissPost}>Dismiss Post</DismissButton>
        <Comments> {comments.length} Comments</Comments>
      </DismissContainer>
    </Container>
  );
}

Post.propTypes = {
  author: shape({ name: string }),
  title: string,
  created: number,
  preview: shape({ image: arrayOf(shape({})) }),
  comments: arrayOf(shape({})),
  onDismissPost: func,
};

export default Post;
