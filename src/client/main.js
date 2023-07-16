import App from '../App/App';
import { BrowserRouter, createBrowserRouter } from 'react-router-dom';
import React from 'react';
import { hydrate } from 'react-dom';

hydrate(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept();
}
  