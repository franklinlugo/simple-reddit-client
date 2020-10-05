/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';

jest.mock('framer-motion', () => ({
  AnimatePresence: ({ children }) => children,
  motion: {
    div: ({ children, ...rest }) => (
      <div {...rest} animate={null} exit={null} initial={null} transition={null} style={null} variants={null}>
        {children}
      </div>
    ),
  },
}));
