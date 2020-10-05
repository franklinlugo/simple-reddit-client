import React from 'react';
import ActivePost from './ActivePost';
import { renderWithProvider } from '../../utils/tests/renderWithProvider';
import { postsList } from '../../utils/tests/fixtures';
import { setActivePost } from '../../redux/actions';

test('ActivePost should render', async () => {
  const { asFragment } = renderWithProvider(<ActivePost />, {
    onPrepareStore: (store) => store.dispatch(setActivePost(postsList[0])),
  });
  expect(asFragment()).toMatchSnapshot();
});
