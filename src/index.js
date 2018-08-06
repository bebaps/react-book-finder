import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

// TODO: Set up ESLint, preferably with the most common settings or config for a React project.
// TODO: Dump the React Bootstrap in favor of Tailwind.css. Good to get the experience. This will force me to create more components.
// TODO: enable CSS modules
