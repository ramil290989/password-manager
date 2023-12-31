import ReactDOM from 'react-dom/client';
import initApp from './initApp.jsx';

initApp()
  .then((vdom) => {
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(vdom);
  });
