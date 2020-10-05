import React from 'react';
import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import PostItem from './PostItem';
import { postsList } from '../../utils/tests/fixtures';

test('PostItem should render', () => {
  const dataMock = { ...postsList[0] };
  const onDismissPostMock = jest.fn();
  const onSetActivePostMock = jest.fn();
  const { asFragment } = render(
    <PostItem data={dataMock} onDismissPost={onDismissPostMock} onSetActivePost={onSetActivePostMock} />,
  );

  expect(asFragment()).toMatchSnapshot();

  userEvent.click(screen.getByText('111 author'));
  expect(onSetActivePostMock).toBeCalledTimes(1);

  userEvent.click(screen.getByRole('button'));
  expect(onDismissPostMock).toBeCalledTimes(1);
});
