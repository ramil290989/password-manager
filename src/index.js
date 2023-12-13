import ReactDOM from 'react-dom/client';
import initApp from './initApp.js';

initApp()
  .then((vdom) => {
    const root = ReactDOM.createRoot(document.body);
    root.render(vdom);
  });
