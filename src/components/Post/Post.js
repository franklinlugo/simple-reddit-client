import React from 'react';
import { string, number, shape, array, arrayOf, instanceOf } from 'prop-types';
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

function Post({ id, author, title, created, preview, comments }) {
  const imageSrc = preview?.images[0].resolutions[0].url;
  return (
    <Container>
      <AutorContainer>
        <Author>{author.name}</Author>
        <Created>{new Date(created * 1000).toLocaleString()}</Created>
      </AutorContainer>
      <ImageContainer>
        <Image src={imageSrc} />
        <Title>{title}</Title>
      </ImageContainer>
      <DismissContainer>
        <DismissButton>Dismiss Post</DismissButton>
        <Comments> {comments.length} Comments</Comments>
      </DismissContainer>
    </Container>
  );
}

Post.propTypes = {
  id: string,
  author: shape({ name: string }),
  title: string,
  created: number,
  preview: shape({ image: arrayOf(shape({})) }),
  comments: arrayOf(shape({})),
};

export default Post;
