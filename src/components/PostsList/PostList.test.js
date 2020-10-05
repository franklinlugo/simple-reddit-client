import React from 'react';
import { screen } from '@testing-library/dom';
import { renderWithProvider } from '../../utils/tests/renderWithProvider';
import PostList from './PostsList';
import { getTopPost as getTopPostMock } from '../../services';
import { postsList } from '../../utils/tests/fixtures';

jest.mock('../../services');

afterAll(() => {
  jest.clearAllMocks();
});

test('PostList should render', async () => {
  getTopPostMock.mockResolvedValueOnce(postsList);
  const { asFragment } = renderWithProvider(<PostList />);
  await screen.findByText('...loading');
  expect(asFragment()).toMatchSnapshot();
});
