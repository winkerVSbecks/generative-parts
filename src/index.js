import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

loadPolyfills().then(() => {
  ReactDOM.render(<App />, document.getElementById('root'));
});

/**
 * Do feature detection, to figure out which polyfills needs to be imported.
 **/
function loadPolyfills() {
  const polyfills = [];

  if (!supportsResizeObserver()) {
    polyfills.push(import('resize-observer-polyfill'));
  }

  return Promise.all(polyfills);
}

function supportsResizeObserver() {
  return (
    'ResizeObserver' in global &&
    'ResizeObserverEntry' in global &&
    'contentRect' in ResizeObserverEntry.prototype
  );
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
