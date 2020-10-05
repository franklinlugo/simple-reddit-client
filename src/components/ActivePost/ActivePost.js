import React from 'react';
import { useSelector } from 'react-redux';
import { Container, Title, Image } from './ActivePost.styles';

function ActivePost() {
  const post = useSelector((state) => state.activePost);
  const imageSrc = post?.preview?.images[0].resolutions[0].url;

  return (
    <Container>
      {post && Object.keys(post).length && (
        <>
          <Title>{post.title}</Title>
          <Image src={imageSrc} />
        </>
      )}
    </Container>
  );
}

export default ActivePost;
