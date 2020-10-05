import React from 'react';
import { screen } from '@testing-library/react';
import App from './App';
import { renderWithProvider } from './utils/tests/renderWithProvider';
import { getTopPost as getTopPostMock } from './services';
import { postsList } from './utils/tests/fixtures';

jest.mock('./services');

afterAll(() => {
  jest.clearAllMocks();
});

test('App render', async () => {
  getTopPostMock.mockResolvedValueOnce(postsList);
  const { asFragment } = renderWithProvider(<App />);
  await screen.findByText('111 title');
  expect(asFragment()).toMatchSnapshot();
});
