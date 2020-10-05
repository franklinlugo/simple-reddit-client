import React from 'react';
import { screen } from '@testing-library/react';
import Layout from './Layout';
import { renderWithProvider } from '../../utils/tests/renderWithProvider';
import { getTopPost as getTopPostMock } from '../../services';
import { postsList } from '../../utils/tests/fixtures';

jest.mock('../../services');

afterAll(() => {
  jest.clearAllMocks();
});

test('Layout should render', async () => {
  getTopPostMock.mockResolvedValueOnce(postsList);
  const { asFragment } = renderWithProvider(<Layout />);
  await screen.findByText('111 title');
  expect(asFragment()).toMatchSnapshot();
});
