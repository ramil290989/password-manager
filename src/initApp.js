import React from 'react';
import { Provider } from 'react-redux';
import store from './slices/index.js';
import initI18n from './initI18n.js';
import App from './App.jsx';

const initApp = async () => {
  await initI18n();

  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

export default initApp;
