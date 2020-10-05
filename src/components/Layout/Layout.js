import React from 'react';
import { element } from 'prop-types';
import { Main, Posts, ActivePost } from './Layout.styles';

function Layout({ posts, activePost }) {
  return (
    <Main>
      <Posts>{posts}</Posts>
      <ActivePost>{activePost}</ActivePost>
    </Main>
  );
}
Layout.propTypes = {
  posts: element.isRequired,
  activePost: element.isRequired,
};

export default Layout;
