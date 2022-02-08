import React from 'react';
import ReactDOM from 'react-dom';

const AppEntry = () => {
  return 'Hello World';
}

const root = document.getElementById('root');

ReactDOM.render(<AppEntry />, root, () => root.setAttribute('data-ouia-safe', 'true'));
