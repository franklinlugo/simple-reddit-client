import React from 'react';
import { Main } from './Layout.styles';
import { PostsList, ActivePost } from '../index';

function Layout() {
  return (
    <Main>
      <PostsList />
      <ActivePost />
    </Main>
  );
}

export default Layout;
