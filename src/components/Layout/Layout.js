import React from 'react';
import { element } from 'prop-types';
import { Main, ActivePost } from './Layout.styles';
import { PostsList } from '../index';

function Layout({ activePost }) {
  return (
    <Main>
      <PostsList />
      <ActivePost>{activePost}</ActivePost>
    </Main>
  );
}
Layout.propTypes = {
  activePost: element.isRequired,
};

export default Layout;
