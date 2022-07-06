import React from 'react';
import ReactDOM from 'react-dom/client';
import './main.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
// on importe le Provider
import { Provider } from "react-redux";
// on importe le store
import { store } from "./store";
import ErrorBoundary from './components/errorboundary/errorboundary';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <ErrorBoundary>
      <App />
      </ErrorBoundary>
    </React.StrictMode>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
