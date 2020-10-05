import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import { store } from './redux';
import { ThemeProvider, theme, GlobalStyle } from './styles';

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </Provider>,
  document.getElementById('app'),
);
