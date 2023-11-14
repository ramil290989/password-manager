import React from 'react';
import initI18n from './initI18n.js';
import App from './App.jsx';

const initApp = async () => {
  await initI18n();

  return (
    <App />
  );
};

export default initApp;
