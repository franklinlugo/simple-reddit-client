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

function Post({ data, onDismissPost, onSetActivePost }) {
  const { author, title, created, preview, comments } = data;
  const imageSrc = preview?.images[0].resolutions[0].url;

  function handleDismissButton(e) {
    e.stopPropagation();
    onDismissPost();
  }

  return (
    <Container
      initial={{ opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: '-100%', opacity: 0 }}
      onClick={onSetActivePost}
    >
      <AutorContainer>
        <Author>{author.name}</Author>
        <Created>{new Date(created * 1000).toLocaleString()}</Created>
      </AutorContainer>
      <ImageContainer>
        <Image src={imageSrc} />
        <Title>{title}</Title>
      </ImageContainer>
      <DismissContainer>
        <DismissButton onClick={handleDismissButton}>Dismiss Post</DismissButton>
        <Comments> {comments.length} Comments</Comments>
      </DismissContainer>
    </Container>
  );
}

Post.propTypes = {
  data: shape({
    author: shape({ name: string }),
    title: string,
    created: number,
    preview: shape({ image: arrayOf(shape({})) }),
    comments: arrayOf(shape({})),
  }),
  onDismissPost: func,
  onSetActivePost: func,
};

export default Post;
