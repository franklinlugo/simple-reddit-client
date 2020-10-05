import React from 'react';
import { element } from 'prop-types';
import { Main, PostsContainer, ActivePost } from './Layout.styles';
import { Posts } from '../index';

function Layout({ activePost }) {
  return (
    <Main>
      <PostsContainer>
        <Posts />
      </PostsContainer>
      <ActivePost>{activePost}</ActivePost>
    </Main>
  );
}
Layout.propTypes = {
  activePost: element.isRequired,
};

export default Layout;
