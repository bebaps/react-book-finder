import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

// TODO: Review the project structure. Does this follow the best practice for organizing a React app?
// TODO: Set up ESLint, preferably with the most common settings or config for a React project.
// TODO: Examine the manifest.json and index.html, and update them accordingly.
// TODO: Dump the React Bootstrap in favor of Tailwind.css. Good to get the experience. This will force me to create more components.
